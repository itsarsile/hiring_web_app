import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/config/redux/store";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div data-theme="corporate" className={opensans.className}>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </div>
  );
}
