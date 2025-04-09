import type { Meta, StoryObj } from '@storybook/react';

import { StyledPage } from '@test/components';

const meta = {
  title: 'components/StyledPage',
  component: StyledPage,
} satisfies Meta<typeof StyledPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blank: Story = {};
