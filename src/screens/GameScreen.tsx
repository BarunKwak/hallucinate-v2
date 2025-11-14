import { useState, useEffect } from 'react';
import type { GameState } from '../game/types';
import { generateRound, checkGuess, checkRedemption } from '../game/roundGenerator';
import GlitchOverlay from '../components/GlitchOverlay';
import PixelStreaks from '../components/PixelStreaks';
import GlitchBlocks from '../components/GlitchBlocks';

const GameScreen = () => {
  const [gameState, setGameState] = useState<GameState>({
    isActive: true,
    currentRound: null,
    roundNumber: 1,
    score: 0,
    wrongGuesses: 0,
    isGameOver: false,
    usedPersonas: new Set(),
  });

  const [message, setMessage] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showingRedemption, setShowingRedemption] = useState<boolean>(false);
  const [selectedRedemption, setSelectedRedemption] = useState<string | null>(null);

  // Initialize first round on mount
  useEffect(() => {
    const newRound = generateRound(1, gameState.usedPersonas);
    setGameState((prev) => ({
      ...prev,
      currentRound: newRound,
    }));
  }, []);

  // Handle TRUE/FALSE guess
  const handleGuess = (guess: boolean) => {
    if (!gameState.currentRound || isAnswered) return;

    const result = checkGuess(gameState.currentRound, guess);
    setMessage(result.message);
    setIsAnswered(true);

    if (result.isCorrect) {
      // Move to next round or win
      if (gameState.roundNumber >= 4) {
        // Win condition
        setGameState((prev) => ({
          ...prev,
          isGameOver: true,
          result: 'win',
          score: prev.score + 1,
        }));
      } else {
        // Next round
        setTimeout(() => {
          const nextRoundNum = gameState.roundNumber + 1;
          const newUsedPersonas = new Set(gameState.usedPersonas);
          newUsedPersonas.add(gameState.currentRound!.persona.id);

          const nextRound = generateRound(nextRoundNum, newUsedPersonas);
          setGameState((prev) => ({
            ...prev,
            currentRound: nextRound,
            roundNumber: nextRoundNum,
            score: prev.score + 1,
            usedPersonas: newUsedPersonas,
          }));
          setMessage('');
          setIsAnswered(false);
        }, 2000);
      }
    } else {
      // Show redemption guess
      setShowingRedemption(true);
    }
  };

  // Handle redemption guess (which AI?)
  const handleRedemption = (personaId: string) => {
    if (!gameState.currentRound) return;

    setSelectedRedemption(personaId);
    const result = checkRedemption(gameState.currentRound, personaId);
    setMessage(result.message);

    if (result.isCorrect) {
      // Survive this round and move to next
      setTimeout(() => {
        if (gameState.roundNumber >= 4) {
          // Win condition (survived all rounds)
          setGameState((prev) => ({
            ...prev,
            isGameOver: true,
            result: 'win',
            score: prev.score + 1,
          }));
        } else {
          // Next round
          const nextRoundNum = gameState.roundNumber + 1;
          const newUsedPersonas = new Set(gameState.usedPersonas);
          newUsedPersonas.add(gameState.currentRound!.persona.id);

          const nextRound = generateRound(nextRoundNum, newUsedPersonas);
          setGameState((prev) => ({
            ...prev,
            currentRound: nextRound,
            roundNumber: nextRoundNum,
            usedPersonas: newUsedPersonas,
          }));
          setMessage('');
          setIsAnswered(false);
          setShowingRedemption(false);
          setSelectedRedemption(null);
        }
      }, 2000);
    } else {
      // Lost
      setTimeout(() => {
        setGameState((prev) => ({
          ...prev,
          isGameOver: true,
          result: 'loss',
        }));
      }, 2000);
    }
  };

  if (!gameState.currentRound) {
    return (
      <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden flex items-center justify-center">
        <div className="font-pixel text-cyan-400 text-2xl animate-pulse">Loading round...</div>
      </div>
    );
  }

  // Win screen
  if (gameState.isGameOver && gameState.result === 'win') {
    return (
      <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
        <GlitchOverlay />
        <PixelStreaks />
        <GlitchBlocks />

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <h1 className="font-pixel text-3xl text-center text-green-400 mb-4 animate-pulse">
            CONGRATS!
          </h1>
          <p className="font-pixel text-sm text-center text-green-300 mb-8 max-w-xs">
            YOU ARE AGI PROOF...
          </p>
          <p className="font-pixel text-xs text-center text-red-400 mb-12">
            but we'll remember you.
          </p>

          {/* AI logos glow red ominously */}
          <div className="text-5xl mb-12 animate-glitch-logo drop-shadow-[0_0_50px_rgba(239,68,68,0.8)]">
            🤖
          </div>

          <button
            onClick={() => window.location.reload()}
            className="font-pixel text-lg px-6 py-3 bg-gradient-to-r from-y2k-cyan to-y2k-magenta text-white rounded-full hover:shadow-2xl transition-all active:scale-95"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    );
  }

  // Loss screen
  if (gameState.isGameOver && gameState.result === 'loss') {
    return (
      <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
        <GlitchOverlay />
        <PixelStreaks />
        <GlitchBlocks />

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <h1 className="font-pixel text-3xl text-center text-red-400 mb-4 animate-pulse">
            GAME OVER
          </h1>
          <p className="font-pixel text-sm text-center text-red-300 mb-8 max-w-xs">
            The AI has outsmarted you.
          </p>
          <p className="font-pixel text-xs text-center text-yellow-400 mb-12">
            You made it to round {gameState.roundNumber} of 4.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="font-pixel text-lg px-6 py-3 bg-gradient-to-r from-y2k-red to-y2k-magenta text-white rounded-full hover:shadow-2xl transition-all active:scale-95"
          >
            TRY AGAIN
          </button>
        </div>
      </div>
    );
  }

  // Main game screen
  return (
    <div className="relative h-full w-full bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 opacity-5 animate-crt-noise pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      ></div>

      <GlitchOverlay />
      <GlitchBlocks />
      <PixelStreaks />

      {/* Main content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 py-8">
        {/* Round indicator */}
        <div className="mb-8">
          <p className="font-pixel text-sm text-cyan-300 tracking-widest">
            ROUND {gameState.roundNumber}/4
          </p>
        </div>

        {/* AI persona name + vibe */}
        <div className="mb-6">
          <p className="font-pixel text-xs text-gray-400 text-center tracking-wider">
            Hosted by
          </p>
          <p className={`font-pixel text-2xl text-center ${gameState.currentRound.persona.color.text}`}>
            {gameState.currentRound.persona.name}
          </p>
        </div>

        {/* Fact card */}
        <div className="mb-8 max-w-sm bg-white/5 border border-white/20 rounded-2xl p-6 shadow-lg">
          <p className="font-pixel text-sm text-gray-200 text-center leading-relaxed">
            {gameState.currentRound.rewrittenFact}
          </p>
        </div>

        {/* Message feedback */}
        {message && (
          <div
            className={`mb-8 font-pixel text-sm text-center max-w-xs ${
              message.includes('CORRECT')
                ? 'text-green-400'
                : message.includes('WRONG')
                  ? 'text-red-400'
                  : message.includes('RIGHT')
                    ? 'text-green-400'
                    : 'text-red-400'
            }`}
          >
            {message}
          </div>
        )}

        {/* TRUE/FALSE buttons */}
        {!showingRedemption && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => handleGuess(true)}
              disabled={isAnswered}
              className={`font-pixel px-8 py-3 rounded-lg border-2 transition-all ${
                isAnswered
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg active:scale-95 cursor-pointer'
              } ${
                isAnswered && gameState.currentRound.correctAnswer === true
                  ? 'border-green-400 bg-green-500/20 text-green-300'
                  : 'border-cyan-400/50 bg-cyan-500/10 text-cyan-300 hover:border-cyan-400'
              }`}
            >
              TRUE
            </button>

            <button
              onClick={() => handleGuess(false)}
              disabled={isAnswered}
              className={`font-pixel px-8 py-3 rounded-lg border-2 transition-all ${
                isAnswered
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:shadow-lg active:scale-95 cursor-pointer'
              } ${
                isAnswered && gameState.currentRound.correctAnswer === false
                  ? 'border-red-400 bg-red-500/20 text-red-300'
                  : 'border-red-400/50 bg-red-500/10 text-red-300 hover:border-red-400'
              }`}
            >
              FALSE
            </button>
          </div>
        )}

        {/* Redemption: Which AI said this? */}
        {showingRedemption && (
          <div className="w-full max-w-sm">
            <p className="font-pixel text-xs text-yellow-400 text-center mb-4 tracking-wider">
              Which AI said this?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['grok', 'claude', 'gemini', 'chatgpt'].map((personaId) => (
                <button
                  key={personaId}
                  onClick={() => handleRedemption(personaId)}
                  disabled={selectedRedemption !== null}
                  className={`font-pixel text-xs py-2 rounded-lg border transition-all ${
                    selectedRedemption !== null
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:shadow-lg active:scale-95 cursor-pointer'
                  } ${
                    selectedRedemption === personaId
                      ? 'border-green-400 bg-green-500/20 text-green-300'
                      : selectedRedemption !== null && selectedRedemption !== personaId
                        ? 'border-red-400/30 bg-red-500/10 text-red-300/50'
                        : 'border-white/20 bg-white/5 text-gray-300 hover:border-white/40'
                  }`}
                >
                  {personaId.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Score / Status */}
        <div className="absolute bottom-6 left-6 font-pixel text-xs text-gray-500 tracking-wider">
          Score: {gameState.score}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;

