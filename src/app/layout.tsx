import { Metadata } from "next"
import "./globals.css"
import Header from '../components/Header'

export const metadata: Metadata = {
  title: "Portfolio Home Page",
  description: "Personal Resume Interactive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
