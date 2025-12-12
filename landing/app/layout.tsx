import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portable Context Framework | Collective Intelligence for AI-Accelerated Teams",
  description: "Build at AI speed. Think at human depth. PCF preserves collective intelligence as decisions emerge, enforcing the 'mediate' step in AI-accelerated development.",
  keywords: ["AI coding", "collective intelligence", "context management", "team collaboration", "GitHub", "MCP", "Claude Code", "Codex", "Cursor", "AI development"],
  authors: [{ name: "Wundr Space", url: "https://wundr.space" }],
  openGraph: {
    title: "Portable Context Framework | Collective Intelligence for AI-Accelerated Teams",
    description: "Build at AI speed. Think at human depth. PCF preserves collective intelligence as decisions emerge.",
    url: "https://context.wundr.space",
    siteName: "Portable Context Framework",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Context Framework",
    description: "Build at AI speed. Think at human depth. Preserve collective intelligence.",
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
