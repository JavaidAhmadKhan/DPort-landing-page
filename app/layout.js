import "./globals.css";

export const metadata = {
  title: "DPort Finance",
  description: "DPort Finance app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
