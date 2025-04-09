'use client';

export default function Index() {
  return (
    <form action="/api/logout" method="post">
      <input type="submit" value="Logout" />
    </form>
  );
}
