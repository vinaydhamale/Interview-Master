import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  logo: string;
  color: string;
  onClick: () => void;
  isAvailable?: boolean;
}

const TechCard = ({ title, description, icon, logo, color, onClick, isAvailable = true }: TechCardProps) => {
  return (
    <motion.div
      whileHover={isAvailable ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={`glass-panel p-6 relative overflow-hidden group cursor-pointer border-white/10 ${!isAvailable && 'opacity-60 cursor-not-allowed'}`}
      onClick={isAvailable ? onClick : undefined}
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity ${color}`} />
      
      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors`}>
            {logo}
          </div>
          {!isAvailable && (
            <Badge variant="outline" className="text-[10px] uppercase tracking-widest opacity-50">Coming Soon</Badge>
          )}
        </div>

        <div>
          <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
            {isAvailable ? (
              <>
                <span>Start Learning</span>
                <ArrowRight className="w-3 h-3" />
              </>
            ) : (
              <span>Locked Content</span>
            )}
          </div>
          <div className="opacity-20 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Home = ({ onSelectTech }: { onSelectTech: (tech: string) => void }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* Hero Section */}
      <div className="space-y-6 text-center md:text-left max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest"
        >
          <Sparkles className="w-3 h-3 fill-current" />
          <span>The Ultimate Interview Prep Platform</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
        >
          Master the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Selection Process</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground/60 leading-relaxed"
        >
          Deep dive into core concepts, interactive system designs, and real-time coding challenges curated for top-tier tech roles.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TechCard 
          title="React - Zero to Hero"
          description="Master React 19 fundamentals, hooks, state management, and high-performance architectural patterns."
          logo="⚛"
          color="bg-primary"
          icon={<Code2 className="w-5 h-5" />}
          onClick={() => onSelectTech('react')}
        />
        
        <TechCard 
          title="System Design"
          description="Architect scalable, reliable systems. Learn load balancing, sharding, and fault tolerance."
          logo="📁"
          color="bg-orange-500"
          icon={<Layers className="w-5 h-5" />}
          onClick={() => {}}
          isAvailable={false}
        />

        <TechCard 
          title="Data Structures"
          description="Master algorithms and complexity analysis. From binary trees to advanced graph theory."
          logo="🔢"
          color="bg-purple-500"
          icon={<Terminal className="w-5 h-5" />}
          onClick={() => {}}
          isAvailable={false}
        />

        <TechCard 
          title="Node.js Internal Architecture"
          description="Deep dive into event loop, buffers, streams, and multi-threading with worker threads."
          logo="🟢"
          color="bg-green-500"
          icon={<Cpu className="w-5 h-5" />}
          onClick={() => {}}
          isAvailable={false}
        />

        <TechCard 
          title="Cloud & Distributed Systems"
          description="Understand AWS/GCP infrastructures, serverless designs, and microservices orchestration."
          logo="☁"
          color="bg-blue-500"
          icon={<Globe className="w-5 h-5" />}
          onClick={() => {}}
          isAvailable={false}
        />
      </div>

      {/* Footer Stats */}
      <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/5">
        <div className="space-y-1">
          <div className="text-2xl font-bold">120+</div>
          <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Concept Modules</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">450+</div>
          <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Practice Questions</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">15+</div>
          <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Tech Paths</div>
        </div>
        <div className="space-y-1">
          <div className="text-2xl font-bold">0ms</div>
          <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Perceived Latency</div>
        </div>
      </div>
    </div>
  );
};
