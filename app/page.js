import Banner from "../components/Banner";
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
      <Footer />
    </div>
  );
}
