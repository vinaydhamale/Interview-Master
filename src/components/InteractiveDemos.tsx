import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  User, 
  Search, 
  Loader2, 
  Plus, 
  Minus,
  Wifi,
  WifiOff,
  Trash2, 
  Sun, 
  Moon, 
  Maximize2, 
  Focus,
  AlertTriangle,
  RefreshCw,
  Layers
} from 'lucide-react';
import { useDebounce } from '@/src/hooks/useDebounce';
import ReactDOM from 'react-dom';

// --- Basics: JSX Demo ---
export const JSXDemo = () => {
  const [color, setColor] = useState('#61dafb');
  const [fontSize, setFontSize] = useState(24);
  
  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Text Color</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-10 rounded-lg bg-transparent cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Font Size: {fontSize}px</label>
          <input type="range" min="16" max="48" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} className="w-full" />
        </div>
      </div>
      <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center min-h-[100px]">
        <h2 style={{ color, fontSize: `${fontSize}px` }} className="font-bold transition-all duration-300">
          JSX is Dynamic!
        </h2>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Concept Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          JSX allows you to mix JavaScript logic with HTML-like syntax. Here, the style object is updated reactively as you adjust the inputs.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        JSX & Dynamic Styling
      </p>
    </div>
  );
};

// --- Basics: Lists Demo ---
export const ListDemo = () => {
  const [items, setItems] = useState(['React', 'Vite', 'Tailwind']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent space-y-6">
      <div className="flex gap-2">
        <input 
          type="text" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item..."
          className="flex-1 p-2 bg-white/5 border border-white/10 rounded-lg text-sm"
        />
        <Button size="sm" onClick={addItem}><Plus className="w-4 h-4" /></Button>
      </div>
      <ul className="space-y-2">
        <AnimatePresence>
          {items.map((item, i) => (
            <motion.li 
              key={item + i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5"
            >
              <span className="text-sm">{item}</span>
              <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-300 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          React uses the "key" prop to uniquely identify list items. This allows it to efficiently re-order or remove elements without re-rendering the entire list.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        Rendering Lists
      </p>
    </div>
  );
};

// --- Hooks: Effect Demo ---
export const EffectDemo = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent flex flex-col items-center gap-6">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-xl" 
        />
        <div className="relative z-10 text-3xl font-bold font-mono text-primary">
          {windowWidth}px
        </div>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        <Maximize2 className="w-4 h-4" />
        <span className="text-xs">Resize window to see effect</span>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          The window resize event is a side-effect. useEffect ensures we add the listener on mount and cleanup (remove) it on unmount to prevent memory leaks.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        useEffect: Event Listeners
      </p>
    </div>
  );
};

// --- Hooks: Context Demo ---
export const ContextDemo = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent">
      <div className={`p-8 rounded-3xl transition-all duration-500 border ${
        theme === 'light' 
          ? 'bg-white text-slate-900 border-slate-200 shadow-xl' 
          : 'bg-slate-900 text-white border-white/10 shadow-2xl shadow-primary/10'
      }`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Theme Context</h3>
          <button 
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            className={`p-2 rounded-full transition-colors ${
              theme === 'light' ? 'bg-slate-100' : 'bg-white/5'
            }`}
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </div>
        <p className="text-sm opacity-70 leading-relaxed">
          This component simulates a global theme provided via Context API. 
          Changing the theme here would update all components in a real app.
        </p>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          Context avoids "prop-drilling" by making state available to the entire tree. Any component can consume this theme without passing it through intermediate parents.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30 mt-6">
        useContext: Global State
      </p>
    </div>
  );
};

// --- Hooks: Ref Demo ---
export const RefDemo = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent space-y-6">
      <div className="relative">
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Click button to focus me..."
          onBlur={() => setIsFocused(false)}
          className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
        />
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Button onClick={handleFocus} className="w-full gap-2">
        <Focus className="w-4 h-4" />
        Focus Input via Ref
      </Button>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          useRef allows us to grab a direct reference to the physical DOM node. This is essential for managing focus, text selection, or integrating with 3rd-party libraries.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        useRef: DOM Access
      </p>
    </div>
  );
};

