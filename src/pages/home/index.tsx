import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import KeyFeatures from "./key-features";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KeyFeatures id="features" />
      <HowItWorks />
    </>
  );
};

export default Home;
