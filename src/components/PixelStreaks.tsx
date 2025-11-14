// Pixelated horizontal neon streaks with slow sliding animation
// Positioned behind bubbles and title for cosmic Y2K atmosphere

const PixelStreaks = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
      {/* Horizontal pixel streaks sliding slowly */}
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-cyan to-transparent blur-sm opacity-60 animate-streak-slide"
        style={{ top: '20%', width: '60%', left: '-60%', animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-pink to-transparent blur-sm opacity-50 animate-streak-slide"
        style={{ top: '40%', width: '50%', left: '-50%', animationDelay: '3s', animationDuration: '25s' }}
      ></div>
      <div 
        className="absolute h-1.5 bg-gradient-to-r from-transparent via-y2k-yellow to-transparent blur-sm opacity-40 animate-streak-slide"
        style={{ top: '60%', width: '70%', left: '-70%', animationDelay: '7s', animationDuration: '30s' }}
      ></div>
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-green to-transparent blur-sm opacity-55 animate-streak-slide"
        style={{ top: '80%', width: '55%', left: '-55%', animationDelay: '10s', animationDuration: '22s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-magenta to-transparent blur-sm opacity-45 animate-streak-slide"
        style={{ top: '30%', width: '65%', left: '-65%', animationDelay: '5s', animationDuration: '28s' }}
      ></div>
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-blue to-transparent blur-sm opacity-50 animate-streak-slide"
        style={{ top: '50%', width: '45%', left: '-45%', animationDelay: '12s', animationDuration: '26s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-lime to-transparent blur-sm opacity-60 animate-streak-slide"
        style={{ top: '70%', width: '58%', left: '-58%', animationDelay: '8s', animationDuration: '24s' }}
      ></div>

      {/* Additional reverse direction streaks for more depth */}
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-purple/60 to-transparent blur-md opacity-40"
        style={{ 
          top: '25%', 
          width: '50%', 
          right: '-50%',
          animation: 'streakSlide 23s linear infinite reverse',
          animationDelay: '2s'
        }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-red/60 to-transparent blur-md opacity-45"
        style={{ 
          top: '65%', 
          width: '60%', 
          right: '-60%',
          animation: 'streakSlide 27s linear infinite reverse',
          animationDelay: '6s'
        }}
      ></div>
    </div>
  );
};

export default PixelStreaks;

