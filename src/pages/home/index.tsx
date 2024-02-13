import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import KeyFeatures from "./key-features";
import Packages from "./packages";
import Demo from "./demo";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures id="features" />
      <HowItWorks />
      <Packages />
      <Demo />
    </>
  );
};

export default Home;
