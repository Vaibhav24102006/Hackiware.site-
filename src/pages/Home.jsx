import Hero from "../components/sections/Hero";
import QuoteSection from "../components/sections/QuoteSection";
import SplineSection from "../components/sections/SplineSection";
import CountUpMetrics from "../components/ui/CountUp";

const Home = () => (
  <>
    {/* 1. Hero Section with Video Background */}
    <Hero />
    
    {/* 2. Quote Section - Anant Vega Style */}
    <QuoteSection />
    
    {/* 3. Interactive 3D Systems Section */}
    <SplineSection />
    
    {/* 4. Count-Up Metrics */}
    <CountUpMetrics />
  </>
);

export default Home;
