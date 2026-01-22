import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

const DoubtSolver: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: 'Namaskar! I am your AI MPSC Tutor. Ask me any doubt about History, Polity, Geography, or Current Affairs.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    // Add placeholder for model response
    setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

    try {
      await geminiService.sendMessageStream(userMessage.text, (textChunk) => {
        setMessages(prev => 
            prev.map(msg => msg.id === modelMessageId ? { ...msg, text: textChunk } : msg)
        );
      });
    } catch (error) {
      setMessages(prev => 
        prev.map(msg => msg.id === modelMessageId ? { ...msg, text: "Sorry, I encountered an error. Please check your internet connection or API key.", isError: true } : msg)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)]">
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-4 rounded-xl text-white mb-4 shadow-lg flex items-center justify-between">
            <div>
                <h2 className="font-bold flex items-center"><Sparkles className="w-4 h-4 mr-2" /> AI Doubt Solver</h2>
                <p className="text-xs text-sky-100 opacity-90">Powered by Gemini 3 Flash</p>
            </div>
            <Bot className="w-8 h-8 opacity-20" />
        </div>

      <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pb-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-brand-500 ml-2' : 'bg-gray-200 mr-2'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-gray-600" />}
                </div>
                <div 
                    className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                        ? 'bg-brand-500 text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                    } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                >
                    {msg.role === 'model' ? (
                         <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0">
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                            {isLoading && msg.text === '' && <span className="animate-pulse">Thinking...</span>}
                         </div>
                    ) : (
                        msg.text
                    )}
                </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-2 bg-white p-2 rounded-xl border border-gray-200 shadow-sm flex items-center sticky bottom-0">
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question (e.g. 'Explain Article 370')..."
            className="flex-1 p-2 bg-transparent focus:outline-none text-gray-700"
            disabled={isLoading}
        />
        <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className={`p-2 rounded-lg transition-colors ${!input.trim() || isLoading ? 'bg-gray-100 text-gray-400' : 'bg-brand-500 text-white shadow-md'}`}
        >
            <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default DoubtSolver;