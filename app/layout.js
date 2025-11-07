import "./globals.css";

export const metadata = {
  title: "Helanza Ind. - Custom Apparel Manufacturer",
  description:
    "Your premier partner in Sialkot, Pakistan for custom sportswear, tracksuits, and uniforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
