'use client';

import { Page, Icon } from '@test/components';
import { ReactNode } from 'react';

const Menu = ({ children }: { children: ReactNode }) => {
  return (
    <Page>
      {children}
      <Icon />
    </Page>
  );
};

export default Menu;