// --- Advanced: Portal Demo ---
export const PortalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent flex flex-col items-center gap-6">
      <Button onClick={() => setIsOpen(true)} className="gap-2">
        <Layers className="w-4 h-4" />
        Open Portal Modal
      </Button>
      
      {isOpen && ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-slate-900 border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl text-center space-y-4"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Layers className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">I'm in a Portal!</h3>
            <p className="text-sm text-muted-foreground">
              Even though I'm rendered at the end of the document body, I'm still controlled by the component's state.
            </p>
            <Button onClick={() => setIsOpen(false)} className="w-full">Close Modal</Button>
          </motion.div>
        </div>,
        document.body
      )}
      
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          Normally components render inside their parent. Portals allow you to "teleport" a component to a different location in the DOM (like the body root) while keeping it in the React tree.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        Portals: Breaking Hierarchy
      </p>
    </div>
  );
};

// --- Advanced: Error Boundary Demo ---
const BuggyComponent = ({ shouldCrash }: { shouldCrash: boolean }) => {
  if (shouldCrash) {
    throw new Error('I crashed!');
  }
  return <div className="text-green-400 font-bold">I am working fine.</div>;
};

export const ErrorBoundaryDemo = () => {
  const [shouldCrash, setShouldCrash] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Simple simulation of an error boundary behavior
  useEffect(() => {
    if (shouldCrash) {
      const timer = setTimeout(() => setHasError(true), 100);
      return () => clearTimeout(timer);
    }
  }, [shouldCrash]);

  if (hasError) {
    return (
      <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent">
        <div className="p-8 rounded-3xl bg-red-500/10 border border-red-500/20 text-center space-y-4">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto" />
          <h3 className="text-xl font-bold text-red-500">Something went wrong.</h3>
          <p className="text-xs opacity-70">The Error Boundary caught a crash in its child component.</p>
          <Button variant="outline" onClick={() => { setHasError(false); setShouldCrash(false); }} className="gap-2 border-red-500/20 hover:bg-red-500/10">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent flex flex-col items-center gap-6">
      <div className="p-6 border border-dashed border-white/20 rounded-2xl bg-white/5 w-full text-center">
        <BuggyComponent shouldCrash={shouldCrash} />
      </div>
      <Button variant="destructive" onClick={() => setShouldCrash(true)} className="w-full gap-2">
        <AlertTriangle className="w-4 h-4" />
        Trigger Component Crash
      </Button>
      <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl space-y-1 mt-4">
        <span className="text-[9px] font-bold text-red-400 uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-red-400/60 leading-relaxed italic">
          Error Boundaries catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        Error Boundaries: Fallback UI
      </p>
    </div>
  );
};

// --- Performance: Memo Demo ---
export const MemoDemo = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Memoized component visualization
  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
          <div className="text-[10px] font-bold uppercase opacity-50">Parent State</div>
          <div className="text-2xl font-bold text-primary">{count}</div>
          <Button size="sm" onClick={() => setCount(c => c + 1)} className="w-full">Increment</Button>
        </div>
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-3">
          <div className="text-[10px] font-bold uppercase opacity-50">Unrelated State</div>
          <div className="text-2xl font-bold text-orange-400">{otherState}</div>
          <Button size="sm" onClick={() => setOtherState(c => c + 1)} className="w-full" variant="outline">Increment</Button>
        </div>
      </div>
      
      <div className="p-6 border border-dashed border-white/20 rounded-2xl bg-white/5 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold">Memoized Child</span>
          <motion.div 
            key={count}
            initial={{ opacity: 1, scale: 1.2 }}
            animate={{ opacity: 0.4, scale: 1 }}
            className="text-[9px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full font-bold"
          >
            RENDERED
          </motion.div>
        </div>
        <p className="text-[11px] opacity-60">
          This child only re-renders when "Parent State" changes. 
          Try clicking "Unrelated State" and notice this child DOES NOT pulse.
        </p>
      </div>
      
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          React.memo prevents a component from re-rendering if its props are the same. This is crucial for optimizing large lists or heavy static components.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        React.memo: Skip Re-renders
      </p>
    </div>
  );
};

