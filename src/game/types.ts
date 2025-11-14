import type { AIPersona } from '../ai/personas';

// A single fact that can be true or false
export interface Fact {
  id: string;
  text: string;
  isTrue: boolean;
}

// A round in the game
export interface Round {
  roundNumber: number; // 1, 2, 3, 4
  persona: AIPersona; // Which AI is presenting
  originalFact: string; // Original fact text
  rewrittenFact: string; // Fact as rewritten by the persona
  correctAnswer: boolean; // Is it true or false?
  userGuess?: boolean; // User's first guess (null if not answered yet)
  isRedemptionActive?: boolean; // Is redemption guess mode active?
  redemptionGuess?: string; // User's AI guess on redemption
}

// Game state management
export interface GameState {
  isActive: boolean; // Is a game in progress?
  currentRound: Round | null;
  roundNumber: number; // 1-4
  score: number; // How many correct (0-4)
  wrongGuesses: number; // How many wrong (can be 2 max per round with redemption)
  isGameOver: boolean;
  result?: 'win' | 'loss'; // Final result
  usedPersonas: Set<string>; // Track which AI personas have already appeared
}

// Result of a player's guess
export interface GuessResult {
  isCorrect: boolean;
  message: string;
  nextState: 'proceed' | 'redemption' | 'gameOver';
}

