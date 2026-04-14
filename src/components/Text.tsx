import { type ComponentPropsWithoutRef } from 'react';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  font: 'base';
  size: 'md';
};

export const Text = ({ font, size, style, ...props }: TextProps) => {
  const dynamicTokens = {
    fontFamily: `var(--font-${font})`,
    fontSize: `var(--text-${size})`,
    border: 'none',
    ...style,
  };

  return <p style={dynamicTokens} {...props} />;
};