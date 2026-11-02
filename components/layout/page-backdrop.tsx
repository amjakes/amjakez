import type { ReactNode } from "react";

import GradientWaves from "@/components/backgrounds/GradientWaves";

export function PageBackdrop(): ReactNode {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <GradientWaves
        horizonColor="#a5a79b"
        waveColor="#e8d2b5"
        crestColor="#590907" 
        speed={0.4}
        amplitude={2.5}
        relief={1}
        lightAngle={120}
        brightness={1.4}
        mouseInteraction
        swellOnClick
        lightMode
        style={{ width: "100%", height: "100%", position: "relative" }}
      />
    </div>
  );
}
