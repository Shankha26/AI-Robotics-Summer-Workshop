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
        camera-orbit="0deg 75deg 130%" // Zoomed out further to ensure it has plenty of space around all edges
        camera-target="0m 0.75m 0m" // Focused on the lower torso to pull the head down away from the top edge
        field-of-view="50deg"        // Wide field of view to keep the robot small and prevent clipping on rotation
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
