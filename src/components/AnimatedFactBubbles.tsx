// Floating fact bubbles with organic drifting and no duplicates
// Max 6 bubbles on screen, simple click-to-toggle between true/false

import { useState, useEffect } from 'react';

interface FactPair {
  id: string;
  trueText: string;
  falseText: string;
}

interface Bubble {
  id: string;
  pairId: string;
  text: string;
  isTrue: boolean;
  startX: number; // % position
  startY: number; // % position
  direction: string; // animation class
  duration: number; // seconds
  delay: number; // seconds
}

// Paired facts (true variant + false variant)
const FACT_PAIRS: FactPair[] = [
  { id: 'p1', trueText: 'Octopuses have three hearts', falseText: 'Octopuses have green blood that tastes like electricity' },
  { id: 'p2', trueText: 'Honey never spoils', falseText: 'Honey was engineered by ancient aliens' },
  { id: 'p3', trueText: 'Bananas are naturally radioactive', falseText: 'Bananas can predict the weather if held upside down' },
  { id: 'p4', trueText: 'A day on Venus is longer than its year', falseText: 'Venus is actually a giant mirror to Earth' },
  { id: 'p5', trueText: 'Sharks existed before trees', falseText: 'Sharks invented surfing 500 years ago' },
  { id: 'p6', trueText: 'Wombat poop is cube-shaped', falseText: 'Wombats are the original architects of geometry' },
  { id: 'p7', trueText: 'Butterflies taste with their feet', falseText: 'Butterflies can remember human faces for two days' },
  { id: 'p8', trueText: 'Honey bees waggle dance to share location', falseText: 'Your phone loses battery faster near the ocean' },
];

// Animation directions
const DIRECTIONS = [
  'animate-float-up-slow',
  'animate-float-diagonal-left',
  'animate-float-diagonal-right',
  'animate-float-gentle'
];

// Helper to get random position - favor center width, start from bottom for upward drift
const getRandomPosition = () => {
  // Favor center 60-70% of width (roughly 15-85%)
  const x = Math.random() * 70 + 15; // 15-85%
  
  // Spawn from bottom half so bubbles float upward (50-100%)
  const y = Math.random() * 50 + 50; // 50-100%

  return { x, y };
};

const AnimatedFactBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Initialize with 6 bubbles (balanced: 3 true, 3 false)
  useEffect(() => {
    const initialBubbles: Bubble[] = [];
    const usedPairs = new Set<string>();
    const startCount = 6;
    const trueCount = Math.floor(startCount / 2);

    // Create balanced true/false split
    for (let i = 0; i < startCount; i++) {
      let pair: FactPair;
      let attempts = 0;
      do {
        pair = FACT_PAIRS[Math.floor(Math.random() * FACT_PAIRS.length)];
        attempts++;
      } while (usedPairs.has(pair.id) && attempts < 10);

      usedPairs.add(pair.id);
      const isTrue = i < trueCount; // First half are true, second half are false
      const pos = getRandomPosition();
      const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

      initialBubbles.push({
        id: `bubble-${Date.now()}-${i}`,
        pairId: pair.id,
        text: isTrue ? pair.trueText : pair.falseText,
        isTrue,
        startX: pos.x,
        startY: pos.y,
        direction,
        duration: Math.random() * 10 + 25,
        delay: Math.random() * 2,
      });
    }

    // Shuffle array to mix true/false positions
    for (let i = initialBubbles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialBubbles[i], initialBubbles[j]] = [initialBubbles[j], initialBubbles[i]];
    }

    setBubbles(initialBubbles);
  }, []);

  // Respawn system - keep 8-10 bubbles max with balanced true/false ratio
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const maxBubbles = 10;
        const minBubbles = 6;
        
        if (prev.length >= maxBubbles) return prev;
        if (prev.length >= minBubbles && Math.random() > 0.65) return prev;

        // Get used pairs
        const usedPairs = new Set(prev.map((b) => b.pairId));
        
        // Find available pairs
        const availablePairs = FACT_PAIRS.filter((p) => !usedPairs.has(p.id));
        if (availablePairs.length === 0) return prev;

        // Calculate balance - decide what type to spawn based on current ratio
        const trueCount = prev.filter((b) => b.isTrue).length;
        const falseCount = prev.filter((b) => !b.isTrue).length;
        
        // If more true bubbles, spawn false; if more false, spawn true; if equal, random
        let isTrue: boolean;
        if (trueCount > falseCount + 1) {
          isTrue = false; // Spawn false to balance
        } else if (falseCount > trueCount + 1) {
          isTrue = true; // Spawn true to balance
        } else {
          isTrue = Math.random() > 0.5; // Random if balanced
        }

        const pair = availablePairs[Math.floor(Math.random() * availablePairs.length)];
        const pos = getRandomPosition();
        const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

        return [
          ...prev,
          {
            id: `bubble-${Date.now()}`,
            pairId: pair.id,
            text: isTrue ? pair.trueText : pair.falseText,
            isTrue,
            startX: pos.x,
            startY: pos.y,
            direction,
            duration: Math.random() * 10 + 25,
            delay: 0,
          },
        ];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle bubble click to toggle
  const handleBubbleClick = (bubbleId: string) => {
    setBubbles((prev) =>
      prev.map((bubble) => {
        if (bubble.id === bubbleId) {
          const pair = FACT_PAIRS.find((p) => p.id === bubble.pairId);
          if (!pair) return bubble;

          const newIsTrue = !bubble.isTrue;
          return {
            ...bubble,
            isTrue: newIsTrue,
            text: newIsTrue ? pair.trueText : pair.falseText,
          };
        }
        return bubble;
      })
    );
  };

  // Remove bubble after animation completes
  const handleAnimationEnd = (bubbleId: string) => {
    setBubbles((prev) => prev.filter((b) => b.id !== bubbleId));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute pointer-events-auto cursor-pointer ${bubble.direction}`}
          style={{
            left: `${bubble.startX}%`,
            top: `${bubble.startY}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
          onClick={() => handleBubbleClick(bubble.id)}
          onAnimationEnd={() => handleAnimationEnd(bubble.id)}
        >
          <div
            className={`
              font-pixel text-sm px-4 py-2 rounded-2xl shadow-lg transition-all duration-300
              ${
                bubble.isTrue
                  ? 'bg-white/5 border border-white/10 text-gray-300'
                  : 'bg-[rgba(255,50,80,0.18)] border border-red-500/40 text-red-200 animate-glitch-bubble animate-glitch-border'
              }
            `}
            style={{
              maxWidth: '180px',
              lineHeight: '1.4',
            }}
          >
            {bubble.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedFactBubbles;
