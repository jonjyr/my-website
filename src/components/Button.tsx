import { type ComponentPropsWithoutRef } from 'react';

export type ButtonVariant = 'primary' | 'surface';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant: ButtonVariant;
    size: ButtonSize;
};

export const Button = ({ variant, size, style, ...props }: ButtonProps) => {
    const dynamicTokens = {
        backgroundColor: `var(--color-${variant})`,
        padding: `var(--space-${size})`,
        border: 'none',
        ...style,
    };

    return <button style={dynamicTokens} {...props} />;
};