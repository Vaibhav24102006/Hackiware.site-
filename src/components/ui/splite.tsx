// @ts-nocheck
import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineScene = ({ scene, className = "" }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-hacki-cyan border-t-transparent" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
};

export default SplineScene;

