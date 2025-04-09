'use client';
import { StyledPage } from '@test/components';

export default function Index() {
  return (
    <StyledPage>
      <form action="/api/logout" method="post">
        <input type="submit" value="Logout" />
      </form>
    </StyledPage>
  );
}
