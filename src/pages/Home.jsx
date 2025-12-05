import ScrollExpandHero from "../components/blocks/ScrollExpandHero";
import Hero from "../components/sections/Hero.jsx";
import WhatIs from "../components/sections/WhatIs";
import Services from "../components/sections/Services.jsx";
import KavachSurakshaSection from "../components/sections/events/KavachSurakshaSection";
import TeamScroller from "../components/sections/TeamScroller";

const Home = () => (
  <>
    <ScrollExpandHero 
      mediaType="video"
      mediaSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1"
      posterSrc="https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg"
      bgImageSrc="https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS"
      title="Cyberpunk Digital Experiences"
      date="Hackiware Research Division"
      scrollToExpand="Scroll to Reveal – Dive Into The Experience"
      textBlend={true}
    />
    <Hero />
    <WhatIs />
    <Services />
    <KavachSurakshaSection />
    <TeamScroller />
  </>
);

export default Home;
