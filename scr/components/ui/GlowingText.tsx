import { ReactNode } from 'react';
import '../../styles/components/glowing-text.css';

interface GlowingTextProps {
  children: ReactNode;
  intensity?: 'normal' | 'strong';
  color?: string;
  className?: string;
}

export default function GlowingText({ 
  children, 
  intensity = 'normal',
  color = '#3E5AED',
  className = ''
}: GlowingTextProps) {
  return (
    <span 
      className={`glowing-text ${intensity} ${className}`}
      style={{ '--glow-color': color } as React.CSSProperties}
    >
      {children}
    </span>
  );
}