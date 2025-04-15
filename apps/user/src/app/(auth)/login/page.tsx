'use client';

import { useHooks } from '@test/components/hooks';

export default function Index() {
  useHooks();

  return (
    <form action="/api/login" method="post">
      <input type="submit" value="Login" />
    </form>
  );
}
