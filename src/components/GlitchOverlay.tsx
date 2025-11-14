// Chaotic glitch overlay layer inside device screen
// Adds horizontal glitch slices and crack beams with subtle animations

const GlitchOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Horizontal glitch slices */}
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-y2k-cyan to-transparent opacity-70 animate-glitch-slice"
        style={{ top: '15%', animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-y2k-magenta to-transparent opacity-60 animate-glitch-slice"
        style={{ top: '35%', animationDelay: '0.7s' }}
      ></div>
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-y2k-yellow to-transparent opacity-50 animate-glitch-slice"
        style={{ top: '55%', animationDelay: '1.4s' }}
      ></div>
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-y2k-green to-transparent opacity-60 animate-glitch-slice"
        style={{ top: '75%', animationDelay: '0.3s' }}
      ></div>
      <div 
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-y2k-blue to-transparent opacity-70 animate-glitch-slice"
        style={{ top: '90%', animationDelay: '1.1s' }}
      ></div>

      {/* Diagonal crack beams */}
      <div 
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-y2k-purple/30 to-transparent animate-crack-pulse"
        style={{ left: '20%', transform: 'rotate(15deg)', transformOrigin: 'top left' }}
      ></div>
      <div 
        className="absolute w-px h-full bg-gradient-to-b from-transparent via-y2k-pink/20 to-transparent animate-crack-pulse"
        style={{ right: '30%', transform: 'rotate(-12deg)', transformOrigin: 'top right', animationDelay: '1.5s' }}
      ></div>
      <div 
        className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-y2k-cyan/25 to-transparent animate-crack-pulse"
        style={{ left: '60%', transform: 'rotate(8deg)', transformOrigin: 'bottom left', animationDelay: '0.8s' }}
      ></div>

      {/* Subtle color shift overlay with blend mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-y2k-magenta/5 via-transparent to-y2k-cyan/5 mix-blend-color-dodge opacity-30"></div>
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-y2k-yellow/5 via-transparent to-y2k-blue/5 mix-blend-screen opacity-20"
        style={{ animation: 'pulse 4s ease-in-out infinite' }}
      ></div>
    </div>
  );
};

export default GlitchOverlay;

