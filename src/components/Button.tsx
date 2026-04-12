import styles from '../design-tokens.css';
import { type ComponentPropsWithoutRef } from 'react';

export type ButtonVariant = 'primary' | 'surface';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant: ButtonVariant;
    size: ButtonSize;
};

export const Button = ({ variant, size, ...props }: ButtonProps) => {
    const variantClass = variant === 'primary' ? styles['--color-primary'] : styles['--color-surface'];
    const sizeClass = size === 'sm' ? styles['--space-sm'] : styles['--space-md'];
    const combinedClasses = `${variantClass} ${sizeClass}`;

    return <button className={combinedClasses} {...props} />;
};