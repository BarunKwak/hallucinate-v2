import { useState } from 'react';
import CosmicBackground from './components/CosmicBackground';
import DeviceFrame from './components/DeviceFrame';
import WelcomeScreen from './components/WelcomeScreen';
import GameScreen from './screens/GameScreen';

function App() {
  const [screen, setScreen] = useState<'welcome' | 'game'>('welcome');

  const handleStartGame = () => {
    setScreen('game');
  };

  return (
    <div className="relative min-h-screen">
      {/* Cosmic Background Layer - always behind everything */}
      <CosmicBackground />
      
      {/* Device Frame with all game content inside */}
      <DeviceFrame>
        {screen === 'welcome' ? (
          <WelcomeScreen onStartGame={handleStartGame} />
        ) : (
          <GameScreen />
        )}
      </DeviceFrame>
    </div>
  );
}

export default App;
