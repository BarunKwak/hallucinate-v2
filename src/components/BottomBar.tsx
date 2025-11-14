// Bottom bar with chunky glitchy "START GAME" button
// Y2K gradient with subtle pulse/glitch animation

interface BottomBarProps {
  onStartGame?: () => void;
}

const BottomBar = ({ onStartGame }: BottomBarProps) => {
  return (
    <div className="bg-gradient-to-t from-gray-100 to-white border-t border-gray-200 p-4">
      {/* Chunky START GAME button with glitch effect */}
      <button
        onClick={onStartGame}
        className="w-full py-4 px-6 bg-gradient-to-r from-y2k-purple via-y2k-pink to-y2k-cyan text-white font-bold text-sm tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95 animate-glitch-button"
      >
        START GAME
      </button>
      
      {/* Decorative Y2K elements */}
      <div className="flex justify-center gap-2 mt-3">
        <div className="w-1.5 h-1.5 rounded-full bg-y2k-pink opacity-50"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-y2k-cyan opacity-50"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-y2k-lime opacity-50"></div>
      </div>
    </div>
  );
};

export default BottomBar;
