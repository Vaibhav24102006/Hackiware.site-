import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { cn } from '../../lib/utils';

const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ACHIEVEMENTS', path: '/achievements' },
    { label: 'CONTACT', path: '/contact' },
];

const Header = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={cn(
                    'fixed inset-x-0 top-0 z-50 flex justify-center pt-4 pb-4 transition-all duration-300',
                    isScrolled ? 'bg-gradient-to-b from-black/70 via-black/40 to-transparent' : 'bg-transparent'
                )}
            >
                <div
                    className={cn(
                        'mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border px-4 md:px-8 h-20 md:h-24 backdrop-blur-xl bg-black/30 shadow-[0_0_40px_rgba(34,211,238,0.35)] transition-all duration-300 pointer-events-auto',
                        'border-cyan-400/30',
                        isScrolled ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-95'
                    )}
                >
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 rounded-2xl bg-cyan-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40 group-hover:border-cyan-400/60 transition-colors duration-300">
                                <img
                                    src="/logo-icon.jpg"
                                    alt="Hackiware Logo"
                                    className="h-11 w-11 object-cover"
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.28em] uppercase">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="relative group py-2"
                                >
                                    <span
                                        className={cn(
                                            'transition-colors duration-300',
                                            isActive ? 'text-cyan-300' : 'text-slate-300/70 group-hover:text-cyan-200'
                                        )}
                                    >
                                        {link.label}
                                    </span>
                                    <span
                                        className={cn(
                                            'pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 blur-[1px] transition-all duration-300',
                                            isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-8 group-hover:opacity-100'
                                        )}
                                    />
                                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-cyan-400/0 blur-2xl opacity-0 transition-all duration-300 group-hover:bg-cyan-400/15 group-hover:opacity-100" />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <Link to="/login" className="hidden md:block">
                            <motion.button
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className="rounded-full border border-white/15 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/90 shadow-[0_0_18px_rgba(34,211,238,0.2)] transition-colors duration-300 hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:text-cyan-200"
                            >
                                Login
                            </motion.button>
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-slate-200 hover:border-cyan-400/70 hover:text-white transition-colors"
                        >
                            <HiMenuAlt3 size={22} />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col border-l border-white/10 bg-[#050505]/95 p-6 md:hidden"
                        >
                            <div className="mb-10 flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200/80">
                                    Navigation
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="rounded-full border border-white/10 bg-black/40 p-2 text-gray-400 hover:border-cyan-400/70 hover:text-white"
                                >
                                    <HiX size={20} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm font-medium uppercase tracking-[0.24em] text-gray-300 hover:text-cyan-300"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="mt-6 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.24em] text-white hover:border-cyan-400/70 hover:bg-cyan-500/10 hover:text-cyan-200"
                                >
                                    Login
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
