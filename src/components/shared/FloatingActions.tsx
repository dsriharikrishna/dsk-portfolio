'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  FileDown,
  X,
  Send,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Cpu,
  Compass,
  Volume2,
  VolumeX,
} from 'lucide-react';
import Link from 'next/link';
import { resumeUrl } from '@/features/contact/data/resume';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { BOT_QUESTIONS, findBestBotAnswer, BotPrompt } from '@/services/botKnowledge';
import { soundManager } from '@/lib/sound';

interface BotMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  thought?: string;
  link?: { label: string; href: string; isExternal?: boolean };
  suggestedPrompts?: string[];
  timestamp: string;
}

const CATEGORIES = ['All', 'Stack', 'Projects', 'Experience', 'About', 'Contact'] as const;

export default function FloatingActions() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(soundManager.getMuted());
  }, []);

  const handleToggleSound = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundManager.playVintageRelay();
    }
  };
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeThought, setActiveThought] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamTimerRef = useRef<NodeJS.Timeout | null>(null);
  const thinkingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [messages, setMessages] = useState<BotMessage[]>([
    {
      id: 'welcome',  
      sender: 'bot',
      text: "Hello! I'm Srihari's AI Portfolio Assistant, trained directly on his projects, skills, education, and professional experience. Ask me anything or select a topic below!",
      suggestedPrompts: [
        "What is Srihari's primary tech stack?",
        'What flagship projects has he engineered?',
        'Can I view or download his official resume?',
      ],
      timestamp: 'Just now',
    },
  ]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (streamTimerRef.current) clearInterval(streamTimerRef.current);
      if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);
    };
  }, []);

  // Auto-focus input when chat modal opens
  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isChatOpen]);

  // Auto-scroll when messages update, typing state changes, or thought appears
  useEffect(() => {
    if (isChatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen, isTyping, activeThought]);

  // Realistic token streaming function that gives an authentic live LLM feel
  const streamBotResponse = (
    fullText: string,
    thought: string | undefined,
    link: { label: string; href: string; isExternal?: boolean } | undefined,
    suggestedPrompts: string[] | undefined,
    botMsgId: string
  ) => {
    setIsTyping(false);
    setActiveThought(null);

    // Initial bot message with empty text
    setMessages((prev) => [
      ...prev,
      {
        id: botMsgId,
        sender: 'bot',
        text: '',
        thought,
        link,
        suggestedPrompts,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    // Stream characters in natural bursts (chunks of 2-5 chars every 16-24ms)
    let charIndex = 0;
    const textLength = fullText.length;

    if (streamTimerRef.current) clearInterval(streamTimerRef.current);

    streamTimerRef.current = setInterval(() => {
      const chunkSize = Math.floor(Math.random() * 3) + 2;
      charIndex = Math.min(charIndex + chunkSize, textLength);
      const currentSlice = fullText.slice(0, charIndex);

      setMessages((prev) =>
        prev.map((msg) => (msg.id === botMsgId ? { ...msg, text: currentSlice } : msg))
      );

      if (charIndex >= textLength) {
        if (streamTimerRef.current) clearInterval(streamTimerRef.current);
        streamTimerRef.current = null;
      }
    }, 18);
  };

  const triggerBotReply = (
    targetAnswer: string,
    thought: string | undefined,
    link: { label: string; href: string; isExternal?: boolean } | undefined,
    suggestedPrompts: string[] | undefined
  ) => {
    // Clear any previous ongoing timers before starting new one
    if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);

    const botMsgId = `bot-${Date.now() + 1}`;
    setIsTyping(true);
    setActiveThought(thought || 'Synthesizing response from portfolio data...');

    // Simulate authentic cognitive delay before streaming begins
    const thinkingDelay = Math.floor(Math.random() * 250) + 500;

    thinkingTimeoutRef.current = setTimeout(() => {
      streamBotResponse(targetAnswer, thought, link, suggestedPrompts, botMsgId);
    }, thinkingDelay);
  };

  const handleAskQuestion = (prompt: BotPrompt) => {
    if (isTyping || streamTimerRef.current) return;

    const userMsgId = `user-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: prompt.question,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    triggerBotReply(prompt.answer, prompt.thought, prompt.link, undefined);
  };

  const handlePromptClick = (questionText: string) => {
    if (isTyping || streamTimerRef.current) return;

    // Find if it maps to a known BotPrompt
    const knownPrompt = BOT_QUESTIONS.find((q) => q.question === questionText);
    if (knownPrompt) {
      handleAskQuestion(knownPrompt);
    } else {
      // Route through intelligent query resolver
      const userMsgId = `user-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        {
          id: userMsgId,
          sender: 'user',
          text: questionText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);

      const bestMatch = findBestBotAnswer(questionText);
      triggerBotReply(
        bestMatch.text,
        bestMatch.thought,
        bestMatch.link,
        bestMatch.suggestedPrompts
      );
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || isTyping || streamTimerRef.current) return;

    const query = inputQuery.trim();
    setInputQuery('');

    const userMsgId = `user-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: query,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);

    const bestMatch = findBestBotAnswer(query);
    triggerBotReply(bestMatch.text, bestMatch.thought, bestMatch.link, bestMatch.suggestedPrompts);
  };

  const handleResetChat = () => {
    if (streamTimerRef.current) clearInterval(streamTimerRef.current);
    if (thinkingTimeoutRef.current) clearTimeout(thinkingTimeoutRef.current);
    setIsTyping(false);
    setActiveThought(null);
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Chat refreshed! Feel free to ask about Srihari's background, technologies, or specific projects.",
        suggestedPrompts: [
          "What is Srihari's primary tech stack?",
          'What flagship projects has he engineered?',
          'Can I view or download his official resume?',
        ],
        timestamp: 'Just now',
      },
    ]);
  };

  const filteredQuestions =
    selectedCategory === 'All'
      ? BOT_QUESTIONS
      : BOT_QUESTIONS.filter((q) => q.category === selectedCategory);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 print:hidden flex flex-col items-end gap-3">
      {/* Interactive AI Chatbot Popup */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[calc(100vw-2.5rem)] sm:w-[420px] h-[80vh] max-h-[80vh] bg-card/95 backdrop-blur-2xl border border-border/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="p-3.5 border-b border-border/60 bg-secondary/30 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shadow-sm">
                  <Bot className="w-4 h-4" />
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-background" />
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-none flex items-center gap-1.5 text-foreground">
                    Portfolio Assistant
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-accent/15 text-accent font-mono">
                      v2.0
                    </span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Online &bull; Trained on portfolio data
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={handleToggleSound}
                  className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
                  title={isMuted ? 'Unmute clicks' : 'Mute clicks'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={handleResetChat}
                  className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Reset chat"
                  title="Reset conversation"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="w-7 h-7 rounded-lg hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 p-3.5 overflow-y-auto flex flex-col gap-3.5 text-xs md:text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 px-1">
                    {msg.sender === 'user' ? (
                      <>
                        <span className="text-[10px] text-muted-foreground">{msg.timestamp}</span>
                        <span className="text-[10px] font-medium text-accent">You</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] font-medium text-muted-foreground flex items-center gap-1">
                          <Bot className="w-3 h-3 text-accent" /> Assistant
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                          &bull; {msg.timestamp}
                        </span>
                      </>
                    )}
                  </div>

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-accent text-accent-foreground rounded-br-xs font-medium shadow-sm'
                        : 'bg-secondary/70 border border-border/70 text-foreground rounded-bl-xs shadow-sm'
                    }`}
                  >
                    {/* Simulated Reasoning / Thought Trace */}
                    {msg.thought && (
                      <div className="mb-2 pb-2 border-b border-border/50 text-[11px] text-muted-foreground font-mono flex items-center gap-1.5 italic">
                        <Cpu className="w-3 h-3 text-accent shrink-0" />
                        <span>{msg.thought}</span>
                      </div>
                    )}

                    <p>{msg.text}</p>

                    {/* Navigation Link Pill */}
                    {msg.link && msg.text.length > 0 && (
                      <a
                        href={msg.link.href}
                        target={msg.link.isExternal ? '_blank' : '_self'}
                        rel={msg.link.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => {
                          if (!msg.link?.isExternal) setIsChatOpen(false);
                        }}
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-accent hover:underline bg-background/60 hover:bg-background px-2.5 py-1.5 rounded-lg border border-border/50 transition-colors shadow-xs"
                      >
                        {msg.link.label}
                        {msg.link.isExternal ? (
                          <ExternalLink className="w-3 h-3" />
                        ) : (
                          <ArrowRight className="w-3 h-3" />
                        )}
                      </a>
                    )}

                    {/* Inline Suggested Follow-up Prompts (Smart Redirection) */}
                    {msg.suggestedPrompts &&
                      msg.suggestedPrompts.length > 0 &&
                      msg.text.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-border/50 flex flex-col gap-1.5">
                          <div className="flex items-center gap-1 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                            <Compass className="w-3 h-3 text-accent" /> Suggested questions:
                          </div>
                          <div className="flex flex-col gap-1">
                            {msg.suggestedPrompts.map((sug, sIdx) => (
                              <button
                                key={sIdx}
                                disabled={isTyping || !!streamTimerRef.current}
                                onClick={() => handlePromptClick(sug)}
                                className="text-left text-[11px] px-2.5 py-1.5 rounded-lg border border-border/60 bg-background/70 hover:border-accent hover:text-accent hover:bg-background transition-colors disabled:opacity-50"
                              >
                                &rarr; {sug}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              ))}

              {/* Active Thinking / Reasoning State */}
              {isTyping && (
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 px-1 text-[10px] text-muted-foreground font-medium">
                    <Bot className="w-3 h-3 text-accent" /> Assistant is thinking...
                  </div>
                  <div className="p-3 rounded-2xl bg-secondary/60 border border-border/60 rounded-bl-xs flex flex-col gap-2 max-w-[85%] shadow-sm">
                    {activeThought && (
                      <div className="flex items-center gap-1.5 text-[11px] text-accent font-mono animate-pulse">
                        <Cpu className="w-3 h-3 shrink-0 animate-spin" />
                        <span>{activeThought}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 py-0.5">
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.18s]" />
                      <span className="w-2 h-2 rounded-full bg-accent animate-bounce [animation-delay:0.36s]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            {/* Category Filter Pills */}
            <div className="px-3 pt-2 pb-1 border-t border-border/50 bg-secondary/15 flex items-center gap-1 overflow-x-auto no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition-all shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-accent text-accent-foreground border-accent'
                      : 'border-border/60 bg-background/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-3 py-1.5 bg-secondary/15 flex flex-col gap-1 max-h-24 overflow-y-auto">
              <div className="flex flex-wrap gap-1.5">
                {filteredQuestions.map((prompt) => (
                  <button
                    key={prompt.id}
                    disabled={isTyping || !!streamTimerRef.current}
                    onClick={() => handleAskQuestion(prompt)}
                    className="text-left text-[11px] px-2.5 py-1 rounded-lg border border-border/60 bg-background/80 hover:border-accent hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {prompt.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Query Input */}
            <form
              onSubmit={handleCustomSubmit}
              className="p-2.5 border-t border-border/60 bg-secondary/30 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputQuery}
                disabled={isTyping || !!streamTimerRef.current}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 bg-background/80 border border-border/70 rounded-xl px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isTyping || !!streamTimerRef.current}
                className="w-8 h-8 rounded-xl bg-accent text-accent-foreground flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Capsule Dock */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="flex items-center gap-2.5 p-1.5 rounded-full border border-border/80 bg-card/85 backdrop-blur-xl shadow-2xl"
      >
        {/* 1. Vintage 80s/90s Mechanical Audio Sound Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={handleToggleSound}
              aria-label={isMuted ? 'Unmute 80s/90s Computer Sound' : 'Mute 80s/90s Computer Sound'}
              className="group relative w-11 h-11 rounded-full bg-secondary/80 hover:bg-accent/20 border border-border hover:border-accent flex items-center justify-center text-foreground hover:text-accent transition-all duration-300 shadow-md hover:scale-105"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:scale-110" />
              ) : (
                <Volume2 className="w-5 h-5 text-accent transition-transform duration-200 group-hover:scale-110" />
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-mono text-xs">
            {isMuted ? 'Unmute 80s/90s Sound' : '80s/90s Sound Active'}
          </TooltipContent>
        </Tooltip>

        {/* 2. Resume Download Action Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
              className="group relative w-11 h-11 rounded-full bg-secondary/80 hover:bg-accent/20 border border-border hover:border-accent flex items-center justify-center text-foreground hover:text-accent transition-all duration-300 shadow-md hover:scale-105"
            >
              <FileDown className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-mono text-xs">
            Download Resume
          </TooltipContent>
        </Tooltip>

        {/* 2. Bot Action Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setIsChatOpen((prev) => !prev)}
              aria-label="AI Portfolio Assistant"
              className={`group relative w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 ${
                isChatOpen
                  ? 'bg-accent border-accent text-accent-foreground'
                  : 'bg-primary text-primary-foreground border-primary hover:bg-primary/90'
              }`}
            >
              {isChatOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <>
                  <Bot className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                  {/* Status ping indicator */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-background" />
                  </span>
                </>
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-mono text-xs">
            {isChatOpen ? 'Close Assistant' : 'Chat with AI Assistant'}
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </div>
  );
}
