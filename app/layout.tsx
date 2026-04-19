import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saleh Askarzadeh | Backend Developer",
  description:
    "Backend developer with 1.5 years of experience building RESTful APIs and gRPC services with Golang. Skilled in Docker, PostgreSQL, and cloud-native architecture.",
  keywords: [
    "Saleh Askarzadeh",
    "Backend Developer",
    "Golang",
    "Go Developer",
    "RESTful API",
    "gRPC",
    "Docker",
    "PostgreSQL",
    "Next.js",
    "Kerman",
    "Iran",
  ],
  authors: [{ name: "Mohammad Saleh Askarzadeh" }],
  openGraph: {
    title: "Saleh Askarzadeh | Backend Developer",
    description:
      "Backend developer specializing in Go, RESTful APIs, gRPC, Docker, and cloud-native systems.",
    url: "https://saleh.dev",
    siteName: "Saleh Askarzadeh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saleh Askarzadeh | Backend Developer",
    description:
      "Backend developer specializing in Go, RESTful APIs, gRPC, Docker, and cloud-native systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}