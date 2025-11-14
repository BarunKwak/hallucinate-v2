// Dynamic floating bubble nebula system
// Bubbles drift from bottom, can be tapped to flip and reveal truth

import { useState, useEffect } from 'react';

interface Fact {
  id: string;
  text: string;
  isTrue: boolean;
}

interface Bubble {
  id: string;
  factId: string;
  text: string;
  isTrue: boolean;
  isFlipped: boolean;
  x: number; // horizontal position %
  duration: number; // animation duration in seconds
}

// Pool of facts to draw from
const FACTS: Fact[] = [
  // TRUE FACTS
  { id: 't1', text: 'Octopuses have three hearts', isTrue: true },
  { id: 't2', text: 'Honey never spoils', isTrue: true },
  { id: 't3', text: 'Bananas are naturally radioactive', isTrue: true },
  { id: 't4', text: 'A day on Venus is longer than its year', isTrue: true },
  { id: 't5', text: 'Sharks existed before trees', isTrue: true },
  { id: 't6', text: 'Wombat poop is cube-shaped', isTrue: true },
  
  // FAKE FACTS (plausible hallucinations)
  { id: 'f1', text: 'Butterflies can remember human faces for two days', isTrue: false },
  { id: 'f2', text: 'Your phone loses battery faster near the ocean', isTrue: false },
  { id: 'f3', text: 'Trees emit chemical warnings that mimic WiFi patterns', isTrue: false },
  { id: 'f4', text: 'Sharks can smell fear through glass', isTrue: false },
  { id: 'f5', text: 'The moon is slowly turning blue', isTrue: false },
  { id: 'f6', text: 'Goldfish can recognize human laughter', isTrue: false },
];

const AnimatedFactBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Initialize bubbles
  useEffect(() => {
    const initialBubbles: Bubble[] = [];
    for (let i = 0; i < 6; i++) {
      const fact = FACTS[Math.floor(Math.random() * FACTS.length)];
      initialBubbles.push({
        id: `bubble-${Date.now()}-${i}`,
        factId: fact.id,
        text: fact.text,
        isTrue: fact.isTrue,
        isFlipped: false,
        x: Math.random() * 70 + 10, // 10% to 80%
        duration: Math.random() * 8 + 12, // 12-20 seconds
      });
    }
    setBubbles(initialBubbles);
  }, []);

  // Respawn bubbles after they've drifted off screen
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const now = Date.now();
        // Add new bubble occasionally
        if (Math.random() > 0.7 && prev.length < 8) {
          const fact = FACTS[Math.floor(Math.random() * FACTS.length)];
          return [
            ...prev,
            {
              id: `bubble-${now}`,
              factId: fact.id,
              text: fact.text,
              isTrue: fact.isTrue,
              isFlipped: false,
              x: Math.random() * 70 + 10,
              duration: Math.random() * 8 + 12,
            },
          ];
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle bubble click to flip
  const handleBubbleClick = (bubbleId: string) => {
    setBubbles((prev) =>
      prev.map((bubble) =>
        bubble.id === bubbleId ? { ...bubble, isFlipped: !bubble.isFlipped } : bubble
      )
    );
  };

  // Remove bubble after animation completes
  const handleAnimationEnd = (bubbleId: string) => {
    setBubbles((prev) => prev.filter((b) => b.id !== bubbleId));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => {
        const displayAsTrue = bubble.isFlipped ? !bubble.isTrue : bubble.isTrue;
        
        return (
          <div
            key={bubble.id}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${bubble.x}%`,
              animation: `drift ${bubble.duration}s linear forwards`,
            }}
            onClick={() => handleBubbleClick(bubble.id)}
            onAnimationEnd={() => handleAnimationEnd(bubble.id)}
          >
            <div
              className={`
                font-pixel text-sm px-4 py-2 rounded-2xl shadow-lg transition-all duration-300
                ${bubble.isFlipped ? 'animate-bubble-flip' : ''}
                ${
                  displayAsTrue
                    ? 'bg-gray-600/80 text-gray-200 backdrop-blur-sm'
                    : 'bg-gradient-to-br from-y2k-pink/80 via-y2k-purple/80 to-y2k-cyan/80 text-white backdrop-blur-sm animate-glitch-bubble'
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
        );
      })}
    </div>
  );
};

export default AnimatedFactBubbles;

