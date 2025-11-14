// Chat thread container - displays messages in iMessage style
// Scrollable area between header and bottom bar

import ChatBubble from './ChatBubble';

interface Message {
  id: string;
  sender: string;
  message: string;
  isUser?: boolean;
  aiModel?: string;
}

interface ChatThreadProps {
  messages: Message[];
}

const ChatThread = ({ messages }: ChatThreadProps) => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100 py-4">
      {messages.length === 0 ? (
        // Welcome screen when no messages
        <div className="flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="mb-4">
            <div className="text-6xl mb-2">🤖</div>
          </div>
          <h2 className="font-pixel text-xs text-gray-700 mb-3">
            SPOT THE LIE
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed">
            AI models will share facts. Some are true. Some are hallucinations.
            <br />
            <span className="font-bold">Can you spot them?</span>
          </p>
          <div className="mt-6 space-y-1">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-emerald-500"></div>
              <span>ChatGPT</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-400 to-amber-500"></div>
              <span>Claude</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
              <span>Gemini</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500"></div>
              <span>Grok</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500"></div>
              <span>Perplexity</span>
            </div>
          </div>
        </div>
      ) : (
        // Display messages
        <div>
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg.message}
              sender={msg.sender}
              isUser={msg.isUser}
              aiModel={msg.aiModel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatThread;

