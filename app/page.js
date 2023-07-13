import Banner from "../components/Banner";
import ContatBanner from "../components/ContatBanner";
import Footer from "../components/Footer";
import Invest from "../components/Invest";
import Navbar from "../components/Navbar";
import Returns from "../components/Returns";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Invest />
      <Returns />
      <ContatBanner />
      <Footer />
    </div>
  );
}
