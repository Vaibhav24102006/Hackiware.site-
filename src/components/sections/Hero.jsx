import { useCallback, useEffect, useRef, useState } from 'react';
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassyButton from '../ui/GlassyButton';
import Typewriter from '../shared/Typewriter';
import NeonParticles from '../ui/NeonParticles';
import SplineScene from '../ui/splite';
import { Spotlight } from '../ui/spotlight-ibelick';

const typingWords = ['Glassy', 'Motion', 'Cyber'];
const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
const scrollSpring = { type: 'spring', stiffness: 140, damping: 18, mass: 0.55 };

const Hero = () => {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);
    const rafRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const motionContainerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(
        () => () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        },
        []
    );

    const motionMultiplier = prefersReducedMotion || isMobile ? 0.5 : 1;

    const handleMouseMove = useCallback(
        (event) => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                mouseX.set((event.clientX - window.innerWidth / 2) * motionMultiplier);
                mouseY.set((event.clientY - window.innerHeight / 2) * motionMultiplier);
            });
        },
        [mouseX, mouseY, motionMultiplier]
    );

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -140]);
    const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    // Text Parallax
    const titleX = useTransform(smoothX, (v) => v / 32);
    const titleY = useTransform(smoothY, (v) => v / 32);
    const titleRotateX = useTransform(smoothY, (v) => v / 80);
    const titleRotateY = useTransform(smoothX, (v) => v / -80);

    const typewriterX = useTransform(smoothX, (v) => v / 28);
    const typewriterY = useTransform(smoothY, (v) => v / 28);

    // 3D Scene Parallax (Stronger effect)
    const sceneX = useTransform(smoothX, (v) => v / -20);
    const sceneY = useTransform(smoothY, (v) => v / -20);
    const sceneRotateX = useTransform(smoothY, (v) => v / 60);
    const sceneRotateY = useTransform(smoothX, (v) => v / -60);

    return (
        <motion.section
            ref={motionContainerRef}
            className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] pt-32 pb-24 text-white md:pt-36 lg:pt-40 lg:pb-32"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
        >
            {/* Background Layers */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,224,255,0.18),_transparent_65%)]" />

            <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/95"
                style={{ y: bgY, opacity: bgOpacity }}
            />

            <NeonParticles particleCount={220} />

            <Spotlight className="-top-40 left-0 md:left-40 md:-top-10" />

            <motion.div
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0), radial-gradient(circle at 1px 1px, rgba(0,224,255,0.05) 1px, transparent 0)',
                    backgroundSize: '32px 32px, 72px 72px',
                    mixBlendMode: 'screen',
                }}
            />

            <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
                {/* Left: Text Content */}
                <motion.div
                    className="flex max-w-xl flex-col gap-8 text-left md:max-w-2xl lg:mx-0 lg:pl-4"
                    style={{
                        x: titleX,
                        y: titleY,
                        rotateX: titleRotateX,
                        rotateY: titleRotateY,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <motion.p
                        className="font-orbitron text-xs md:text-sm font-semibold uppercase tracking-[0.5em] text-cyan-400/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ x: typewriterX, y: typewriterY }}
                    >
                        Hackiware Labs
                    </motion.p>

                    <motion.h1
                        className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Building{' '}
                        <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text font-medium text-transparent">
                            <Typewriter words={typingWords} speed={110} pause={1400} />
                        </span>
                        Experiences
                    </motion.h1>

                    <motion.p
                        className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We blend cinematic motion, purposeful micro-interactions, and glassy surfaces to craft
                        interfaces that feel alive. Future-forward teams rely on Hackiware to ship experiences with
                        soul.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <GlassyButton href="/contact">
                            Start a Project
                        </GlassyButton>
                        <GlassyButton
                            href="/about"
                            glowColor="#00FF85"
                            className="border-white/10 bg-white/5 hover:bg-white/10"
                        >
                            Learn More
                        </GlassyButton>
                    </motion.div>
                </motion.div>

                {/* Right: 3D Scene */}
                <motion.div
                    className="relative flex h-[420px] w-full items-center justify-center sm:h-[520px] lg:h-[640px]"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        x: sceneX,
                        y: sceneY,
                        rotateX: sceneRotateX,
                        rotateY: sceneRotateY,
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <div className="relative h-full w-full max-w-xl overflow-hidden rounded-[32px] border border-cyan-400/25 bg-black/40 shadow-[0_0_120px_rgba(34,211,238,0.35)] backdrop-blur-xl sm:max-w-2xl">
                        <SplineScene
                            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                            className="h-full w-full"
                        />

                        {/* Glow behind mesh */}
                        <div className="pointer-events-none absolute inset-16 -z-10 rounded-[40px] bg-cyan-500/20 blur-3xl" />
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