export const CounterDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden glass-panel border-none bg-transparent">
      <div className="p-8 flex flex-col items-center gap-6">
        <motion.div 
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl font-bold text-primary drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]"
        >
          {count}
        </motion.div>
        <div className="flex gap-4">
          <Button variant="outline" size="lg" onClick={() => setCount(prev => prev - 1)} className="border-white/10 hover:bg-white/5">-</Button>
          <Button variant="default" size="lg" onClick={() => setCount(prev => prev + 1)} className="bg-primary text-primary-foreground hover:opacity-90">+</Button>
        </div>
        <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-60">
          useState Hook
        </p>
      </div>
    </div>
  );
};

export const ComponentDemo = () => {
  const [name, setName] = useState('Vinay');
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden glass-panel border-none bg-transparent">
      <div className="p-8 flex flex-col gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Change Prop Value:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-white/10 rounded-xl bg-white/5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>
        <div className="p-6 border border-dashed border-white/20 rounded-2xl bg-white/5">
          <Greeting name={name} />
        </div>
        <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-60">
          Components & Props
        </p>
      </div>
    </div>
  );
};

const Greeting = ({ name }: { name: string }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className="text-center"
  >
    <h2 className="text-2xl font-bold">Hello, <span className="text-primary">{name || 'Guest'}</span>!</h2>
    <p className="text-xs opacity-50 mt-1">Welcome to the React world.</p>
  </motion.div>
);

export const ConditionalDemo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden glass-panel border-none bg-transparent">
      <div className="p-8 flex flex-col items-center gap-6">
        <AnimatePresence mode="wait">
          {isLoggedIn ? (
            <motion.div
              key="logged-in"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold">Welcome Back!</h3>
              <p className="text-xs text-muted-foreground">You are currently logged in.</p>
            </motion.div>
          ) : (
            <motion.div
              key="logged-out"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center space-y-3"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                <User className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">Guest User</h3>
              <p className="text-xs text-muted-foreground">Please sign in to continue.</p>
            </motion.div>
          )}
        </AnimatePresence>
        <Button 
          variant={isLoggedIn ? "outline" : "default"} 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="w-full rounded-xl"
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </Button>
      </div>
    </div>
  );
};

