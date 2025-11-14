// Y2K aesthetic background with glitch animations
// Sits behind the device frame

const Y2KBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-y2k-pink to-y2k-purple rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-y2k-cyan to-y2k-lime rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Glitch effect overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-y2k-pink to-transparent opacity-5 animate-glitch"></div>
      
      {/* Scanlines effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="h-1 bg-white opacity-5"
            style={{ marginTop: '20px' }}
          ></div>
        ))}
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-y2k-cyan rounded-full opacity-60" style={{ animation: 'float 3s ease-in-out infinite' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-y2k-pink rounded-full opacity-60" style={{ animation: 'float 4s ease-in-out infinite' }}></div>
      <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-y2k-lime rounded-full opacity-60" style={{ animation: 'float 5s ease-in-out infinite' }}></div>
    </div>
  );
};

export default Y2KBackground;

