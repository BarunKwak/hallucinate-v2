// iMessage-style chat bubble
// Can be used for player messages and AI responses

interface ChatBubbleProps {
  message: string;
  sender: string;
  isUser?: boolean;
  aiModel?: string; // e.g., "ChatGPT", "Claude", "Gemini"
}

const ChatBubble = ({ message, sender, isUser = false, aiModel }: ChatBubbleProps) => {
  // Color scheme based on AI model
  const getModelColor = (model?: string) => {
    switch (model) {
      case 'ChatGPT':
        return 'bg-gradient-to-br from-green-400 to-emerald-500';
      case 'Claude':
        return 'bg-gradient-to-br from-orange-400 to-amber-500';
      case 'Gemini':
        return 'bg-gradient-to-br from-blue-400 to-indigo-500';
      case 'Grok':
        return 'bg-gradient-to-br from-purple-400 to-fuchsia-500';
      case 'Perplexity':
        return 'bg-gradient-to-br from-cyan-400 to-teal-500';
      default:
        return 'bg-gradient-to-br from-gray-300 to-gray-400';
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 px-3`}>
      <div className={`max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* Sender label */}
        {!isUser && (
          <div className="text-xs font-bold text-gray-600 mb-1 px-2">
            {sender} {aiModel && <span className="text-xs font-normal text-gray-500">({aiModel})</span>}
          </div>
        )}
        
        {/* Message bubble */}
        <div
          className={`
            ${isUser 
              ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white' 
              : `${getModelColor(aiModel)} text-white`
            }
            rounded-2xl px-4 py-2.5 shadow-lg
            ${isUser ? 'rounded-br-sm' : 'rounded-bl-sm'}
          `}
        >
          <p className="text-sm leading-relaxed break-words">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;

