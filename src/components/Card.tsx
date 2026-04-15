import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  background: 'surface';
  size: 'md';
  children: ReactNode;
};

export const Card = ({ children, background, size, style, ...props }: CardProps) => {
  const dynamicTokens = {
    backgroundColor: `var(--font-${background})`,
    padding: `var(--space-${size})`,
    ...style,
  };

  return (
    <div style={dynamicTokens} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children }: CardProps) => (
  <div>
    {children}
  </div>
);

export const CardBody = ({ children }: CardProps) => (
  <div>
    {children}
  </div>
);

export const CardFooter = ({ children }: CardProps) => (
  <div>
    {children}
  </div>
);