export const DebounceDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      // Simulate API call
      const timer = setTimeout(() => {
        setResults([
          `Result for "${debouncedSearchTerm}" 1`,
          `Result for "${debouncedSearchTerm}" 2`,
          `Result for "${debouncedSearchTerm}" 3`,
        ]);
        setIsSearching(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden glass-panel border-none bg-transparent">
      <div className="p-8 flex flex-col gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search (debounced)..."
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-white/10 rounded-xl bg-white/5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50"
          />
        </div>

        <div className="min-h-[120px] p-4 border border-dashed border-white/20 rounded-2xl bg-white/5 flex flex-col gap-2">
          {isSearching ? (
            <div className="flex items-center justify-center h-full gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="text-xs">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            results.map((res, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="p-2 text-xs bg-white/5 rounded-lg border border-white/5"
              >
                {res}
              </motion.div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs italic">
              {searchTerm ? 'Waiting for you to stop typing...' : 'Type something to search'}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-60">
            Debounce Hook
          </p>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${searchTerm !== debouncedSearchTerm ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`} />
            <span className="text-[9px] font-mono opacity-50">
              {searchTerm !== debouncedSearchTerm ? 'Typing...' : 'Stable'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReducerDemo = () => {
  const [state, dispatch] = React.useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 };
      case 'decrement': return { count: state.count - 1 };
      case 'reset': return { count: 0 };
      default: return state;
    }
  }, { count: 0 });

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent flex flex-col items-center gap-6">
      <div className="flex items-center gap-8">
        <motion.div 
          key={state.count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold font-mono text-primary"
        >
          {state.count}
        </motion.div>
        <div className="flex flex-col gap-2">
          <Button size="sm" onClick={() => dispatch({ type: 'increment' })} className="rounded-xl">
            <Plus className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={() => dispatch({ type: 'decrement' })} className="rounded-xl">
            <Minus className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => dispatch({ type: 'reset' })} className="rounded-xl text-[10px]">
            RESET
          </Button>
        </div>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          useReducer is better for complex state logic involving multiple sub-values. It works similarly to Redux, using actions and a centralized state update function.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        useReducer: Complex State
      </p>
    </div>
  );
};

export const MemoHookDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveValue = useMemo(() => {
    // Artificial delay
    let i = 0;
    while (i < 100000000) i++;
    return count * 2;
  }, [count]);

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider font-bold opacity-50">Input (No Re-calc)</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here..."
            className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-sm outline-none"
          />
        </div>
        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold opacity-50">Memoized Value</span>
            <span className="text-xl font-mono font-bold text-primary">{expensiveValue}</span>
          </div>
          <Button size="sm" onClick={() => setCount(c => c + 1)} className="rounded-xl">
            Increment
          </Button>
        </div>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          useMemo caches the result of a calculation between re-renders. It only re-calculates when one of the dependencies (in this case "count") changes.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30">
        useMemo: Expensive Calcs
      </p>
    </div>
  );
};

export const CustomHookDemo = () => {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-8 glass-panel border-none bg-transparent flex flex-col items-center gap-4">
      <motion.div 
        animate={{ 
          scale: isOnline ? [1, 1.05, 1] : 1,
          backgroundColor: isOnline ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`w-20 h-20 rounded-full flex items-center justify-center border ${
          isOnline ? 'border-green-500/50' : 'border-red-500/50'
        }`}
      >
        {isOnline ? <Wifi className="w-8 h-8 text-green-500" /> : <WifiOff className="w-8 h-8 text-red-500" />}
      </motion.div>
      <div className="text-center">
        <h4 className={`font-bold ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
          {isOnline ? 'Online' : 'Offline'}
        </h4>
        <p className="text-xs text-muted-foreground">useOnlineStatus Custom Hook</p>
      </div>
      <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl space-y-1">
        <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Logic Breakdown</span>
        <p className="text-[10px] text-primary/60 leading-relaxed italic">
          Custom hooks allow you to extract component logic into reusable functions. Here we created a hook to track the user's browser connectivity status.
        </p>
      </div>
      <p className="text-[11px] text-muted-foreground text-center uppercase tracking-widest font-bold opacity-30 mt-4">
        Custom Hooks: Reusable Logic
      </p>
    </div>
  );
};

import { 
  RenderingDiagram, 
  StateFlowDiagram, 
  DataCycleDiagram, 
  HookLifecycleDiagram, 
  ContextSolutionDiagram,
  OptimisticUIDiagram,
  BundleAuditDiagram,
  VirtualDOMDiagram,
  EventBubbleDiagram,
  HOCPropDiagram,
  FiberPriorityDiagram,
  StylingEfficiencyDiagram
} from './Diagrams';

export const DemoRegistry: Record<string, React.FC> = {
  CounterDemo,
  ComponentDemo,
  ConditionalDemo,
  DebounceDemo,
  JSXDemo,
  ListDemo,
  EffectDemo,
  ContextDemo,
  RefDemo,
  PortalDemo,
  ErrorBoundaryDemo,
  MemoDemo,
  ReducerDemo,
  MemoHookDemo,
  CustomHookDemo,
  RenderingDiagram,
  StateFlowDiagram,
  DataCycleDiagram,
  HookLifecycleDiagram,
  ContextSolutionDiagram,
  OptimisticUIDiagram,
  BundleAuditDiagram,
  VirtualDOMDiagram,
  EventBubbleDiagram,
  HOCPropDiagram,
  FiberPriorityDiagram,
  StylingEfficiencyDiagram
};
