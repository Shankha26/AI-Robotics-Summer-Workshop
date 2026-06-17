import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';

interface InteractiveRobotProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export const InteractiveRobot: React.FC<InteractiveRobotProps> = ({ mouseX, mouseY }) => {
  // Convert mouse movements into head tilt values (3D rotation)
  // We apply these transforms on the head container
  const headRotateX = useTransform(mouseY, [-400, 400], [15, -15]);
  const headRotateY = useTransform(mouseX, [-400, 400], [-15, 15]);

  // Convert mouse movements into eye/pupil offset translations (look-at effect)
  // We limit the movement to keep the eyes within the visor screen boundaries
  const eyeX = useTransform(mouseX, [-400, 400], [-18, 18]);
  const eyeY = useTransform(mouseY, [-400, 400], [-12, 12]);

  // Subtle ear/antennae offset translation to enhance the 3D parallax depth
  const depthX = useTransform(mouseX, [-400, 400], [-6, 6]);
  const depthY = useTransform(mouseY, [-400, 400], [-4, 4]);

  return (
    <div className="relative w-full max-w-[320px] md:max-w-[380px] aspect-square flex items-center justify-center select-none">
      {/* Decorative Sci-Fi HUD background rings */}
      <div className="absolute inset-0 border border-brand-teal/10 rounded-full animate-spin-slow pointer-events-none scale-105" />
      <div className="absolute inset-4 border border-dashed border-brand-purple/15 rounded-full pointer-events-none" />

      {/* Main 3D Interactive Container */}
      <motion.div
        style={{
          rotateX: headRotateX,
          rotateY: headRotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000
        }}
        className="w-[280px] h-[280px] relative flex flex-col items-center justify-center"
      >

        {/* PARALLAX LAYER - BACK: Neck and shoulders base */}
        <div
          style={{ transform: 'translateZ(-30px)' }}
          className="absolute bottom-4 w-28 h-20 flex flex-col items-center"
        >
          {/* Neck cylinder segment */}
          <div className="w-10 h-10 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-md border border-slate-600/30 shadow-inner" />
          {/* Shoulder collar */}
          <div className="w-32 h-6 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-full border border-slate-700/40 shadow-lg" />
        </div>

        {/* PARALLAX LAYER - MIDDLE: Ears/Side bolts */}
        <motion.div
          style={{
            x: depthX,
            y: depthY,
            transform: 'translateZ(-15px)'
          }}
          className="absolute w-[220px] flex justify-between items-center z-0"
        >
          {/* Left Ear Connector */}
          <div className="w-6 h-12 rounded-l-lg bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-600/30 flex items-center justify-center relative">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          </div>
          {/* Right Ear Connector */}
          <div className="w-6 h-12 rounded-r-lg bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border border-slate-600/30 flex items-center justify-center relative">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
          </div>
        </motion.div>

        {/* PARALLAX LAYER - TOP: Antenna */}
        <motion.div
          style={{
            x: depthX,
            y: depthY,
            transform: 'translateZ(10px)'
          }}
          className="absolute -top-4 z-0 flex flex-col items-center"
        >
          {/* Antenna ball glowing LED */}
          <span className="w-5 h-5 rounded-full bg-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.8)] border border-white/20 animate-pulse" />
          {/* Antenna rod */}
          <div className="w-1.5 h-12 bg-gradient-to-b from-slate-600 to-slate-800" />
        </motion.div>

        {/* PARALLAX LAYER - FOREGROUND: Main Head shell */}
        <motion.div
          style={{ transform: 'translateZ(20px)' }}
          className="w-[180px] h-[180px] rounded-[48px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 border-2 border-slate-700/60 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-center z-10 relative"
        >
          {/* Glowing visor screen */}
          <div className="w-full h-[110px] rounded-[36px] bg-slate-950 border border-brand-teal/30 p-4 flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_20px_rgba(6,182,212,0.2)]">

            {/* Visual Grid pattern inside visor screen */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:10px_10px]" />

            {/* Visual status scanner beam (animated) */}
            <div className="absolute left-0 right-0 h-[1px] bg-brand-teal/40 animate-[scan_3s_linear_infinite] pointer-events-none" />

            {/* Eyes Container (Tracks mouse parallax offset inside the screen) */}
            <motion.div
              style={{ x: eyeX, y: eyeY }}
              className="flex gap-10 justify-center items-center w-full relative z-10"
            >
              {/* Left Eye LED */}
              <div className="flex flex-col items-center gap-1.5">
                {/* Friendly eye brow */}
                <div className="w-7 h-1 rounded-full bg-brand-teal/30 rotate-3" />
                {/* Glowing capsule eye */}
                <div className="w-6 h-8 rounded-full bg-gradient-to-b from-cyan-300 to-brand-teal shadow-[0_0_15px_rgba(6,182,212,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center">
                  {/* Pupil dot */}
                  <div className="w-1.5 h-3 bg-white rounded-full opacity-90" />
                </div>
              </div>

              {/* Right Eye LED */}
              <div className="flex flex-col items-center gap-1.5">
                {/* Friendly eye brow */}
                <div className="w-7 h-1 rounded-full bg-brand-teal/30 -rotate-3" />
                {/* Glowing capsule eye */}
                <div className="w-6 h-8 rounded-full bg-gradient-to-b from-cyan-300 to-brand-teal shadow-[0_0_15px_rgba(6,182,212,0.8),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-center justify-center">
                  {/* Pupil dot */}
                  <div className="w-1.5 h-3 bg-white rounded-full opacity-90" />
                </div>
              </div>

            </motion.div>

          </div>

          {/* Under-visor glowing chin detail */}
          <div className="absolute bottom-3 w-16 h-1.5 rounded-full bg-brand-purple shadow-[0_0_10px_rgba(99,102,241,0.6)]" />

        </motion.div>

      </motion.div>
    </div>
  );
};


