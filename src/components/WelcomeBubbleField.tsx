// Floating field of fact bubbles (iOS iMessage haptic style)
// True facts: grey, stable | Fake facts: glitchy, neon colors

interface Fact {
  id: number;
  text: string;
  isTrue: boolean;
  top: string;
  left: string;
  delay: string;
}

const WelcomeBubbleField = () => {
  // Hard-coded sample facts for welcome screen
  const facts: Fact[] = [
    { id: 1, text: 'Octopuses have three hearts', isTrue: true, top: '10%', left: '15%', delay: '0s' },
    { id: 2, text: 'The moon is 500000 miles away', isTrue: false, top: '20%', left: '60%', delay: '0.5s' },
    { id: 3, text: 'Honey never spoils', isTrue: true, top: '35%', left: '10%', delay: '1s' },
    { id: 4, text: 'Bananas grow upside down from the sky', isTrue: false, top: '45%', left: '55%', delay: '1.5s' },
    { id: 5, text: 'A day on Venus is longer than its year', isTrue: true, top: '60%', left: '20%', delay: '2s' },
    { id: 6, text: 'Sharks can smell fear through glass', isTrue: false, top: '70%', left: '50%', delay: '2.5s' },
    { id: 7, text: 'Bananas are berries', isTrue: true, top: '25%', left: '40%', delay: '3s' },
    { id: 8, text: 'Water remembers what you say to it', isTrue: false, top: '55%', left: '65%', delay: '0.8s' },
  ];

  return (
    <div className="relative flex-1 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Floating bubbles scattered across the field */}
      {facts.map((fact) => (
        <div
          key={fact.id}
          className="absolute"
          style={{
            top: fact.top,
            left: fact.left,
            animationDelay: fact.delay,
          }}
        >
          {fact.isTrue ? (
            // TRUE FACT: Grey iMessage-style bubble, gentle float
            <div className="max-w-[150px] px-3 py-2 bg-gray-300 text-gray-800 rounded-2xl text-xs leading-snug shadow-md animate-float-bubble">
              {fact.text}
            </div>
          ) : (
            // FAKE FACT: Neon Y2K gradient bubble with glitch animation
            <div 
              className="max-w-[150px] px-3 py-2 bg-gradient-to-br from-y2k-pink via-y2k-purple to-y2k-cyan text-white rounded-2xl text-xs leading-snug shadow-lg animate-glitch-bubble font-semibold"
            >
              {fact.text}
            </div>
          )}
        </div>
      ))}

      {/* Central prompt text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6">
          <p className="text-gray-400 text-xs leading-relaxed">
            Some of these facts are real.
            <br />
            <span className="font-bold text-gray-500">Some are AI hallucinations.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBubbleField;

