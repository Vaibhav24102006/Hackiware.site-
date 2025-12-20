// @ts-nocheck
import React from "react";
import { cn } from "../../lib/utils";

const Card = ({ children, className = "", glow = "rgba(0,224,255,0.25)" }) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-300 hover:border-white/20",
        className
      )}
      style={{
        boxShadow: `0 0 40px ${glow}`,
      }}
    >
      {children}
    </div>
  );
};

export default Card;


