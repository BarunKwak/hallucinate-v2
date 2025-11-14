import CosmicBackground from './components/CosmicBackground';
import DeviceFrame from './components/DeviceFrame';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const handleStartGame = () => {
    // TODO: Transition to game screen
    console.log('Starting game...');
  };

  return (
    <div className="relative min-h-screen">
      {/* Cosmic Background Layer - always behind everything */}
      <CosmicBackground />
      
      {/* Device Frame with all game content inside */}
      <DeviceFrame>
        {/* Welcome screen with centered title, button, and floating bubbles */}
        <WelcomeScreen onStartGame={handleStartGame} />
      </DeviceFrame>
    </div>
  );
}

export default App;
