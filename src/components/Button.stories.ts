import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button.tsx';
 
const meta = {
  title: 'src/components/Button.tsx',
  component: Button,
  decorators: [],
  parameters: {},
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
  },
};