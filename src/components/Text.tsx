import { type ComponentPropsWithoutRef } from 'react';

export interface TextProps extends ComponentPropsWithoutRef<'text'> {
    font: '--font-base';
    size: '--text-md';
};

export const Text = ({ font, size, style, ...props }: TextProps) => {
    const dynamicTokens = {
        fontFamily: `var(${font})`,
        padding: `var(${size})`,
        border: 'none',
        ...style,
    };

    return <text style={dynamicTokens} {...props} />;
};