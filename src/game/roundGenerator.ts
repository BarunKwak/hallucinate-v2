import type { Round } from './types';
import { getRandomFactPair } from './facts';
import { getRandomPersona, getPersonaById } from '../ai/personas';
import type { AIPersona } from '../ai/personas';

/**
 * Generates a new round with:
 * - A random AI persona
 * - A random fact (true or false)
 * - The fact rewritten in the persona's style
 */
export function generateRound(
  roundNumber: number,
  usedPersonas?: Set<string>
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

  // Pick a random fact (don't filter by used, just pick any)
  const factPair = getRandomFactPair();
  if (!factPair) {
    throw new Error('No facts available');
  }

  // Randomly choose if this round will present the true or false fact
  const isTrue = Math.random() > 0.5;
  const originalFact = isTrue ? factPair.trueFact : factPair.falseFact;

  // Rewrite it in the persona's style
  const rewrittenFact = persona.rewriteStyle(originalFact);

  return {
    roundNumber,
    persona,
    originalFact,
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

