import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Radar,
  Activity,
  Lock,
  Network,
  AlertTriangle,
  TrendingUp,
  Zap,
  Eye,
  Layers,
  GraduationCap,
  Handshake,
} from "lucide-react";

type ProductId = "left" | "right";

interface FeatureMetric {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ProductData {
  id: ProductId;
  title: string;
  description: string;
  features: FeatureMetric[];
  gradient: string;
  ringColor: string;
  glowColor: string;
  imageUrl: string;
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: "left",
    title: "Learning Domains",
    description:
      "Core, hands-on domains Hackiware teaches — practical skills that map directly to real-world roles.",
    features: [
      {
        label: "Offensive Security",
        value: "Guided exploit development, web/binary CTFs, and red-team tactics focused on learning by doing.",
        icon: Zap,
      },
      {
        label: "Defensive Security",
        value: "Incident response, detection engineering, and hands-on blue-team playbooks.",
        icon: ShieldCheck,
      },
      {
        label: "Threat Intelligence",
        value: "Evidence-driven hunting, feed analysis, and translating signals into teachable exercises.",
        icon: Radar,
      },
      {
        label: "Cybersecurity Education",
        value: "Curriculum design, instructor training, and lab-based assessments that scale learning.",
        icon: GraduationCap,
      },
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-cyan-900/20",
    ringColor: "rgba(34, 211, 238, 0.18)",
    glowColor: "rgba(34, 211, 238, 0.28)",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
  },
  right: {
    id: "right",
    title: "Applied Programs",
    description:
      "Hands-on programs and initiatives where learners apply domain skills: workshops, CTFs, simulations, and partnerships.",
    features: [
      {
        label: "Workshops",
        value: "Instructor-led, outcome-focused labs for secure coding and defensive tooling.",
        icon: Activity,
      },
      {
        label: "CTFs",
        value: "Monthly challenge streams across web, binary, crypto, and forensics domains.",
        icon: Zap,
      },
      {
        label: "Simulations",
        value: "Multi-team exercises mirroring national-scale incident response and coordination.",
        icon: AlertTriangle,
      },
      {
        label: "College Collaborations",
        value: "Embedded curriculum, mentorship, and faculty co-design to scale practical outcomes.",
        icon: Handshake,
      },
    ],
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-fuchsia-900/20",
    ringColor: "rgba(244, 114, 182, 0.18)",
    glowColor: "rgba(244, 114, 182, 0.28)",
    imageUrl: "https://images.unsplash.com/photo-1526378721976-267f13b0b7f7?w=800&q=80",
  },
};

const BackgroundGradient: React.FC<{ product: ProductData }> = ({ product }) => {
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-60`}
      style={{
        background: `radial-gradient(circle at 30% 50%, ${product.glowColor}, transparent 50%),
                     radial-gradient(circle at 70% 50%, ${product.glowColor}, transparent 50%)`,
      }}
    />
  );
};

const ProductVisual: React.FC<{ product: ProductData; isActive: boolean }> = ({
  product,
  isActive,
}) => {
  return (
    <div className="relative flex items-center justify-center h-full min-h-[400px]">
      {/* Rotating dashed rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((ring) => {
          const size = 120 + ring * 60;
          return (
            <motion.div
              key={ring}
              {...({
                className: "absolute rounded-full border border-dashed",
                style: {
                  width: `${size}px`,
                  height: `${size}px`,
                  borderColor: product.ringColor,
                },
                animate: {
                  rotate: isActive ? 360 : 0,
                },
                transition: {
                  duration: 20 + ring * 5,
                  repeat: Infinity,
                  ease: "linear",
                },
              } as any)}
            />
          );
        })}
      </div>

      {/* Floating object with glow */}
      <motion.div
        {...({
          className: "relative z-10",
          animate: {
            y: isActive ? [0, -10, 0] : 0,
            scale: isActive ? [1, 1.05, 1] : 1,
          },
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        } as any)}
      >
        <div
          className="relative w-48 h-48 rounded-2xl overflow-hidden border-2"
          style={{
            borderColor: product.ringColor,
            boxShadow: `0 0 40px ${product.glowColor}, 0 0 80px ${product.glowColor}`,
          }}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${product.glowColor}20, transparent)`,
            }}
          />
        </div>
      </motion.div>

      {/* Ambient glow */}
      <motion.div
        {...({
          className: "absolute inset-0 rounded-full blur-3xl",
          style: {
            background: `radial-gradient(circle, ${product.glowColor}, transparent 70%)`,
          },
          animate: {
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.2,
            scale: isActive ? [1, 1.2, 1] : 1,
          },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        } as any)}
      />
    </div>
  );
};

const ProductDetails: React.FC<{ product: ProductData; isActive: boolean }> = ({
  product,
  isActive,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={product.id}
          {...({
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.5 },
            className: "space-y-6",
          } as any)}
        >
          <div>
            <h3 className="text-3xl font-light text-white mb-2">{product.title}</h3>
            <p className="text-white/70 text-lg">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {product.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  {...({
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: index * 0.1 },
                    whileHover: { scale: 1.03, y: -4, boxShadow: `0 12px 40px ${product.glowColor}` },
                    whileTap: { scale: 0.995 },
                    className:
                      "flex items-start gap-4 p-6 rounded-lg bg-white/5 border border-white/10 transition-transform duration-200",
                  } as any)}
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: `${product.glowColor}20`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: product.glowColor }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
                      {feature.label}
                    </div>
                    <div className="text-lg font-semibold text-white">{feature.value}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Switcher: React.FC<{
  activeProduct: ProductId;
  onSwitch: (id: ProductId) => void;
}> = ({ activeProduct, onSwitch }) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-black/40 rounded-full border border-white/10">
      {(["left", "right"] as ProductId[]).map((id) => {
        const product = PRODUCT_DATA[id];
        const isActive = activeProduct === id;
        return (
          <button
            key={id}
            onClick={() => onSwitch(id)}
            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive ? "text-black" : "text-white/70"
            }`}
          >
            <AnimatePresence>
              {isActive && (
                <motion.span
                  layoutId="activeSwitcher"
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
            <span className="relative z-10">{product.title}</span>
          </button>
        );
      })}
    </div>
  );
};

const SpatialProductShowcase: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<ProductId>("left");

  const currentProduct = PRODUCT_DATA[activeProduct];
  const leftProduct = PRODUCT_DATA.left;
  const rightProduct = PRODUCT_DATA.right;

  return (
    <section className="relative mt-16 md:mt-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0f]">
        <BackgroundGradient product={currentProduct} />

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <p className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-300/80 mb-2">
              Learning Surface
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              What We Teach
            </h2>
          </div>

          {/* Main content area */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            {/* Left: Visual */}
            <div className="order-2 lg:order-1 lg:max-w-[520px] mx-auto">
              <ProductVisual product={currentProduct} isActive={true} />
            </div>

            {/* Right: Details */}
            <div className="order-1 lg:order-2">
              <ProductDetails product={currentProduct} isActive={true} />
            </div>
          </div>

          {/* Switcher */}
          <div className="flex justify-center">
            <Switcher activeProduct={activeProduct} onSwitch={setActiveProduct} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpatialProductShowcase;

