// Pixelated horizontal neon streaks with slow sliding animation
// Positioned behind bubbles and title for cosmic Y2K atmosphere
// Increased density and visibility with more colors

const PixelStreaks = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {/* Horizontal pixel streaks sliding slowly - increased density and color variety */}
      {/* Forward direction (left to right) */}
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-cyan to-transparent blur-sm opacity-70 animate-streak-slide"
        style={{ top: '15%', width: '60%', left: '-60%', animationDelay: '0s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-yellow to-transparent blur-sm opacity-65 animate-streak-slide"
        style={{ top: '25%', width: '55%', left: '-55%', animationDelay: '2s', animationDuration: '28s' }}
      ></div>
      <div 
        className="absolute h-1.5 bg-gradient-to-r from-transparent via-y2k-pink to-transparent blur-sm opacity-60 animate-streak-slide"
        style={{ top: '35%', width: '70%', left: '-70%', animationDelay: '4s', animationDuration: '25s' }}
      ></div>
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-magenta to-transparent blur-sm opacity-65 animate-streak-slide"
        style={{ top: '45%', width: '50%', left: '-50%', animationDelay: '6s', animationDuration: '24s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-red to-transparent blur-sm opacity-60 animate-streak-slide"
        style={{ top: '55%', width: '65%', left: '-65%', animationDelay: '3s', animationDuration: '26s' }}
      ></div>
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-blue to-transparent blur-sm opacity-55 animate-streak-slide"
        style={{ top: '65%', width: '58%', left: '-58%', animationDelay: '8s', animationDuration: '22s' }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-green to-transparent blur-sm opacity-70 animate-streak-slide"
        style={{ top: '75%', width: '55%', left: '-55%', animationDelay: '1s', animationDuration: '27s' }}
      ></div>
      <div 
        className="absolute h-1.5 bg-gradient-to-r from-transparent via-y2k-cyan to-transparent blur-sm opacity-50 animate-streak-slide"
        style={{ top: '85%', width: '60%', left: '-60%', animationDelay: '5s', animationDuration: '23s' }}
      ></div>

      {/* Reverse direction (right to left) - additional depth */}
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-yellow/70 to-transparent blur-md opacity-55"
        style={{ 
          top: '20%', 
          width: '50%', 
          right: '-50%',
          animation: 'streakSlide 25s linear infinite reverse',
          animationDelay: '2s'
        }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-magenta/70 to-transparent blur-md opacity-60"
        style={{ 
          top: '40%', 
          width: '60%', 
          right: '-60%',
          animation: 'streakSlide 28s linear infinite reverse',
          animationDelay: '4s'
        }}
      ></div>
      <div 
        className="absolute h-1 bg-gradient-to-r from-transparent via-y2k-red/70 to-transparent blur-md opacity-50"
        style={{ 
          top: '60%', 
          width: '55%', 
          right: '-55%',
          animation: 'streakSlide 26s linear infinite reverse',
          animationDelay: '7s'
        }}
      ></div>
      <div 
        className="absolute h-0.5 bg-gradient-to-r from-transparent via-y2k-pink/70 to-transparent blur-md opacity-65"
        style={{ 
          top: '80%', 
          width: '65%', 
          right: '-65%',
          animation: 'streakSlide 24s linear infinite reverse',
          animationDelay: '3s'
        }}
      ></div>
    </div>
  );
};

export default PixelStreaks;

