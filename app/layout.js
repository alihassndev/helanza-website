import "./globals.css";
import Header from "./components/Header"; // We are importing our new Header
import Footer from "./components/Footer"; // We are importing our new Footer

export const metadata = {
  title: "Helanza Ind. - Custom Apparel Manufacturer",
  description:
    "Your premier partner in Sialkot, Pakistan for custom sportswear, tracksuits, and uniforms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {" "}
        {/* This ensures footer sticks to bottom */}
        <Header /> {/* This adds our Header to every page */}
        <main className="flex-grow">
          {children} {/* This is where our page content will go */}
        </main>
        <Footer /> {/* This adds our Footer to every page */}
      </body>
    </html>
  );
}
