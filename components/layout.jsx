import Footer from "./Footer";
import Navbar from "./Navbar";

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
