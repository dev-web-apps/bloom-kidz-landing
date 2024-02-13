import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import KeyFeatures from "./key-features";
import Packages from "./packages";
import Demo from "./demo";
import HomeFAQ from "./faq-section";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures id="features" />
      <HowItWorks />
      <Packages />
      <HomeFAQ/>
      <Demo />
    </>
  );
};

export default Home;
