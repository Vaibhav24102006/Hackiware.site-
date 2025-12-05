import React from "react";
import ScrollExpandHero from "./ScrollExpandHero";

const ScrollExpandDemo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
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
    </div>
  );
};

export default ScrollExpandDemo;
