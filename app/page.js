import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Category from "./sections/Category";
import Features from "./sections/Features";
import Menu from "./sections/Menu";
import HealthAndRelaxation from "./sections/HealthAndRelaxation";
import Team from "./sections/Team";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";
import Testimonials from "./sections/Testimonials";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div className="font-montserrat">
      <Hero/>
      <WhyChooseUs/>
      <Category/>
      <Features/>
      <Menu/>
      <HealthAndRelaxation/>
      <Team/>
      <Testimonials/>
      <Blog/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}
