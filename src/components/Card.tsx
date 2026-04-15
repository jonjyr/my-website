import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
  background: 'surface';
  size: 'md';
  children: ReactNode;
};

export interface CardSubcomponentProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
};

export const Card = ({ children, background, size, style, ...props }: CardProps) => {
  const dynamicTokens = {
    backgroundColor: `var(--color-${background})`,
    padding: `var(--space-${size})`,
    ...style,
  };

  return (
    <div style={dynamicTokens} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, ...props }: CardSubcomponentProps) => (
  <div {...props}>
    {children}
  </div>
);

export const CardBody = ({ children, ...props }: CardSubcomponentProps) => (
  <div {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, ...props }: CardSubcomponentProps) => (
  <div {...props}>
    {children}
  </div>
);