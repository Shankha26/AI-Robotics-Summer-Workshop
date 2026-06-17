import React from 'react';

export const ThreeDModel: React.FC = () => {
  return (
    <div className="relative w-full max-w-[600px] h-[380px] sm:h-[480px] md:h-[540px] flex items-center justify-center translate-y-2 lg:translate-y-4">
      {/* Glow Halo behind model to give it a tech backdrop */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-teal/15 blur-[70px] pointer-events-none" />

      {/* Model Viewer Element */}
      {/* @ts-ignore - Ignore Custom Element typescript checking */}
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
        alt="AI & Robotics Interactive 3D Robot Mascot"
        auto-rotate
        camera-controls
        shadow-intensity="1.2"
        autoplay
        interaction-prompt="auto"
        auto-rotate-delay="2000"
        rotation-per-second="12deg"
        camera-orbit="0deg 75deg 115%" // Zoomed out slightly to prevent head clipping at the top
        camera-target="0m 0.8m 0m" // Focused on the chest to naturally push the head down
        field-of-view="44deg"        // Wider field of view to keep the entire mascot and shadow in frame
        style={{
          width: '100%',
          height: '100%',
          background: 'transparent',
          outline: 'none',
        }}
      />
    </div>
  );
};
