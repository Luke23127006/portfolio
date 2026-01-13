import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-['Inter'] font-medium";
  
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "border border-border hover:border-muted"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
