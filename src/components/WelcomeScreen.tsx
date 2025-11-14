// Welcome screen with all layers coordinated
// Dark mode, CRT noise, glitch overlay, pixel streaks, floating bubbles, centered title cluster

import GlitchOverlay from './GlitchOverlay';
import PixelStreaks from './PixelStreaks';
import GlitchBlocks from './GlitchBlocks';
import AnimatedFactBubbles from './AnimatedFactBubbles';

interface WelcomeScreenProps {
  onStartGame?: () => void;
}

const WelcomeScreen = ({ onStartGame }: WelcomeScreenProps) => {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* LAYER 1: CRT noise overlay */}
      <div 
        className="absolute inset-0 opacity-5 animate-crt-noise pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      ></div>

      {/* LAYER 2: Glitch overlay (slices and crack beams) */}
      <GlitchOverlay />

      {/* LAYER 3: Glitch blocks (colored rectangles for CRT TV vibe) */}
      <GlitchBlocks />

      {/* LAYER 4: Pixel streaks (sliding horizontally) */}
      <PixelStreaks />

      {/* LAYER 5: Floating bubble nebula (behind title) */}
      <AnimatedFactBubbles />

      {/* LAYER 6: Centered title + subhead + button cluster */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
        {/* Cosmic radial glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-600/30 via-purple-800/10 to-transparent blur-3xl pointer-events-none"></div>
        
        {/* Title */}
        <div className="relative mb-2">
          <h1 className="font-pixel text-5xl text-center text-white tracking-wider animate-glitch-logo drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
            HALLUCINATE
          </h1>
        </div>

        {/* Subheadline */}
        <div className="relative mb-8">
          <p className="font-pixel text-md text-center text-cyan-400/80 tracking-widest">
            An AI bluffing game
          </p>
        </div>

        {/* START GAME button */}
        <button
          onClick={onStartGame}
          className="relative font-pixel text-xl px-8 py-4 bg-gradient-to-r from-y2k-purple via-y2k-pink to-y2k-cyan text-white rounded-full shadow-lg hover:shadow-2xl transition-all active:scale-95 animate-glitch-button hover:from-y2k-magenta hover:via-y2k-purple hover:to-y2k-blue"
        >
          START GAME
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
