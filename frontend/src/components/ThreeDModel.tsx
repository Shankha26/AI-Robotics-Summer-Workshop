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
        camera-orbit="0deg 75deg 105%" // Starting angle facing front, slightly zoomed out to prevent shadow clipping
        camera-target="0m 1.1m 0m" // Raised target to shift the robot lower in the viewport
        field-of-view="36deg"        // Optimized zoom factor to prevent clipping on rotation
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
