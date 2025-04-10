import type { Meta, StoryObj } from '@storybook/react';

import { Page } from '@test/components';

const meta = {
  title: 'components/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blank: Story = {};
