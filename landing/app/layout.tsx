import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portable Context Framework | Context as Code",
  description: "Universal, portable context for AI coding agents. Store context in GitHub, access from any tool. Works with Claude Code, Codex, Cursor, and more.",
  keywords: ["AI coding", "context management", "GitHub", "MCP", "Claude Code", "Codex", "Cursor"],
  authors: [{ name: "Wundr Space", url: "https://wundr.space" }],
  openGraph: {
    title: "Portable Context Framework",
    description: "Context as Code - Universal, portable, yours",
    url: "https://context.wundr.space",
    siteName: "Portable Context Framework",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Context Framework",
    description: "Context as Code - Universal, portable, yours",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
