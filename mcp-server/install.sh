#!/bin/bash

# Wundr Context MCP Server - Installation Script
# This script configures Claude Desktop to use the Wundr Context MCP server

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print functions
print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_header() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  Wundr Context MCP Server - Installer${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

# Detect OS
detect_os() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macos"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "linux"
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
        echo "windows"
    else
        echo "unknown"
    fi
}

# Get Claude Desktop config path
get_config_path() {
    local os=$1
    case $os in
        macos)
            echo "$HOME/Library/Application Support/Claude/claude_desktop_config.json"
            ;;
        linux)
            echo "$HOME/.config/Claude/claude_desktop_config.json"
            ;;
        windows)
            echo "$APPDATA/Claude/claude_desktop_config.json"
            ;;
        *)
            echo ""
            ;;
    esac
}

# Check if Claude Desktop is installed
check_claude_desktop() {
    local os=$1

    case $os in
        macos)
            if [ -d "/Applications/Claude.app" ]; then
                return 0
            fi
            ;;
        linux)
            if command -v claude &> /dev/null; then
                return 0
            fi
            ;;
        windows)
            if [ -d "$LOCALAPPDATA/Programs/Claude" ]; then
                return 0
            fi
            ;;
    esac

    return 1
}

# Get absolute path to MCP server
get_server_path() {
    local script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
    echo "$script_dir/build/index.js"
}

# Create config directory if it doesn't exist
create_config_dir() {
    local config_path=$1
    local config_dir=$(dirname "$config_path")

    if [ ! -d "$config_dir" ]; then
        print_info "Creating config directory: $config_dir"
        mkdir -p "$config_dir"
        print_success "Config directory created"
    fi
}

# Backup existing config
backup_config() {
    local config_path=$1

    if [ -f "$config_path" ]; then
        local backup_path="${config_path}.backup.$(date +%Y%m%d_%H%M%S)"
        print_info "Backing up existing config to: $backup_path"
        cp "$config_path" "$backup_path"
        print_success "Backup created"
    fi
}

# Add MCP server to config
add_to_config() {
    local config_path=$1
    local server_path=$2

    # Create config directory if needed
    create_config_dir "$config_path"

    # Backup existing config
    backup_config "$config_path"

    # Read existing config or create new one
    local existing_config="{}"
    if [ -f "$config_path" ]; then
        existing_config=$(cat "$config_path")
    fi

    # Check if wundr-context already exists
    if echo "$existing_config" | grep -q '"wundr-context"'; then
        print_warning "wundr-context MCP server already configured"
        read -p "Do you want to update it? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Skipping configuration update"
            return 0
        fi
    fi

    # Use Python to properly merge JSON (more reliable than jq)
    python3 -c "
import json
import sys

# Read existing config
try:
    with open('$config_path', 'r') as f:
        config = json.load(f)
except:
    config = {}

# Ensure mcpServers exists
if 'mcpServers' not in config:
    config['mcpServers'] = {}

# Add or update wundr-context
config['mcpServers']['wundr-context'] = {
    'command': 'node',
    'args': ['$server_path']
}

# Write updated config
with open('$config_path', 'w') as f:
    json.dump(config, f, indent=2)

print('Configuration updated successfully')
" 2>/dev/null

    if [ $? -eq 0 ]; then
        print_success "MCP server added to config"
        return 0
    else
        # Fallback to manual JSON creation if Python fails
        print_warning "Python not available, using manual config creation"

        cat > "$config_path" << EOF
{
  "mcpServers": {
    "wundr-context": {
      "command": "node",
      "args": ["$server_path"]
    }
  }
}
EOF
        print_success "MCP server added to config (manual method)"
    fi
}

# Verify Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        print_info "Please install Node.js 18+ from https://nodejs.org/"
        return 1
    fi

    local node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        print_error "Node.js version is $node_version, but 18+ is required"
        return 1
    fi

    print_success "Node.js $(node -v) detected"
    return 0
}

# Build the MCP server
build_server() {
    local script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

    print_info "Building MCP server..."
    cd "$script_dir"

    if [ ! -d "node_modules" ]; then
        print_info "Installing dependencies..."
        npm install
    fi

    npm run build
    print_success "MCP server built successfully"
}

# Main installation flow
main() {
    print_header

    # Detect OS
    local os=$(detect_os)
    print_info "Detected OS: $os"

    if [ "$os" == "unknown" ]; then
        print_error "Unsupported operating system: $OSTYPE"
        exit 1
    fi

    # Check Node.js
    if ! check_node; then
        exit 1
    fi

    # Build server
    build_server

    # Get paths
    local config_path=$(get_config_path "$os")
    local server_path=$(get_server_path)

    print_info "Config path: $config_path"
    print_info "Server path: $server_path"

    # Check if server build exists
    if [ ! -f "$server_path" ]; then
        print_error "Server build not found at: $server_path"
        print_info "Try running: npm run build"
        exit 1
    fi

    # Check Claude Desktop installation
    if ! check_claude_desktop "$os"; then
        print_warning "Claude Desktop may not be installed"
        print_info "Download from: https://claude.ai/download"
        echo ""
        read -p "Continue anyway? (y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    else
        print_success "Claude Desktop detected"
    fi

    # Add to config
    add_to_config "$config_path" "$server_path"

    # Show final instructions
    echo ""
    print_success "Installation complete!"
    echo ""
    print_info "Next steps:"
    echo "  1. Restart Claude Desktop (quit and reopen)"
    echo "  2. The 'wundr-context' MCP server will load automatically"
    echo "  3. Use the tools: add_context, query_context, get_timeline"
    echo ""
    print_info "Configuration file: $config_path"
    echo ""
}

# Run main
main "$@"
