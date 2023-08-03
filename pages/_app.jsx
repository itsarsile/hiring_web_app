import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="corporate" className={opensans.className}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}


