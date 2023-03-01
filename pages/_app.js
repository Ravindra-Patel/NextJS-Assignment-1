import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/globals.css";
import HeadMeta from "../components/HeadMeta";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <HeadMeta />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
