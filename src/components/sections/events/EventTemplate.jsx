import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import { motion } from "framer-motion";
import SplineScene from "../../ui/splite";

/**
 * Event Section Template
 * 
 * Copy this file and rename it for each new event.
 * Customize:
 * - Event title and description
 * - Colors (replace hacki-cyan/hacki-green with custom colors)
 * - Content inside <ContainerScroll> (image/video/Spline)
 */
const EventTemplate = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-hacki-dark">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            {/* Eyebrow text */}
            <motion.p
              className="font-orbitron text-xs uppercase tracking-[0.5em] text-hacki-cyan"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Event Category
            </motion.p>

            {/* Event Title */}
            <motion.h1
              className="text-4xl font-bold text-white md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Event Name{" "}
              <span className="block text-hacki-green">Edition</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mx-auto max-w-2xl text-base text-white/70 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Your event description goes here. Make it compelling and concise.
            </motion.p>
          </div>
        }
      >
        {/* OPTION 1: Image Content */}
        <img
          src="https://images.unsplash.com/photo-1682685796766-0fdddd050277?q=80&w=2000"
          alt="event"
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />

        {/* OPTION 2: Video Content (uncomment to use) */}
        {/* 
        <video
          className="h-full w-full rounded-2xl object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
        </video>
        */}

        {/* OPTION 3: Spline 3D Scene (uncomment to use) */}
        {/*
        <div className="relative h-full w-full">
          <SplineScene
            scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        */}

        {/* OPTION 4: Custom Gradient Placeholder */}
        {/*
        <div className="relative h-full w-full">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-hacki-cyan/20 via-transparent to-hacki-green/20 backdrop-blur-sm">
            <div className="text-center space-y-6">
              <div className="relative mx-auto h-32 w-32">
                <div className="absolute inset-0 rounded-full border-4 border-hacki-cyan animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-4 border-hacki-green animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">
                  Event Content
                </p>
                <p className="text-sm text-white/60">
                  Your custom content here
                </p>
              </div>
            </div>
          </div>
        </div>
        */}
      </ContainerScroll>
    </div>
  );
};

export default EventTemplate;
