import Banner from "../components/Banner";
import ContatBanner from "../components/ContatBanner";
import Footer from "../components/Footer";
import Invest from "../components/Invest";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import Returns from "../components/Returns";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Invest />
      <Returns />
      <OurTeam />
      <ContatBanner />
      <Footer />
    </div>
  );
}
