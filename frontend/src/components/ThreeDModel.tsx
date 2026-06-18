import React from 'react';

export const ThreeDModel: React.FC = () => {
  return (
    <div className="relative w-full max-w-[420px] h-[340px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
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
        camera-orbit="0deg 75deg 500%" // Zoomed out significantly to make the robot size very small
        camera-target="0m 1.05m 0m" // Focused on head area
        field-of-view="80deg"        // Extra wide field of view to make the mascot compact
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
