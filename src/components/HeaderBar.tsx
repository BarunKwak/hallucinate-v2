// Top bar with glitchy, pixel-style "HALLUCINATE" logo
// Uses Press Start 2P font with RGB color shift animation

const HeaderBar = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-6 px-4 border-b border-gray-200">
      <h1 className="font-pixel text-center text-lg tracking-wider text-gray-900 animate-glitch-logo">
        HALLUCINATE
      </h1>
      {/* Decorative glitchy dots */}
      <div className="flex justify-center gap-2 mt-3">
        <div className="w-2 h-2 bg-y2k-pink rounded-full animate-pulse-glow"></div>
        <div className="w-2 h-2 bg-y2k-cyan rounded-full animate-pulse-glow" style={{ animationDelay: '0.3s' }}></div>
        <div className="w-2 h-2 bg-y2k-purple rounded-full animate-pulse-glow" style={{ animationDelay: '0.6s' }}></div>
      </div>
    </div>
  );
};

export default HeaderBar;

