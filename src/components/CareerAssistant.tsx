import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Terminal, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw, 
  Info,
  HelpCircle 
} from 'lucide-react';
import { askCareerAssistant, presetQuestions, AssistantResponse } from '../services/ai-service';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  keyTakeaways?: string[];
  suggestedFollowUps?: string[];
  source?: 'offline-knowledge-base' | 'gemini-api';
}

export const CareerAssistant: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I am Ragib's IT Career & Technical Knowledge Assistant. You can ask me about Ragib's hands-on experience, his L2-to-System-Administrator transition roadmap, enterprise troubleshooting methodologies, or technical topics like Active Directory and Azure.",
      timestamp: 'Just now',
      keyTakeaways: [
        "6+ years enterprise Windows & macOS support foundation.",
        "Active Hyper-V lab hosting Windows Server 2022 and Active Directory.",
        "Pursuing Microsoft Intune (MD-102) and Azure (AZ-104) cloud paths."
      ],
      suggestedFollowUps: [
        "What should I learn next?",
        "What skills am I missing for System Administrator roles?",
        "Explain Active Directory."
      ],
      source: 'offline-knowledge-base'
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (queryToSend?: string) => {
    const q = (queryToSend || inputQuery).trim();
    if (!q || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    try {
      const response: AssistantResponse = await askCareerAssistant(q);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: response.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        keyTakeaways: response.keyTakeaways,
        suggestedFollowUps: response.suggestedFollowUps,
        source: response.source
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: "I encountered a transient issue processing that inquiry. Please try selecting one of the suggested roadmap prompts below.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: 'offline-knowledge-base'
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section id="career-assistant" className="py-20 bg-[#0b0f19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t.assistant.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.assistant.heading}
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            {t.assistant.subtitle}
          </p>
        </ScrollReveal>

        {/* Preset Questions Horizontal Bar */}
        <ScrollReveal delay={0.1} className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            {t.assistant.suggestedPrompts}:
          </span>
          <div className="flex flex-wrap gap-2">
            {presetQuestions.map((pq) => (
              <button
                key={pq.id}
                type="button"
                onClick={() => handleSendMessage(pq.query)}
                disabled={loading}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors disabled:opacity-50"
              >
                {pq.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Chat Container */}
        <ScrollReveal delay={0.15} className="rounded-xl border border-slate-800 bg-[#0f172a] shadow-2xl overflow-hidden flex flex-col h-[600px]">
          
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{t.assistant.copilotHeading}</h3>
                <span className="text-[11px] text-slate-400">{t.assistant.copilotSub}</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{t.assistant.onlineStatus}</span>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0a0e17]/80">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-3 text-left ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                      <Terminal className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-2xl rounded-xl p-4 text-xs leading-relaxed ${
                    isAssistant 
                      ? 'bg-slate-900/90 border border-slate-800 text-slate-200' 
                      : 'bg-blue-600 text-white shadow-md'
                  }`}>
                    {/* Timestamp & Sender */}
                    <div className="flex items-center justify-between gap-4 mb-2 text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-300">
                        {isAssistant ? 'IT Career Assistant' : 'You'}
                      </span>
                      <span>{msg.timestamp}</span>
                    </div>

                    {/* Body Text */}
                    <div className="whitespace-pre-line text-xs space-y-2">
                      {msg.text}
                    </div>

                    {/* Key Takeaways */}
                    {msg.keyTakeaways && msg.keyTakeaways.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] space-y-1.5 bg-black/20 p-2.5 rounded-lg">
                        <span className="font-bold text-indigo-300 uppercase tracking-wider block text-[10px]">
                          Key Takeaways
                        </span>
                        {msg.keyTakeaways.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Follow-up Chips */}
                    {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2">
                        {msg.suggestedFollowUps.map((fu, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSendMessage(fu)}
                            className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-indigo-300 border border-slate-700 transition-colors"
                          >
                            ↳ {fu}
                          </button>
                        ))}
                      </div>
                    )}

                  </div>

                  {!isAssistant && (
                    <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center text-white shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {loading && (
              <div className="flex gap-3 items-center text-xs text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <span>{t.assistant.synthesizing}</span>
              </div>
            )}
          </div>

          {/* Input Bar */}
          <div className="p-4 border-t border-slate-800 bg-[#0f172a]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.assistant.inputPlaceholder}
                className="flex-1 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || loading}
                className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
              >
                <span>{t.assistant.send}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="mt-2 text-[10px] text-slate-400 text-center">
              {t.assistant.disclaimer}
            </div>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
};
