import { useScroll, useTransform } from "framer-motion";

export const useScrollDepth = () => {
  const { scrollYProgress } = useScroll();

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fgScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const fgFade = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return {
    scrollYProgress,
    bgY,
    fgY,
    fgScale,
    fgFade,
  };
};
