// Welcome screen with centered title + button cluster
// Dark mode with CRT noise and cosmic glow
// Floating bubbles drift behind the centered elements

import AnimatedFactBubbles from './AnimatedFactBubbles';

interface WelcomeScreenProps {
  onStartGame?: () => void;
}

const WelcomeScreen = ({ onStartGame }: WelcomeScreenProps) => {
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* CRT noise overlay */}
      <div 
        className="absolute inset-0 opacity-5 animate-crt-noise pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      ></div>

      {/* Floating bubble nebula (behind title) */}
      <AnimatedFactBubbles />

      {/* Centered title + button cluster */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Cosmic radial glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-purple-600/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
        
        {/* Title */}
        <div className="relative mb-8">
          <h1 className="font-pixel text-5xl text-center text-white tracking-wider animate-glitch-logo drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            HALLUCINATE
          </h1>
        </div>

        {/* START GAME button */}
        <button
          onClick={onStartGame}
          className="relative font-pixel text-xl px-8 py-4 bg-gradient-to-r from-y2k-purple via-y2k-pink to-y2k-cyan text-white rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 animate-glitch-button"
        >
          START GAME
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

