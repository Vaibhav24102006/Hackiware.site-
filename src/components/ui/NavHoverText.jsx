import { motion } from "framer-motion";

const NavHoverText = ({ children }) => (
  <motion.span
    className="font-orbitron text-xs uppercase tracking-[0.25em] text-white/80 transition-colors duration-300"
    whileHover={{
      color: "#00FF85",
      rotateX: 8,
      rotateY: -6,
      y: -2,
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.span>
);

export default NavHoverText;
