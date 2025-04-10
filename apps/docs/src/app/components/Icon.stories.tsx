import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@test/components';

const meta = {
  title: 'components/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blank: Story = {};
