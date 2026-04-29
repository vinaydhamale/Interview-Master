import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { topics, Topic } from '@/src/data/topics';
import { Home } from '@/src/components/Home';
import { DemoRegistry } from '@/src/components/InteractiveDemos';
import { QuizComponent } from '@/src/components/QuizComponent';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  BookOpen, 
  Code2, 
  GraduationCap, 
  Menu, 
  CheckCircle2, 
  Search,
  Layout, 
  Zap,
  Github,
  Moon,
  Sun,
  Activity,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarContentProps {
  progress: number;
  topics: Topic[];
  activeTopicId: string;
  setActiveTopicId: (id: string) => void;
  setIsSidebarOpen: (open: boolean) => void;
  completedTopics: string[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onBackToHome: () => void;
}

const SidebarContent = ({
  progress,
  topics,
  activeTopicId,
  setActiveTopicId,
  setIsSidebarOpen,
  completedTopics,
  isDarkMode,
  toggleDarkMode,
  onBackToHome
}: SidebarContentProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    // Initially expand the category of the active topic
    const activeTopic = topics.find(t => t.id === activeTopicId);
    return activeTopic ? { [activeTopic.category]: true } : { 'Basics': true };
  });

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.keywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col h-full overflow-hidden text-foreground">
      <div className="px-6 pt-8 pb-4 shrink-0 space-y-6">
        {/* Course Title */}
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Current Course</span>
            <h2 className="text-xl font-bold tracking-tight leading-tight">React - Zero to Hero</h2>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100 hover:bg-white/5 -ml-3"
            onClick={() => {
              setIsSidebarOpen(false);
              onBackToHome();
            }}
          >
            ← Back to All Courses
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search topics..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-[12px] bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primary/40 focus:ring-4 focus:ring-primary/5 transition-all placeholder:opacity-30"
          />
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.1em] opacity-50">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 px-4 min-h-0">
        <div className="space-y-4 pb-6">
          {filteredTopics.length === 0 && searchQuery.length > 0 && (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-2 opacity-40">
              <Search className="w-8 h-8 mb-2" />
              <p className="text-xs font-bold uppercase tracking-widest">No results found</p>
              <p className="text-[10px]">Try a different keyword</p>
            </div>
          )}
          {['Basics', 'Hooks', 'Intermediate', 'Advanced', 'Performance', 'Modern', 'Interview', 'Hands On QA', 'Notes'].map((category) => {
            const categoryTopics = filteredTopics.filter(t => t.category === category);
            if (categoryTopics.length === 0) return null;
            
            const isExpanded = searchQuery.length > 0 || expandedCategories[category];
            
            return (
              <div key={category} className="space-y-1">
                <button 
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em] hover:text-foreground transition-colors group"
                >
                  <span>{category}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:scale-110" />
                  ) : (
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:scale-110" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden space-y-1"
                    >
                      {categoryTopics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setActiveTopicId(topic.id);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] transition-all group ${
                            activeTopicId === topic.id 
                              ? 'topic-item-active shadow-lg' 
                              : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <div className={`shrink-0 ${activeTopicId === topic.id ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                            {completedTopics.includes(topic.id) ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
                            )}
                          </div>
                          <span className="truncate flex-1 text-left line-clamp-1">{topic.title}</span>
                          {activeTopicId === topic.id && (
                            <Badge className="bg-primary text-primary-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">NOW</Badge>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="px-6 pt-6 mt-auto border-t border-white/10 shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hover:bg-white/10">
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
            </a>
          </div>
          <div className="text-[10px] opacity-40 font-medium">v19.4.2</div>
        </div>
      </div>
    </div>
  );
};

const Markdown = ({ children }: { children: string }) => (
  <ReactMarkdown
    components={{
      code({ node, inline, className, children, ...props }: any) {
        return !inline ? (
          <div className="bg-muted/30 border border-border/40 rounded-xl p-4 my-6 font-mono text-sm overflow-x-auto">
            <code {...props}>{children}</code>
          </div>
        ) : (
          <code className="text-primary font-bold font-mono text-[0.95em]" {...props}>
            {children}
          </code>
        );
      }
    }}
  >
    {children}
  </ReactMarkdown>
);

export default function App() {
  const [view, setView] = useState<'home' | 'react'>('home');
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];
  const progress = (completedTopics.length / topics.length) * 100;

  useEffect(() => {
    const saved = localStorage.getItem('react-mastery-progress');
    if (saved) setCompletedTopics(JSON.parse(saved));
    
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleTopicCompletion = (id: string) => {
    let newCompleted;
    if (completedTopics.includes(id)) {
      newCompleted = completedTopics.filter(topicId => topicId !== id);
    } else {
      newCompleted = [...completedTopics, id];
    }
    setCompletedTopics(newCompleted);
    localStorage.setItem('react-mastery-progress', JSON.stringify(newCompleted));
  };

  return (
    <div className="min-h-screen flex flex-col p-4 md:p-6 gap-4 md:gap-6">
      {/* Header */}
      <header className="glass-panel h-[70px] px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView('home')}>
          <div className="w-8 h-8 border-2 border-primary rounded-lg flex items-center justify-center text-primary font-bold text-sm">
            IM
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="font-extrabold text-lg tracking-tight">Interview <span className="font-light opacity-60">Master</span></span>
            {view === 'react' && (
              <div className="flex items-center gap-2">
                <ChevronRight className="hidden md:block w-4 h-4 opacity-40" />
                <Badge variant="ghost" className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 hover:bg-primary/20 px-2 py-0 h-5">
                  React - Zero to Hero
                </Badge>
              </div>
            )}
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          {view === 'react' && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[10px] font-bold uppercase tracking-widest opacity-60 hover:opacity-100"
              onClick={() => setView('home')}
            >
              ← Back to Home
            </Button>
          )}
          <span className="opacity-60">Welcome back, <strong className="text-foreground">Vinay</strong></span>
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 px-3 py-1">Rank: Advanced Rookie</Badge>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {view === 'react' && (
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="hover:bg-white/10" />}>
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-72 glass-panel border-r-0 rounded-none h-full overflow-hidden">
                <SidebarContent 
                  progress={progress}
                  topics={topics}
                  activeTopicId={activeTopicId}
                  setActiveTopicId={setActiveTopicId}
                  setIsSidebarOpen={setIsSidebarOpen}
                  completedTopics={completedTopics}
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  onBackToHome={() => setView('home')}
                />
              </SheetContent>
            </Sheet>
          )}
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex-1 overflow-auto"
          >
            <Home onSelectTech={() => setView('react')} />
          </motion.div>
        ) : (
          <motion.div 
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6 min-h-0"
          >
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-[280px] glass-panel shrink-0 overflow-hidden h-full">
              <SidebarContent 
                progress={progress}
                topics={topics}
                activeTopicId={activeTopicId}
                setActiveTopicId={setActiveTopicId}
                setIsSidebarOpen={setIsSidebarOpen}
                completedTopics={completedTopics}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                onBackToHome={() => setView('home')}
              />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6 min-w-0">
              <ScrollArea className="flex-1 glass-panel">
                <div className="max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTopic.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-10"
                    >
                      <div className="space-y-6">
                        <div className="space-y-6">
                          <Badge className="bg-primary text-primary-foreground px-3 py-1 text-[11px] font-bold rounded-full">
                            CHAPTER {topics.indexOf(activeTopic) + 1}
                          </Badge>
                          <div className="flex items-center justify-between gap-4">
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                              {(() => {
                                const title = activeTopic.title;
                                if (title.includes(': ')) return title.split(': ')[1];
                                if (title.includes('. ')) return title.split('. ')[1];
                                return title;
                              })()}
                            </h1>
                          </div>
                          <div className="text-base md:text-lg text-foreground/80 leading-relaxed markdown-content">
                            <Markdown>{activeTopic.content}</Markdown>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-10">
                        {/* Use Case Section */}
                        {activeTopic.useCase && (
                          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 space-y-3">
                            <div className="flex items-center gap-2 text-primary">
                              <Zap className="w-4 h-4 fill-current" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Real-World Use Case</span>
                            </div>
                            <p className="text-sm leading-relaxed opacity-80 italic">
                              "{activeTopic.useCase}"
                            </p>
                          </div>
                        )}

                        {/* Interactive Diagrams */}
                        {activeTopic.diagrams && activeTopic.diagrams.length > 0 && (
                          <div className="space-y-8">
                            {activeTopic.diagrams.map((diagId, idx) => (
                              DemoRegistry[diagId] && (
                                <div key={idx} className="space-y-4">
                                  <div className="flex items-center justify-between px-1">
                                    <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">
                                      {diagId.replace(/Diagram$/, '').replace(/([A-Z])/g, ' $1').trim()} Flowchart
                                    </span>
                                    <Badge variant="outline" className="text-[9px] opacity-40">STEP {idx + 1}</Badge>
                                  </div>
                                  <div className="glass-panel p-1 bg-white/5 border-primary/20">
                                    <div className="bg-background/20 rounded-[14px] overflow-hidden">
                                      {React.createElement(DemoRegistry[diagId])}
                                    </div>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        )}

                        {/* Single Interactive Diagram fallback */}
                        {(!activeTopic.diagrams || activeTopic.diagrams.length === 0) && activeTopic.diagram && DemoRegistry[activeTopic.diagram] && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">Visual Logic Flowchart</span>
                            </div>
                            <div className="glass-panel p-1 bg-white/5 border-primary/20">
                              <div className="bg-background/20 rounded-[14px] overflow-hidden">
                                {React.createElement(DemoRegistry[activeTopic.diagram])}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Interactive Demo */}
                        {activeTopic.interactiveDemo && DemoRegistry[activeTopic.interactiveDemo] && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">Live Preview (Real-Time)</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] opacity-60">SYNCED</span>
                                <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
                              </div>
                            </div>
                            <div className="glass-panel p-1 bg-white/5">
                              <div className="bg-background/40 rounded-[14px] overflow-hidden">
                                {React.createElement(DemoRegistry[activeTopic.interactiveDemo])}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Live Example (Full Implementation) */}
                        {activeTopic.liveExample && (
                          <div className="space-y-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                <Activity className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold">{activeTopic.liveExample.title}</h3>
                                <p className="text-sm opacity-60">{activeTopic.liveExample.description}</p>
                              </div>
                            </div>

                            <div className="space-y-8">
                              {activeTopic.liveExample.files.map((file, idx) => (
                                <div key={idx} className="space-y-3">
                                  <div className="flex items-center justify-between px-1">
                                    <span className="text-[11px] font-mono opacity-50">{file.name}</span>
                                    <Badge variant="outline" className="text-[9px] uppercase tracking-tighter opacity-40">{file.language}</Badge>
                                  </div>
                                  <div className="code-window shadow-xl group">
                                    <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                      <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{file.name}</span>
                                      <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                      </div>
                                    </div>
                                    <pre className="overflow-x-auto selection:bg-primary/30">
                                      <code className="text-[13px] leading-relaxed block">{file.content}</code>
                                    </pre>
                                  </div>
                                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                    <p className="text-xs leading-relaxed opacity-70 italic">
                                      <strong>Explanation:</strong> {file.explanation}
                                    </p>
                                  </div>
                                </div>
                              ))}

                              <div className="space-y-3">
                                <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">Expected Result</span>
                                <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10">
                                  <div className="markdown-content text-sm opacity-80">
                                    <Markdown>{activeTopic.liveExample.result}</Markdown>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Separator className="opacity-10" />
                          </div>
                        )}

                        {/* Code Example */}
                        {activeTopic.codeExample && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">Code Snippet</span>
                            </div>
                            <div className="code-window shadow-2xl group relative overflow-hidden">
                              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                                 <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Final Implementation</span>
                                 <div className="flex gap-1.5 opacity-30 group-hover:opacity-100 transition-opacity">
                                   <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                   <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                 </div>
                              </div>
                              <pre className="overflow-x-auto selection:bg-primary/30">
                                <code className="text-[13px] leading-relaxed block">{activeTopic.codeExample}</code>
                              </pre>
                            </div>
                            
                            {activeTopic.codeExplanation && (
                              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                                <div className="flex items-center gap-2 text-primary/80">
                                  <BookOpen className="w-3.5 h-3.5" />
                                  <span className="text-[10px] font-bold uppercase tracking-wider">How it works</span>
                                </div>
                                <p className="text-sm leading-relaxed opacity-70 whitespace-pre-wrap">
                                  {activeTopic.codeExplanation}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Quiz Section */}
                        {activeTopic.quiz.length > 0 && (
                          <div className="space-y-6 pt-6">
                            <span className="text-[11px] font-bold opacity-70 tracking-widest uppercase">Knowledge Check</span>
                            <QuizComponent questions={activeTopic.quiz} />
                          </div>
                        )}
                      </div>

                      {/* Navigation */}
                      <div className="pt-10 flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <Button 
                          variant="outline" 
                          size="lg"
                          onClick={() => toggleTopicCompletion(activeTopic.id)}
                          className={`rounded-xl px-8 border-white/10 hover:bg-white/5 ${completedTopics.includes(activeTopic.id) ? 'border-green-500/50 text-green-400 bg-green-500/5' : ''}`}
                        >
                          {completedTopics.includes(activeTopic.id) ? (
                            <><CheckCircle2 className="mr-2 w-5 h-5" /> Completed</>
                          ) : (
                            'Mark as Completed'
                          )}
                        </Button>
                        
                        <div className="flex gap-3">
                          {topics.indexOf(activeTopic) > 0 && (
                            <Button 
                              variant="ghost" 
                              className="rounded-xl px-6 hover:bg-white/5"
                              onClick={() => setActiveTopicId(topics[topics.indexOf(activeTopic) - 1].id)}
                            >
                              Previous
                            </Button>
                          )}
                          {topics.indexOf(activeTopic) < topics.length - 1 && (
                            <Button 
                              onClick={() => setActiveTopicId(topics[topics.indexOf(activeTopic) + 1].id)}
                              className="rounded-xl px-8 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                            >
                              Next Topic
                            </Button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </ScrollArea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="h-10 px-4 flex items-center justify-between text-[11px] opacity-40">
        <div>&copy; 2026 Meta Academy &bull; Version 19.4.2</div>
        <div className="hidden md:block">Press [CTRL + SPACE] for Sandbox Console</div>
      </footer>
    </div>
  );
}
