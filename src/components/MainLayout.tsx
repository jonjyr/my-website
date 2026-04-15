import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Outlet } from "react-router-dom";

export interface LayoutProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  gap: 'sm' | 'md';
  padding: 'sm' | 'md',
};

export const MainLayout = ({ children, gap, padding, className = "", ...props }: LayoutProps) => {
  const layoutClasses = [
    'main-layout',
    `main-layout--gap-${gap}`,
    `main-layout--padding-${padding}`,
    className
  ].join(' ').trim();

  return (
    <div className={layoutClasses} {...props}>
      <Outlet />
      {children}
    </div>
  );
};