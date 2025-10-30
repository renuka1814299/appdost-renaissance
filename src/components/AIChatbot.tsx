import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import aiBot from '@/assets/ai-bot.png';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      content: "👋 Hi! I'm your AI assistant. How can I help you build something amazing today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Tell me about services",
    "View portfolio",
    "Get pricing",
    "Schedule consultation"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! We specialize in cutting-edge app development with AI integration. Would you like to know more about our services?",
        "I'd be happy to help! Our team can build custom solutions tailored to your needs. What type of project are you considering?",
        "Excellent! We've successfully delivered 500+ projects. Let me share some of our featured work with you.",
        "Perfect timing! We're offering free consultations this month. Would you like to schedule a call with our team?"
      ];
      
      const botMessage = { 
        role: 'bot', 
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-primary shadow-glow-primary flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-0' : 'rotate-0'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white animate-pulse-glow" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] glass rounded-3xl shadow-elevated flex flex-col animate-scale-in overflow-hidden border border-primary/20">
          {/* Header */}
          <div className="bg-gradient-primary p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
              <img src={aiBot} alt="AI Assistant" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white flex items-center gap-2">
                AI Assistant
                <Sparkles className="w-4 h-4 animate-pulse-glow" />
              </h3>
              <p className="text-xs text-white/80">Always here to help</p>
            </div>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-background/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in-left`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-primary text-white ml-auto'
                      : 'glass border border-primary/10'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border border-primary/10 p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 rounded-full glass text-xs hover:border-primary/50 transition-all border border-transparent"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border/50 bg-background/80 backdrop-blur">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 glass border-primary/20 focus:border-primary"
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-gradient-primary text-white border-0 hover:scale-105 transition-transform"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
