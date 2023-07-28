import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="corporate" className={opensans.className}>
      <Component {...pageProps} />
    </div>
  );
}
