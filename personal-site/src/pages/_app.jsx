import "../styles/globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
