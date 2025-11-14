// Glitchy CRT TV colored rectangles/blocks for old-school glitch vibe
// Subtle colored blocks with jitter animation, sits behind all content

const GlitchBlocks = () => {
  // Define random block positions and colors
  const blocks = [
    { top: '8%', left: '5%', width: '12%', height: '6%', color: 'y2k-yellow', duration: 8 },
    { top: '18%', left: '25%', width: '8%', height: '4%', color: 'y2k-pink', duration: 7 },
    { top: '28%', left: '70%', width: '10%', height: '5%', color: 'y2k-red', duration: 9 },
    { top: '38%', left: '12%', width: '9%', height: '3%', color: 'y2k-cyan', duration: 6 },
    { top: '48%', left: '55%', width: '11%', height: '4%', color: 'y2k-magenta', duration: 8 },
    { top: '58%', left: '15%', width: '8%', height: '5%', color: 'y2k-blue', duration: 7 },
    { top: '68%', left: '65%', width: '10%', height: '6%', color: 'y2k-yellow', duration: 9 },
    { top: '78%', left: '40%', width: '9%', height: '3%', color: 'y2k-red', duration: 8 },
    { top: '12%', left: '55%', width: '7%', height: '4%', color: 'y2k-cyan', duration: 7 },
    { top: '52%', left: '8%', width: '10%', height: '5%', color: 'y2k-pink', duration: 8 },
  ];

  const colorMap: Record<string, string> = {
    'y2k-yellow': 'from-y2k-yellow to-y2k-yellow/30',
    'y2k-pink': 'from-y2k-pink to-y2k-pink/30',
    'y2k-red': 'from-y2k-red to-y2k-red/30',
    'y2k-cyan': 'from-y2k-cyan to-y2k-cyan/30',
    'y2k-magenta': 'from-y2k-magenta to-y2k-magenta/30',
    'y2k-blue': 'from-y2k-blue to-y2k-blue/30',
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {blocks.map((block, idx) => (
        <div
          key={idx}
          className={`absolute bg-gradient-to-br ${colorMap[block.color]} blur-sm opacity-20`}
          style={{
            top: block.top,
            left: block.left,
            width: block.width,
            height: block.height,
            animation: `glitchBlockJitter ${block.duration}s ease-in-out infinite`,
            animationDelay: `${idx * 0.2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default GlitchBlocks;

