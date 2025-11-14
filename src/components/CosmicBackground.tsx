// Cosmic background outside the device frame
// Dark navy to black gradient with soft aurora radial blobs and CRT glow

const CosmicBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-950">
      {/* Soft aurora radial blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-fuchsia-900/20 to-purple-900/20 rounded-full blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
      
      {/* Spectral flare overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-cyan-500/5 opacity-30"></div>
      
      {/* Subtle chromatic aberration overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-blue-500/10 mix-blend-screen"></div>
      </div>
      
      {/* CRT glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      
      {/* Subtle stars / noise */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CosmicBackground;

