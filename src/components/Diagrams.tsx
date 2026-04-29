import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowDown, 
  Zap, 
  RefreshCw, 
  Layers, 
  Database, 
  Server, 
  Globe,
  CircleCheck,
  Send,
  Boxes,
  Layout,
  Cpu,
  Clock,
  ShieldCheck,
  Package,
  Code2,
  Search,
  Activity,
  GitBranch,
  Terminal,
  BookOpen
} from 'lucide-react';

interface DiagramStageProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  explanation?: {
    step: string;
    label: string;
    text: string;
  }[];
}

const DiagramStage = ({ children, title, subtitle, explanation }: DiagramStageProps) => (
  <div className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm group/stage">
    {/* Clean Header */}
    <div className="h-10 border-b border-border bg-muted/30 flex items-center px-4 justify-between">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary/40" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{title}</span>
      </div>
      {subtitle && (
        <span className="text-[9px] font-mono text-muted-foreground/60 uppercase tracking-tighter">
          {subtitle}
        </span>
      )}
    </div>

    {/* Main Content Area - Enabled scrolling for small screens */}
    <div className="p-6 md:p-10 overflow-x-auto overflow-y-hidden min-h-[280px] flex items-center justify-center scrollbar-hide">
      <div className="flex flex-col items-center justify-center min-w-max md:min-w-0">
        {children}
      </div>
    </div>

    {/* Integrated Explanation Panel */}
    {explanation && (
      <div className="border-t border-border bg-muted/20 p-5">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-3.5 h-3.5 text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/70">Concept Logic</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {explanation.map((item, i) => (
            <div key={i} className="space-y-1 relative pl-6 border-l border-primary/10 ml-2">
              <div className="absolute -left-2 top-0.5 w-4 h-4 rounded bg-primary text-primary-foreground flex items-center justify-center text-[9px] font-bold">
                {item.step}
              </div>
              <h5 className="text-[11px] font-bold text-foreground uppercase tracking-tight">{item.label}</h5>
              <p className="text-[10px] leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

interface DiagramNodeProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  active?: boolean;
  color?: 'primary' | 'orange' | 'green' | 'blue' | 'purple' | 'red';
  index?: string;
}

const colorMap = {
  primary: { bg: 'bg-primary/10', border: 'border-primary/30', text: 'text-primary' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-500' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-500' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-500' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-500' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-500' }
};

const DiagramNode = ({ title, description, icon, active, color = 'primary', index }: DiagramNodeProps) => {
  const styles = colorMap[color];
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: active ? 1 : 0.9 }}
      viewport={{ once: true }}
      className={`p-4 rounded-lg border-2 flex flex-col items-center text-center gap-2.5 w-[140px] transition-all duration-300 ${
        active 
          ? `${styles.bg} ${styles.border} shadow-sm ring-1 ring-primary/5` 
          : 'bg-muted/50 border-transparent opacity-40'
      }`}
    >
      <div className={`p-2 rounded bg-background border border-border shadow-sm flex items-center justify-center ${active ? styles.text : 'text-muted-foreground'}`}>
        {icon || <Boxes className="w-5 h-5" />}
      </div>
      
      <div className="space-y-1">
        <h4 className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-foreground' : 'text-muted-foreground'}`}>
          {title}
        </h4>
        {description && (
          <p className={`text-[9px] leading-tight font-medium ${active ? 'text-muted-foreground' : 'text-muted-foreground/40'}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

const Connector = ({ direction = 'right', label, length = 'normal' }: { direction?: 'right' | 'down', label?: string, length?: 'short' | 'normal' | 'long' }) => {
  const lengthClass = {
    short: direction === 'right' ? 'w-4' : 'h-4',
    normal: direction === 'right' ? 'w-10' : 'h-10',
    long: direction === 'right' ? 'w-20' : 'h-20',
  };

  return (
    <div className={`flex items-center justify-center ${lengthClass[length]} relative`}>
      {direction === 'right' ? (
        <div className="w-full flex items-center px-1">
          <div className="flex-grow h-0.5 bg-border rounded-full" />
          <ArrowRight className="w-3 h-3 text-muted-foreground -ml-1.5" />
        </div>
      ) : (
        <div className="h-full flex flex-col items-center py-1">
          <div className="flex-grow w-0.5 bg-border rounded-full" />
          <ArrowDown className="w-3 h-3 text-muted-foreground -mt-1.5" />
        </div>
      )}
      {label && (
        <span className="absolute -top-3.5 text-[8px] font-bold whitespace-nowrap text-muted-foreground uppercase tracking-widest bg-background px-1">
          {label}
        </span>
      )}
    </div>
  );
};

// 1. Rendering Lifecycle
export const RenderingDiagram = () => (
  <DiagramStage 
    title="Rendering Pipeline" 
    subtitle="Component Lifecycle Architecture"
    explanation={[
      { step: '01', label: 'Trigger', text: 'State or prop change initiates the render cycle.' },
      { step: '02', label: 'Render', text: 'React creates a lightweight Virtual DOM snapshot of the UI.' },
      { step: '03', label: 'Commit', text: 'React identifies changes and updates the real Browser DOM.' }
    ]}
  >
    <div className="flex flex-col md:flex-row items-center gap-4 py-4">
      <DiagramNode title="Trigger" description="State Mutation" icon={<Zap className="w-5 h-5" />} active />
      <Connector label="Request" />
      <DiagramNode title="Render" description="VDOM Snapshot" icon={<RefreshCw className="w-5 h-5" />} active color="blue" />
      <Connector label="Commit" />
      <DiagramNode title="Browser" description="DOM Update" icon={<Layers className="w-5 h-5" />} active color="green" />
    </div>
  </DiagramStage>
);

// 2. Redux / Global State Flow
export const StateFlowDiagram = () => (
  <DiagramStage 
    title="Data Flow" 
    subtitle="Unidirectional State Pattern"
    explanation={[
      { step: '01', label: 'Action', text: 'Dispatched events describe "What" happened in the system.' },
      { step: '02', label: 'Reducer', text: 'Pure functions calculate new state based on action type.' },
      { step: '03', label: 'Store', text: 'Centralized state updates and notifies the View layer.' }
    ]}
  >
    <div className="flex flex-col md:flex-row items-center gap-6 py-6">
      <DiagramNode title="Action" description="Typed Event" icon={<Send className="w-5 h-5" />} active />
      <Connector label="Dispatch" />
      <DiagramNode title="Reducer" description="State Logic" icon={<RefreshCw className="w-5 h-5" />} active color="blue" />
      <Connector label="Update" />
      <DiagramNode title="Store" description="Global State" icon={<Database className="w-5 h-5" />} active color="purple" />
    </div>
  </DiagramStage>
);

// 3. Full-Stack Data Cycle
export const DataCycleDiagram = () => (
  <DiagramStage 
    title="Network Cycle" 
    subtitle="Frontend-to-DB End-to-End"
    explanation={[
      { step: '01', label: 'Frontend', text: 'User interaction triggers a data request/fetch.' },
      { step: '02', label: 'API / Node', text: 'Express handles routing, auth, and business logic.' },
      { step: '03', label: 'Database', text: 'Structured data is queried and returned to the client.' }
    ]}
  >
    <div className="flex flex-col md:flex-row items-center gap-6 py-6">
      <DiagramNode title="Frontend" description="React App" icon={<Globe className="w-5 h-5" />} active />
      <Connector label="Request" />
      <DiagramNode title="Server" description="Express API" icon={<Server className="w-5 h-5" />} active color="blue" />
      <Connector label="Query" />
      <DiagramNode title="DB" description="PostgreSQL/NoSQL" icon={<Database className="w-5 h-5" />} active color="purple" />
    </div>
  </DiagramStage>
);

// 4. Hook Sequence
export const HookLifecycleDiagram = () => (
  <DiagramStage 
    title="Execution Sequence" 
    subtitle="Hook Phase Timeline"
    explanation={[
      { step: '01', label: 'Paint', text: 'Browser completes visual updates for the user.' },
      { step: '02', label: 'Effect', text: 'Side-effects (API, DOM) run after the visual paint.' },
      { step: '03', label: 'Cleanup', text: 'Resources are cleared before the next effect or unmount.' }
    ]}
  >
     <div className="flex flex-col gap-4 w-full max-w-sm px-4">
        {[
          { icon: <Clock className="w-4 h-4" />, title: "Paint Phase", desc: "Browser renders UI", color: "primary" as const },
          { icon: <Terminal className="w-4 h-4" />, title: "Effect Phase", desc: "Run side-effects", color: "orange" as const },
          { icon: <RefreshCw className="w-4 h-4" />, title: "Cleanup Phase", desc: "Clear memory/timers", color: "green" as const },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 rounded-lg bg-muted border border-border"
          >
            <div className={`w-8 h-8 rounded bg-background border border-border flex items-center justify-center shrink-0 ${colorMap[item.color].text}`}>
              {item.icon}
            </div>
            <div className="flex-grow">
               <h4 className="text-[11px] font-bold uppercase tracking-tight text-foreground">{item.title}</h4>
               <p className="text-[10px] text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
     </div>
  </DiagramStage>
);

// 5. Context / Prop Drilling Solution
export const ContextSolutionDiagram = () => (
  <DiagramStage 
    title="Context Provider" 
    subtitle="Global State Injection"
    explanation={[
      { step: '01', label: 'Provider', text: 'Wraps the component tree to hold shared state.' },
      { step: '02', label: 'Shadow tree', text: 'State is bypassed through middle components.' },
      { step: '03', label: 'Consumer', text: 'Deeply nested children access state directly via hooks.' }
    ]}
  >
     <div className="flex flex-col items-center gap-2">
        <DiagramNode title="Provider" description="Global Store" icon={<Boxes className="w-5 h-5" />} active color="primary" />
        <Connector direction="down" label="Hydrate" length="short" />
        <div className="flex gap-4">
          <DiagramNode title="Mid Layer" description="Bypass Prop" icon={<Layout className="w-4 h-4" />} active={false} />
          <DiagramNode title="Consumer" description="Direct Access" icon={<Layers className="w-5 h-5" />} active color="blue" />
          <DiagramNode title="Mid Layer" description="Bypass Prop" icon={<Layout className="w-4 h-4" />} active={false} />
        </div>
     </div>
  </DiagramStage>
);

// 6. Optimistic UI Flow
export const OptimisticUIDiagram = () => (
  <DiagramStage 
    title="Optimistic UI" 
    subtitle="Predicted State Transition"
    explanation={[
      { step: '01', label: 'Interaction', text: 'User sends a command (e.g., Like, Save).' },
      { step: '02', label: 'Predict', text: 'UI updates instantly assuming success to feel fast.' },
      { step: '03', label: 'Sync', text: 'Background request completes; UI confirms or reverts.' }
    ]}
  >
     <div className="flex flex-col md:flex-row items-center gap-4 py-6">
        <DiagramNode title="Action" description="Send Mutation" icon={<Send className="w-4 h-4" />} active />
        <Connector label="Predict" />
        <DiagramNode title="Local UI" description="Instant Feedback" icon={<ShieldCheck className="w-4 h-4" />} active color="green" />
        <Connector label="Sync" />
        <DiagramNode title="Server" description="Confirm/Rollback" icon={<Server className="w-4 h-4" />} active color="orange" />
     </div>
  </DiagramStage>
);

// 7. Bundle Audit Flow
export const BundleAuditDiagram = () => (
  <DiagramStage 
    title="Bundle Analysis" 
    subtitle="Asset Optimization Pipe"
    explanation={[
      { step: '01', label: 'Bundling', text: 'Vite transforms your source code into optimized assets.' },
      { step: '02', label: 'Analysis', text: 'Tools audit file sizes and identify "dead-weight" code.' },
      { step: '03', label: 'Optimization', text: 'Code is split or tree-shaken to minimize load times.' }
    ]}
  >
     <div className="flex flex-col md:flex-row items-center gap-4 py-6">
        <DiagramNode title="Source" description="TSX Assets" icon={<Code2 className="w-4 h-4" />} active />
        <Connector label="Build" />
        <DiagramNode title="Bundler" description="Vite Pipe" icon={<Package className="w-4 h-4" />} active color="blue" />
        <Connector label="Optimize" />
        <DiagramNode title="Asset" description="Pure Code" icon={<Search className="w-4 h-4" />} active color="orange" />
     </div>
  </DiagramStage>
);

// 8. Virtual DOM Diffing
export const VirtualDOMDiagram = () => (
  <DiagramStage 
    title="Diffing Algorithm" 
    subtitle="O(n) Reconciliation Strategy"
    explanation={[
      { step: '01', label: 'Comparison', text: 'React compares the Current vs Previous VDOM tree.' },
      { step: '02', label: 'Heuristic', text: 'Changes are identified at the node level efficiently.' },
      { step: '03', label: 'Patch', text: 'Only modified elements are updated in the browser DOM.' }
    ]}
  >
     <div className="flex flex-col items-center gap-6 py-4">
        <div className="flex gap-10">
            <DiagramNode title="Old DOM" description="Snapshot A" icon={<Layout className="w-4 h-4" />} active={false} />
            <div className="flex items-center justify-center">
              <Connector label="Diff" />
            </div>
            <DiagramNode title="New DOM" description="Snapshot B" icon={<Layout className="w-4 h-4" />} active color="blue" />
        </div>
        <Connector direction="down" label="Apply Patch" />
        <DiagramNode title="Browser" description="Actual Update" icon={<Zap className="w-4 h-4" />} active color="green" />
     </div>
  </DiagramStage>
);

// 9. Event Delegation
export const EventBubbleDiagram = () => (
  <DiagramStage 
    title="Event Propagation" 
    subtitle="Delegation vs Bubbling"
    explanation={[
      { step: '01', label: 'Capture', text: 'Events travel down from the root to the target element.' },
      { step: '02', label: 'Target', text: 'The element where the user actually interacted.' },
      { step: '03', label: 'Delegation', text: 'React listens at the root to efficiently manage events.' }
    ]}
  >
     <div className="flex flex-col items-center gap-6 py-6">
        <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-bold text-primary uppercase tracking-widest">
           Window Root Listener
        </div>
        <Connector direction="down" label="Delegate" length="short" />
        <div className="flex gap-3">
          {[1, 2, 3].map(i => (
            <div key={i} className={`p-4 rounded-lg border-2 flex flex-col items-center justify-center gap-2 w-20 transition-all ${i === 2 ? 'bg-orange-500/10 border-orange-500/30 ring-2 ring-orange-500/10' : 'bg-muted border-border opacity-40'}`}>
               <div className={`w-8 h-8 rounded border border-border flex items-center justify-center bg-background ${i === 2 ? 'text-orange-500' : 'text-muted-foreground'}`}>
                  <Zap className="w-4 h-4" />
               </div>
               <span className="text-[8px] font-bold uppercase opacity-60">Btn {i}</span>
               {i === 2 && (
                 <motion.div 
                   animate={{ y: [-10, -30], opacity: [1, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="absolute top-0 w-0.5 h-10 bg-orange-500/40"
                 />
               )}
            </div>
          ))}
        </div>
     </div>
  </DiagramStage>
);

// 10. HOC Pattern
export const HOCPropDiagram = () => (
  <DiagramStage 
    title="Pattern Comparison" 
    subtitle="HOC vs Render Props"
    explanation={[
      { step: '01', label: 'Inversion', text: 'HOCs wrap components to inject shared functionality.' },
      { step: '02', label: 'Logic', text: 'Render props use functions to share state logic between UI.' },
      { step: '03', label: 'Composition', text: 'Both patterns help avoid duplicate code and state logic.' }
    ]}
  >
     <div className="flex flex-col md:flex-row gap-10 py-6">
        <div className="flex flex-col items-center gap-4">
           <span className="text-[10px] font-bold text-muted-foreground uppercase border-b border-border pb-1">HOC Pattern</span>
           <div className="p-6 rounded-lg border-2 border-primary/20 bg-primary/5 flex items-center justify-center relative">
              <div className="absolute -inset-2 border-2 border-dashed border-primary/20 rounded-xl" />
              <DiagramNode title="UI Child" active color="primary" />
           </div>
           <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider text-center">Wrap Component <br/> Inject Props</p>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center">
            <div className="w-px h-20 bg-border" />
        </div>

        <div className="flex flex-col items-center gap-4">
           <span className="text-[10px] font-bold text-muted-foreground uppercase border-b border-border pb-1">Render Prop</span>
           <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-blue-500/5 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-background border border-border text-[10px] font-bold text-blue-500 uppercase">
                 <GitBranch className="w-3.5 h-3.5" /> Logic Hook
              </div>
              <ArrowDown className="w-4 h-4 mx-auto text-blue-500/40" />
              <div className="w-10 h-10 rounded bg-blue-500 flex items-center justify-center text-white mx-auto">
                 <Layout className="w-5 h-5" />
              </div>
           </div>
           <p className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider text-center">Export Logic <br/> Consumer Decides UI</p>
        </div>
     </div>
  </DiagramStage>
);

// 11. Fiber Priority
export const FiberPriorityDiagram = () => (
  <DiagramStage 
    title="Priority Lanes" 
    subtitle="Concurrent React Scheduling"
    explanation={[
      { step: '01', label: 'Lanes', text: 'React assigns different priorities (lanes) to tasks.' },
      { step: '02', label: 'Interruption', text: 'High-pri tasks (Input) can pause low-pri rendering (List).' },
      { step: '03', label: 'Merging', text: 'Suspended work is resumed and merged once idle.' }
    ]}
  >
     <div className="w-full space-y-6 py-4 px-2">
        <div className="flex flex-col gap-2">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">High Pri (User Input)</span>
              <span className="text-[9px] font-bold text-red-500/40 uppercase">Immediate</span>
           </div>
           <div className="h-4 rounded bg-red-500/10 border border-red-500/30 overflow-hidden relative">
              <motion.div 
                animate={{ x: [-200, 400] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-20 bg-red-500/20"
              />
           </div>
        </div>

        <div className="flex flex-col gap-2">
           <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Low Pri (Off-screen)</span>
              <span className="text-[9px] font-bold text-blue-500/40 uppercase">Deferred</span>
           </div>
           <div className="h-4 rounded bg-blue-500/10 border border-blue-400/30 overflow-hidden relative">
              <motion.div 
                animate={{ x: [-200, 400] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-40 bg-blue-500/20"
              />
           </div>
        </div>
        
        <div className="pt-4 border-t border-border flex items-center justify-center gap-3">
           <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
           <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Scheduler Active: Interruption Enabled</span>
        </div>
     </div>
  </DiagramStage>
);

// 12. Styling Efficiency (Tabular Comparison)
export const StylingEfficiencyDiagram = () => (
  <DiagramStage 
    title="Styling Comparison" 
    subtitle="Framework Performance & Utility"
    explanation={[
      { step: '01', label: 'Tailwind', text: 'Best for custom, high-perf apps with zero runtime CSS logic.' },
      { step: '02', label: 'MUI', text: 'Best for standard business apps requiring rich, complex UI sets.' },
      { step: '03', label: 'Classic', text: 'Stabler, familiar grids for projects prioritizing simplicity.' }
    ]}
  >
     <div className="w-full max-w-lg overflow-x-auto scrollbar-hide py-4 px-2">
        <table className="w-full text-left border-collapse min-w-[400px]">
          <thead>
            <tr className="border-b border-border">
              <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Feature</th>
              <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-primary">Tailwind</th>
              <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-orange-500">MUI</th>
              <th className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-blue-500">Classic</th>
            </tr>
          </thead>
          <tbody className="text-[11px]">
            {[
              { label: 'Performance', t: '5/5 (Static)', m: '3/5 (Runtime)', b: '4/5 (Static)' },
              { label: 'Speed', t: '5/5 (Ultra)', m: '5/5 (Pre-built)', b: '4/5 (Solid)' },
              { label: 'Customization', t: '5/5 (Full)', m: '3/5 (Themed)', b: '3/5 (Override)' },
              { label: 'Bundle Size', t: 'Excellent', m: 'Large', b: 'Moderate' }
            ].map((row, i) => (
              <tr key={i} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                <td className="py-3 px-4 font-bold text-foreground/80">{row.label}</td>
                <td className="py-3 px-4 text-primary font-mono">{row.t}</td>
                <td className="py-3 px-4 text-orange-500 font-mono">{row.m}</td>
                <td className="py-3 px-4 text-blue-500 font-mono">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
  </DiagramStage>
);

