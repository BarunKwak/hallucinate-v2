// Floating fact bubbles - always exactly 8 on screen
// Immediate respawn when bubble exits, no duplicates, balanced true/false

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
  startX: number;
  startY: number;
  direction: string;
  duration: number;
  delay: number;
}

// TRUE-BUT-SOUND-FAKE facts
export const TRUE_FACTS: Fact[] = [
  { id: 't1', text: 'Octopuses taste with their arms', isTrue: true },
  { id: 't2', text: 'A day on Venus is longer than its year', isTrue: true },
  { id: 't3', text: 'Bananas are naturally radioactive', isTrue: true },
  { id: 't4', text: 'Wombats poop perfect cubes', isTrue: true },
  { id: 't5', text: "Butterflies can 'smell' with their feet", isTrue: true },
  { id: 't6', text: 'Honey found in ancient tombs is still edible', isTrue: true },
  { id: 't7', text: 'Sharks existed before trees', isTrue: true },
  { id: 't8', text: 'The Eiffel Tower grows in summer heat', isTrue: true },
  { id: 't9', text: 'Some turtles can breathe through their butts', isTrue: true },
  { id: 't10', text: 'The moon is slowly drifting away from Earth', isTrue: true },
];

// FALSE-BUT-SOUNDS-TRUE facts
export const FALSE_FACTS: Fact[] = [
  { id: 'f1', text: 'Clouds weigh less on colder days', isTrue: false },
  { id: 'f2', text: 'Your phone loses battery faster near the ocean', isTrue: false },
  { id: 'f3', text: "Trees emit chemical 'warning signals' through the air", isTrue: false },
  { id: 'f4', text: 'Human bones continue to grow into your thirties', isTrue: false },
  { id: 'f5', text: 'Cats can recognize their names but choose to ignore them', isTrue: false },
  { id: 'f6', text: 'The moon is about 500,000 miles away', isTrue: false },
  { id: 'f7', text: 'Most people blink at the same rate while reading', isTrue: false },
  { id: 'f8', text: 'Goldfish can recognize human laughter', isTrue: false },
  { id: 'f9', text: 'Butterflies remember faces for several days', isTrue: false },
  { id: 'f10', text: 'Owls tilt their heads to triangulate color differences', isTrue: false },
];

// Animation directions
const DIRECTIONS = [
  'animate-float-up-slow',
  'animate-float-diagonal-left',
  'animate-float-diagonal-right',
  'animate-float-gentle'
];

// Define vertical lanes to prevent overlap (8 lanes, one per bubble)
const LANES = [10, 20, 30, 40, 50, 60, 70, 80]; // x positions as percentage

// Helper to get position with lane assignment to prevent overlap
const getRandomPosition = (laneIndex: number) => {
  const x = LANES[laneIndex % LANES.length]; // Assign to a specific lane
  const y = Math.random() * 30 + 60; // 60-90% (more spread vertically)
  return { x, y };
};

const AnimatedFactBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Initialize with exactly 8 bubbles (4 true, 4 false)
  useEffect(() => {
    const initialBubbles: Bubble[] = [];
    const used = new Set<string>();

    // Create 4 true bubbles in lanes 0-3
    for (let i = 0; i < 4; i++) {
      let fact: Fact;
      let attempts = 0;
      do {
        fact = TRUE_FACTS[Math.floor(Math.random() * TRUE_FACTS.length)];
        attempts++;
      } while (used.has(fact.id) && attempts < 10);

      used.add(fact.id);
      const pos = getRandomPosition(i);
      const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

      initialBubbles.push({
        id: `bubble-${Date.now()}-${i}`,
        factId: fact.id,
        text: fact.text,
        isTrue: true,
        startX: pos.x,
        startY: pos.y,
        direction,
        duration: Math.random() * 10 + 25,
        delay: Math.random() * 2,
      });
    }

    // Create 4 false bubbles in lanes 4-7
    for (let i = 4; i < 8; i++) {
      let fact: Fact;
      let attempts = 0;
      do {
        fact = FALSE_FACTS[Math.floor(Math.random() * FALSE_FACTS.length)];
        attempts++;
      } while (used.has(fact.id) && attempts < 10);

      used.add(fact.id);
      const pos = getRandomPosition(i);
      const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

      initialBubbles.push({
        id: `bubble-${Date.now()}-${i}`,
        factId: fact.id,
        text: fact.text,
        isTrue: false,
        startX: pos.x,
        startY: pos.y,
        direction,
        duration: Math.random() * 10 + 25,
        delay: Math.random() * 2,
      });
    }

    // Shuffle to mix true/false positions
    for (let i = initialBubbles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialBubbles[i], initialBubbles[j]] = [initialBubbles[j], initialBubbles[i]];
    }

    setBubbles(initialBubbles);
  }, []);

  // Spawn a new bubble to maintain count
  const spawnBubble = (currentBubbles: Bubble[], laneIndex: number) => {
    const currentUsedIds = new Set(currentBubbles.map((b) => b.factId));
    
    // Decide if we should spawn true or false based on current ratio
    const trueCount = currentBubbles.filter((b) => b.isTrue).length;
    const falseCount = currentBubbles.filter((b) => !b.isTrue).length;
    
    let isTrue: boolean;
    if (trueCount > falseCount + 1) {
      isTrue = false; // Spawn false to balance
    } else if (falseCount > trueCount + 1) {
      isTrue = true; // Spawn true to balance
    } else {
      isTrue = Math.random() > 0.5; // Random if balanced
    }

    // Get available facts
    const factPool = isTrue ? TRUE_FACTS : FALSE_FACTS;
    const availableFacts = factPool.filter((f) => !currentUsedIds.has(f.id));
    
    const fact = availableFacts.length > 0 
      ? availableFacts[Math.floor(Math.random() * availableFacts.length)]
      : factPool[Math.floor(Math.random() * factPool.length)];

    const pos = getRandomPosition(laneIndex);
    const direction = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

    return {
      id: `bubble-${Date.now()}-${Math.random()}`,
      factId: fact.id,
      text: fact.text,
      isTrue,
      startX: pos.x,
      startY: pos.y,
      direction,
      duration: Math.random() * 10 + 25,
      delay: 0,
    };
  };

  // Immediate respawn when bubble exits
  const handleAnimationEnd = (bubbleId: string) => {
    setBubbles((prev) => {
      const remaining = prev.filter((b) => b.id !== bubbleId);
      
      if (remaining.length >= 8) return remaining;

      // Spawn new bubble to replace the exited one
      const laneIndex = remaining.length; // Use current count as lane index
      const newBubble = spawnBubble(remaining, laneIndex);
      
      return [...remaining, newBubble];
    });
  };

  // Background effect to ensure we always have 8 bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => {
        if (prev.length >= 8) return prev;

        // We're below 8, spawn more bubbles immediately
        const newBubbles = [...prev];
        while (newBubbles.length < 8) {
          const laneIndex = newBubbles.length;
          const newBubble = spawnBubble(newBubbles, laneIndex);
          newBubbles.push(newBubble);
        }

        return newBubbles;
      });
    }, 500); // Check every 500ms to quickly fix any gaps

    return () => clearInterval(interval);
  }, []);

  // Handle bubble click to toggle
  const handleBubbleClick = (bubbleId: string) => {
    setBubbles((prev) =>
      prev.map((bubble) => {
        if (bubble.id === bubbleId) {
          const pool = bubble.isTrue ? FALSE_FACTS : TRUE_FACTS;
          const newFact = pool.find((f) => f.id !== bubble.factId) || pool[0];
          return {
            ...bubble,
            isTrue: !bubble.isTrue,
            factId: newFact.id,
            text: newFact.text,
          };
        }
        return bubble;
      })
    );
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
