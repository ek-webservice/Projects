import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60
        shadow-xl shadow-blue-500/10
        ${hover ? 'hover:bg-white/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
