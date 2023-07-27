import Link from "next/link";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Invest from "../components/Invest";
import OurTeam from "../components/OurTeam";
import Returns from "../components/Returns";
import ContactBanner from "../components/ContactBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Invest />
      <Returns />
      <OurTeam />
      <ContactBanner />
      <Footer />
    </div>
  );
}
