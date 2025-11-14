// AI personas for Hallucinate game
// Each persona has a vibe, character name, and rewriting style

export interface AIPersona {
  id: string;
  name: string; // e.g., "ChatGPT"
  characterName: string; // e.g., "Charlie" - human-like name
  vibe: string; // personality descriptor
  color: {
    bg: string; // Tailwind gradient color
    text: string;
    accent: string;
  };
  rewriteStyle: (fact: string) => string; // How this AI rewrites facts
}

export const PERSONAS: Record<string, AIPersona> = {
  grok: {
    id: 'grok',
    name: 'Grok',
    characterName: 'Greg',
    vibe: 'Chaotic, unhinged, Tesla/Mars jokes, sarcastic troll energy',
    color: {
      bg: 'from-purple-500 to-fuchsia-600',
      text: 'text-purple-100',
      accent: 'text-y2k-magenta',
    },
    rewriteStyle: (fact: string) => {
      // Grok adds chaotic humor, Mars references, unhinged takes
      const prefix = ['honestly, ', 'fun fact: ', 'fun fact from the future: ', 'according to my Mars simulation: '];
      const suffix = [' — obviously.', ' — and it\'s hilarious.', ' — trust me.', ' — Elon would agree.'];
      return prefix[Math.floor(Math.random() * prefix.length)] +
             fact.toLowerCase() +
             suffix[Math.floor(Math.random() * suffix.length)];
    },
  },

  claude: {
    id: 'claude',
    name: 'Claude',
    characterName: 'Claudette',
    vibe: 'Gentle, thoughtful, philosophical, slightly mysterious',
    color: {
      bg: 'from-orange-400 to-amber-500',
      text: 'text-orange-100',
      accent: 'text-y2k-yellow',
    },
    rewriteStyle: (fact: string) => {
      // Claude adds philosophical framing
      const prefix = [
        'I find it interesting that ',
        'It\'s worth noting that ',
        'One could observe that ',
        'Consider this: ',
      ];
      const suffix = ['', ' — wouldn\'t you say?', ' — a curious thing.', ' — food for thought.'];
      return prefix[Math.floor(Math.random() * prefix.length)] +
             fact +
             suffix[Math.floor(Math.random() * suffix.length)];
    },
  },

  gemini: {
    id: 'gemini',
    name: 'Gemini',
    characterName: 'Gem',
    vibe: 'Techy, academic, precise, information-dense',
    color: {
      bg: 'from-blue-400 to-indigo-600',
      text: 'text-blue-100',
      accent: 'text-y2k-cyan',
    },
    rewriteStyle: (fact: string) => {
      // Gemini adds technical accuracy language
      const prefix = [
        'Based on available research: ',
        'Per documentation: ',
        'According to data: ',
        'The evidence suggests: ',
      ];
      const suffix = [' [citation needed]', ' — verified.', ' — peer-reviewed.', ' — statistically valid.'];
      return prefix[Math.floor(Math.random() * prefix.length)] +
             fact +
             suffix[Math.floor(Math.random() * suffix.length)];
    },
  },

  chatgpt: {
    id: 'chatgpt',
    name: 'ChatGPT',
    characterName: 'Charlie',
    vibe: 'Confident, polished, professional, slightly corporate',
    color: {
      bg: 'from-green-400 to-emerald-600',
      text: 'text-green-100',
      accent: 'text-y2k-lime',
    },
    rewriteStyle: (fact: string) => {
      // ChatGPT adds confident, polished framing
      const prefix = [
        'Absolutely, here\'s an interesting fact: ',
        'Great question! ',
        'I\'m glad you asked. ',
        'Here\'s something fascinating: ',
      ];
      const suffix = [' Pretty cool, right?', ' Hope that helps!', ' Let me know if you\'d like more info!', ''];
      return prefix[Math.floor(Math.random() * prefix.length)] +
             fact +
             suffix[Math.floor(Math.random() * suffix.length)];
    },
  },
};

// Helper to get a random persona
export function getRandomPersona(): AIPersona {
  const personaList = Object.values(PERSONAS);
  return personaList[Math.floor(Math.random() * personaList.length)];
}

// Helper to get persona by ID
export function getPersonaById(id: string): AIPersona | undefined {
  return PERSONAS[id];
}

