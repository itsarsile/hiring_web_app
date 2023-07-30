import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="shadow-md">
        <div className="max-w-6xl mx-auto">
          <Navbar />
        </div>
      </div>
      {children}
      <Footer />
    </>
  );
}
