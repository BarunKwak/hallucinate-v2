/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"VT323"', 'monospace'],
      },
      colors: {
        y2k: {
          pink: '#FF00FF',
          cyan: '#00FFFF',
          purple: '#9D00FF',
          lime: '#CCFF00',
        }
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'glitch-logo': 'glitchLogo 3s ease-in-out infinite',
        'glitch-bubble': 'glitchBubble 2s ease-in-out infinite',
        'glitch-button': 'glitchButton 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'drift': 'drift 15s linear infinite',
        'drift-slow': 'drift 20s linear infinite',
        'drift-fast': 'drift 12s linear infinite',
        'crt-noise': 'crtNoise 0.1s infinite',
        'bubble-flip': 'bubbleFlip 0.6s ease-in-out',
        'glitch-slice': 'glitchSlice 2s ease-in-out infinite',
        'crack-pulse': 'crackPulse 3s ease-in-out infinite',
        'streak-slide': 'streakSlide 20s linear infinite',
        'float-up-slow': 'floatUpSlow 20s linear infinite',
        'float-diagonal-left': 'floatDiagonalLeft 18s linear infinite',
        'float-diagonal-right': 'floatDiagonalRight 22s linear infinite',
        'float-gentle': 'floatGentle 25s linear infinite',
        'glitch-bubble': 'glitchBubble 2s ease-in-out infinite',
        'glitch-button': 'glitchButton 3s ease-in-out infinite',
        'glitch-border': 'glitchBorder 1.5s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glitchLogo: {
          '0%, 100%': { transform: 'translate(0)', textShadow: '2px 0 #FF00FF, -2px 0 #00FFFF' },
          '25%': { transform: 'translate(-1px, 0)', textShadow: '3px 0 #FF00FF, -3px 0 #00FFFF' },
          '50%': { transform: 'translate(1px, 0)', textShadow: '2px 0 #00FFFF, -2px 0 #FF00FF' },
          '75%': { transform: 'translate(0, 1px)', textShadow: '1px 0 #FF00FF, -1px 0 #00FFFF' },
        },
        drift: {
          '0%': { transform: 'translate(0, 100vh) scale(0.5)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translate(-50px, -120vh) scale(1)', opacity: '0' },
        },
        floatUpSlow: {
          '0%': { transform: 'translate(0, 0) scale(0.8)', opacity: '0' },
          '3%': { opacity: '0.9' },
          '97%': { opacity: '0.9' },
          '100%': { transform: 'translate(0, -150vh) scale(1)', opacity: '0' },
        },
        floatDiagonalLeft: {
          '0%': { transform: 'translate(0, 0) scale(0.8)', opacity: '0' },
          '3%': { opacity: '0.9' },
          '97%': { opacity: '0.9' },
          '100%': { transform: 'translate(-100px, -150vh) scale(1)', opacity: '0' },
        },
        floatDiagonalRight: {
          '0%': { transform: 'translate(0, 0) scale(0.8)', opacity: '0' },
          '3%': { opacity: '0.9' },
          '97%': { opacity: '0.9' },
          '100%': { transform: 'translate(100px, -150vh) scale(1)', opacity: '0' },
        },
        floatGentle: {
          '0%': { transform: 'translate(0, 0) scale(0.8)', opacity: '0' },
          '3%': { opacity: '0.9' },
          '97%': { opacity: '0.9' },
          '100%': { transform: 'translate(30px, -140vh) scale(1)', opacity: '0' },
        },
        glitchSlice: {
          '0%, 100%': { transform: 'translateX(0)', opacity: '0.7' },
          '10%': { transform: 'translateX(-5px)', opacity: '0.9' },
          '20%': { transform: 'translateX(3px)', opacity: '0.5' },
          '30%': { transform: 'translateX(-2px)', opacity: '0.8' },
          '40%': { transform: 'translateX(0)', opacity: '0.6' },
        },
        crackPulse: {
          '0%, 100%': { opacity: '0.2', filter: 'brightness(1)' },
          '50%': { opacity: '0.4', filter: 'brightness(1.5)' },
        },
        streakSlide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glitchBubble: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '25%': { transform: 'scale(1.02) translateY(-3px)', opacity: '0.95' },
          '50%': { transform: 'scale(0.98) translateY(0)', opacity: '1' },
          '75%': { transform: 'scale(1.01) translateY(-2px)', opacity: '0.97' },
        },
        glitchBorder: {
          '0%, 100%': { boxShadow: '0 0 0 1px rgba(255, 50, 80, 0.4)' },
          '25%': { boxShadow: '0 0 0 1.5px rgba(255, 50, 80, 0.8), 0 0 8px rgba(255, 50, 80, 0.4)' },
          '50%': { boxShadow: '0 0 0 1px rgba(255, 80, 100, 0.3)' },
          '75%': { boxShadow: '0 0 0 1.5px rgba(255, 50, 80, 0.7), 0 0 6px rgba(255, 50, 80, 0.3)' },
        },
        glitchButton: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(157, 0, 255, 0.3)' },
          '50%': { transform: 'scale(1.01)', boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)' },
        },
        crtNoise: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '10%': { backgroundPosition: '-5% -5%' },
          '20%': { backgroundPosition: '-10% 5%' },
          '30%': { backgroundPosition: '5% -10%' },
          '40%': { backgroundPosition: '-5% 15%' },
          '50%': { backgroundPosition: '-10% 5%' },
          '60%': { backgroundPosition: '15% 0' },
          '70%': { backgroundPosition: '0 10%' },
          '80%': { backgroundPosition: '-15% 0' },
          '90%': { backgroundPosition: '10% 5%' },
        },
        bubbleFlip: {
          '0%': { transform: 'rotateY(0deg) scale(1)' },
          '50%': { transform: 'rotateY(90deg) scale(1.1)' },
          '100%': { transform: 'rotateY(180deg) scale(1)' },
        },
        glitchBubble: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '25%': { transform: 'scale(1.02) translateY(-3px)', opacity: '0.95' },
          '50%': { transform: 'scale(0.98) translateY(0)', opacity: '1' },
          '75%': { transform: 'scale(1.01) translateY(-2px)', opacity: '0.97' },
        },
        glitchButton: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 10px rgba(157, 0, 255, 0.3)' },
          '50%': { transform: 'scale(1.01)', boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}

