import type { Round } from './types';
import { TRUE_FACTS, FALSE_FACTS } from '../components/AnimatedFactBubbles';
import { getRandomPersona, getPersonaById } from '../ai/personas';
import type { AIPersona } from '../ai/personas';

/**
 * Generates a new round with:
 * - A random AI persona
 * - A random fact (true or false) from the bubble fact pool
 * - Ensures no fact repetition within a single game (4 rounds)
 * - The fact rewritten in the persona's style
 */
export function generateRound(
  roundNumber: number,
  usedPersonas?: Set<string>,
  usedFactIds?: Set<string>
): Round {
  // Pick a persona (prefer one not used yet, but allow repeats if all are used)
  let persona: AIPersona;
  if (usedPersonas && usedPersonas.size < 4) {
    // Try to pick a new persona
    let attempts = 0;
    do {
      persona = getRandomPersona();
      attempts++;
    } while (usedPersonas.has(persona.id) && attempts < 10);
  } else {
    persona = getRandomPersona();
  }

  // Randomly choose if this round will present a true or false fact
  const isTrue = Math.random() > 0.5;
  
  // Pick from the appropriate fact pool, avoiding already used facts
  const factPool = isTrue ? TRUE_FACTS : FALSE_FACTS;
  const availableFacts = usedFactIds
    ? factPool.filter(f => !usedFactIds.has(f.id))
    : factPool;

  if (availableFacts.length === 0) {
    throw new Error(`No available ${isTrue ? 'true' : 'false'} facts for round ${roundNumber}`);
  }

  const fact = availableFacts[Math.floor(Math.random() * availableFacts.length)];

  // Rewrite it in the persona's style
  const rewrittenFact = persona.rewriteStyle(fact.text);

  return {
    roundNumber,
    persona,
    originalFact: fact.text,
    rewrittenFact,
    correctAnswer: isTrue,
    userGuess: undefined,
    isRedemptionActive: false,
    redemptionGuess: undefined,
  };
}

/**
 * Checks if a guess is correct and returns feedback
 */
export function checkGuess(
  round: Round,
  guess: boolean
): { isCorrect: boolean; message: string } {
  const isCorrect = guess === round.correctAnswer;

  if (isCorrect) {
    return {
      isCorrect: true,
      message: '✓ CORRECT! Moving to next round...',
    };
  } else {
    return {
      isCorrect: false,
      message: '✗ WRONG! Time for a redemption guess...',
    };
  }
}

/**
 * Checks if a redemption guess (which AI said this?) is correct
 */
export function checkRedemption(
  round: Round,
  guessedPersonaId: string
): { isCorrect: boolean; message: string } {
  const isCorrect = guessedPersonaId === round.persona.id;

  if (isCorrect) {
    return {
      isCorrect: true,
      message: `✓ RIGHT! It was ${round.persona.name}! You survive this round...`,
    };
  } else {
    const correctPersona = getPersonaById(round.persona.id);
    return {
      isCorrect: false,
      message: `✗ WRONG! It was ${correctPersona?.name}. Game Over.`,
    };
  }
}

