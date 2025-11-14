// Realistic first-generation iPhone device frame
// Centered in viewport with proper bezels and hardware details

interface DeviceFrameProps {
  children: React.ReactNode;
}

const DeviceFrame = ({ children }: DeviceFrameProps) => {
  return (
    // Outer container - centers device in viewport
    <div className="relative z-10 mx-auto flex items-center justify-center min-h-screen px-4 py-8">
      
      {/* OUTER FRAME / DEVICE SHELL */}
      {/* First-gen iPhone with taller aspect ratio, thick black bezels, rounded corners */}
      <div className="relative w-full max-w-[380px] aspect-[390/760] rounded-[40px] bg-black border-[6px] border-black shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden">
        
        {/* Subtle shine effect on device frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[34px]"></div>
        
        {/* TOP BEZEL with hardware details */}
        <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center">
          {/* Camera dot (left of speaker) */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-900 border border-gray-700"></div>
          
          {/* Speaker slot (centered) */}
          <div className="w-12 h-1.5 rounded-full bg-gray-900"></div>
        </div>
        
        {/* INNER SCREEN AREA */}
        {/* Inset from bezels, contains all game content */}
        <div className="absolute inset-0 mx-3 my-16 mb-20 bg-white rounded-lg overflow-hidden shadow-inner">
          {/* Screen content in column layout */}
          <div className="h-full w-full flex flex-col">
            {children}
          </div>
        </div>
        
        {/* BOTTOM BEZEL with home button */}
        <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-center">
          {/* Home button - circular with inner ring to suggest physical button */}
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center shadow-inner">
            {/* Inner button ring */}
            <div className="w-12 h-12 rounded-full border-2 border-gray-700 bg-gray-900"></div>
            {/* Subtle highlight to suggest depth */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DeviceFrame;

