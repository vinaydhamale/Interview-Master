import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Zap, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeedItem {
  id: string;
  user: string;
  action: string;
  topic: string;
  timestamp: number;
}

const USERS = ['Alex', 'Sarah', 'Mike', 'Emma', 'Chris', 'Vinay', 'Priya', 'John'];
const ACTIONS = ['started learning', 'completed', 'passed quiz for', 'is exploring'];
const TOPICS = [
  'Introduction to React',
  'JSX Basics',
  'Functional Components',
  'State Management',
  'Advanced Hooks',
  'React Router',
  'Performance Optimization'
];

export const RealTimeFeed = () => {
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    // Initial feed
    const initialFeed = Array.from({ length: 5 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      user: USERS[Math.floor(Math.random() * USERS.length)],
      action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
      topic: TOPICS[Math.floor(Math.random() * TOPICS.length)],
      timestamp: Date.now() - i * 10000,
    }));
    setFeed(initialFeed);

    // Simulate real-time updates
    const interval = setInterval(() => {
      const newItem: FeedItem = {
        id: Math.random().toString(36).substr(2, 9),
        user: USERS[Math.floor(Math.random() * USERS.length)],
        action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
        topic: TOPICS[Math.floor(Math.random() * TOPICS.length)],
        timestamp: Date.now(),
      };
      setFeed(prev => [newItem, ...prev.slice(0, 4)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xs font-bold uppercase tracking-widest opacity-50 flex items-center gap-2">
          <Zap className="w-3 h-3 fill-current text-primary" />
          Live Community Activity
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-medium opacity-50">LIVE</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {feed.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] leading-tight">
                    <span className="font-bold text-foreground">{item.user}</span>{' '}
                    <span className="text-muted-foreground">{item.action}</span>{' '}
                    <span className="font-medium text-primary">{item.topic}</span>
                  </p>
                </div>
                {item.action.includes('completed') && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
