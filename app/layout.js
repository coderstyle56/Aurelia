import "./globals.css";

export const metadata = {
  title: "Aurelia — Fine Dining",
  description: "Where Culinary Art Meets Elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
