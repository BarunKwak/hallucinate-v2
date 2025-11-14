// Fact pool for Hallucinate game
// Each fact has both a true and false variant for dynamic rewriting

export interface FactPair {
  id: string;
  trueFact: string;
  falseFact: string;
  difficulty?: 'easy' | 'medium' | 'hard'; // For future difficulty scaling
}

export const FACT_PAIRS: FactPair[] = [
  {
    id: 'octopus',
    trueFact: 'Octopuses taste with their arms.',
    falseFact: 'Octopuses breathe through their skin like frogs do.',
    difficulty: 'medium',
  },
  {
    id: 'venus',
    trueFact: 'A day on Venus is longer than its year.',
    falseFact: 'Venus rotates three times faster than Earth.',
    difficulty: 'hard',
  },
  {
    id: 'bananas',
    trueFact: 'Bananas are naturally radioactive.',
    falseFact: 'Bananas contain a chemical that makes them toxic if eaten together.',
    difficulty: 'medium',
  },
  {
    id: 'wombats',
    trueFact: 'Wombats poop perfect cubes.',
    falseFact: 'Wombat poop smells like vanilla extract.',
    difficulty: 'easy',
  },
  {
    id: 'butterflies',
    trueFact: 'Butterflies can smell with their feet.',
    falseFact: 'Butterflies remember human faces for several days.',
    difficulty: 'medium',
  },
  {
    id: 'honey',
    trueFact: 'Honey found in ancient tombs is still edible.',
    falseFact: 'Honey from ancient Egypt tastes sweeter due to decomposed pollen.',
    difficulty: 'hard',
  },
  {
    id: 'sharks',
    trueFact: 'Sharks existed before trees.',
    falseFact: 'Sharks were the first animals to develop fins.',
    difficulty: 'easy',
  },
  {
    id: 'eiffel',
    trueFact: 'The Eiffel Tower grows in summer heat.',
    falseFact: 'The Eiffel Tower shrinks in cold weather due to metal contraction.',
    difficulty: 'hard',
  },
  {
    id: 'turtles',
    trueFact: 'Some turtles can breathe through their butts.',
    falseFact: 'Turtles cannot breathe underwater like sea snakes.',
    difficulty: 'medium',
  },
  {
    id: 'moon',
    trueFact: 'The moon is slowly drifting away from Earth.',
    falseFact: 'The moon is getting closer to Earth by 1 meter per year.',
    difficulty: 'hard',
  },
  {
    id: 'clouds',
    trueFact: 'Clouds weigh less on colder days.',
    falseFact: 'A typical cloud weighs as much as 100 elephants.',
    difficulty: 'medium',
  },
  {
    id: 'phone',
    trueFact: 'Your phone loses battery faster near large bodies of water.',
    falseFact: 'Your phone loses battery faster near the ocean due to salt in the air.',
    difficulty: 'easy',
  },
  {
    id: 'trees',
    trueFact: 'Trees emit chemical warning signals through the air.',
    falseFact: 'Trees communicate exclusively through root networks underground.',
    difficulty: 'medium',
  },
  {
    id: 'bones',
    trueFact: 'Most people\'s bones stop growing in their late twenties.',
    falseFact: 'Human bones continue to grow into your thirties.',
    difficulty: 'hard',
  },
  {
    id: 'cats',
    trueFact: 'Cats can recognize their names but choose to ignore them.',
    falseFact: 'Cats are biologically incapable of recognizing human language.',
    difficulty: 'easy',
  },
  {
    id: 'goldfish',
    trueFact: 'Goldfish memory is actually longer than three seconds.',
    falseFact: 'Goldfish can recognize human laughter and respond to it.',
    difficulty: 'easy',
  },
  {
    id: 'owls',
    trueFact: 'Owls tilt their heads to locate sounds using time delays.',
    falseFact: 'Owls tilt their heads to triangulate color differences.',
    difficulty: 'medium',
  },
  {
    id: 'hummingbirds',
    trueFact: 'Hummingbirds are the only birds that can fly backwards.',
    falseFact: 'Hummingbirds are the only birds that can hover completely still.',
    difficulty: 'easy',
  },
  {
    id: 'jellyfish',
    trueFact: 'Some jellyfish are biologically immortal.',
    falseFact: 'Jellyfish have nine brains distributed across their bodies.',
    difficulty: 'medium',
  },
  {
    id: 'tardigrades',
    trueFact: 'Tardigrades can survive in the vacuum of space.',
    falseFact: 'Tardigrades are the only animals visible without a microscope.',
    difficulty: 'hard',
  },
];

// Pick a random fact pair, optionally excluding already used ones
export function getRandomFactPair(usedIds?: Set<string>): FactPair | undefined {
  const available = usedIds 
    ? FACT_PAIRS.filter(fp => !usedIds.has(fp.id))
    : FACT_PAIRS;
  
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
}

