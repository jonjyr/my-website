import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Text } from './Text';
import { Card, CardHeader, CardBody, CardFooter } from './Card';
 
const meta = {
  component: Card,
  subcomponents: {
    CardHeader,
    CardBody,
    CardFooter,
  },
} satisfies Meta<typeof Card>;

export default meta;
 
type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    background: 'surface',
    size: 'md',
    children: '',
  },
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <Text font="base" size="md">Card Header Text</Text>
      </CardHeader>
      <CardBody>
        <Text font="base" size="md">Card Body Text</Text>
      </CardBody>
      <CardFooter>
        <Button variant="primary" size="md">Card Footer Button</Button>
      </CardFooter>
    </Card>
  ),
};