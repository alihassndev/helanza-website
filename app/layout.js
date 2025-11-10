import "./globals.css";
// Use relative paths as you requested
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // <--- 1. IMPORT IT

export const metadata = {
  title: "Helanza Ind. - Custom Apparel Manufacturer",
  description:
    "Your premier partner in Sialkot, Pakistan for custom sportswear, tracksuits, and uniforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton /> {/* <--- 2. ADD IT HERE */}
      </body>
    </html>
  );
}
