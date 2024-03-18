import HeroSection from "./hero-section";
import HowItWorks from "./how-it-works";
import KeyFeatures from "./key-features";
import Packages from "./packages";
import Demo from "./demo";
import HomeFAQ from "./faq-section";
import { useDeviceSelectors } from "react-device-detect";
import { useEffect } from "react";
import { AddVisitor } from "../../services/api.services";

const Home = () => {
  const [selectors] = useDeviceSelectors(window.navigator.userAgent);
  const { browserName, isDesktop, isTablet } = selectors;

  useEffect(() => {
    const userIP = localStorage.getItem("userIP");
    if (!userIP) {
      async function getUserIP() {
        try {
          const response = await fetch("https://api.ipify.org?format=json");
          const data = await response.json();
          localStorage.setItem("userIP", data.ip);
          AddVisitor({
            browser: browserName,
            type: isDesktop ? "Web" : isTablet ? "Tablet" : "Mobile",
          });
        } catch (error) {
          console.error("Error fetching IP address:", error);
        }
      }

      getUserIP();
    }
  }, [browserName, isDesktop]);

  return (
    <>
      <HeroSection />
      <KeyFeatures id="features" />
      <HowItWorks />
      <Packages />
      <HomeFAQ />
      <Demo />
    </>
  );
};

export default Home;
