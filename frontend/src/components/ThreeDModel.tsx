import React from 'react';

export const ThreeDModel: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] h-[300px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
      {/* Glow Halo behind model to give it a tech backdrop */}
      <div className="absolute w-64 h-64 rounded-full bg-brand-teal/15 blur-[70px] pointer-events-none" />

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
        camera-orbit="0deg 75deg 110%" // Well-positioned camera orbit for the smaller container
        camera-target="0m 0.85m 0m" // Balanced focal target centering the mascot
        field-of-view="44deg"        // Optimized zoom to prevent clipping while filling the box nicely
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
