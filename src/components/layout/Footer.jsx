import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <path
        d="M4 4h4.5l3 4 3-4H19l-5.5 6.7L20 20h-4.6l-3.5-4.7L8 20H4l6-7.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <path
        d="M9 19c-4 1.2-4-2-6-2m12 4v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-10 0C1.27.65.09 1 .09 1A5.07 5.07 0 0 0 0 4.77a5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 4 19.13V23"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <>
        <path
          d="M6 9h4v12H6z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="8" cy="5" r="2" fill="currentColor" />
        <path
          d="M14 14a3 3 0 0 1 6 0v7h-4v-6"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050506] py-12 text-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="font-orbitron text-sm uppercase tracking-[0.3em] text-hacki-cyan">
          Hackiware
        </p>
        <p className="mt-2 max-w-xs text-sm text-white/70">
          Crafting immersive cyber experiences with motion-first interfaces and
          high fidelity micro-interactions.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-white/70">
        <span className="font-semibold text-white">Quick Links</span>
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="transition hover:text-hacki-cyan"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-semibold text-white">Connect</span>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition"
              whileHover={{
                boxShadow: "0 0 20px #00E0FF",
                color: "#00FF85",
                scale: 1.08,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition group-hover:drop-shadow-[0_0_12px_#00E0FF]"
              >
                {social.icon}
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
    <p className="mt-10 text-center text-xs text-white/40">
      © {new Date().getFullYear()} Hackiware. All rights reserved.
    </p>
  </footer>
);

export default Footer;
