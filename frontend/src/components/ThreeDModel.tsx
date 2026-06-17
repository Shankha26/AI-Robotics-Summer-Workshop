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
        camera-orbit="0deg 75deg 120%" // Adjusted orbit for perfect fit
        camera-target="0m 1.05m 0m" // Raised target (focus on head/neck) to shift the robot lower inside the box
        field-of-view="46deg"        // Optimized zoom so the entire model and shadow sit cleanly in the box
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
