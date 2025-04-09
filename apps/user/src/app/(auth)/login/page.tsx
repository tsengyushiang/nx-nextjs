'use client';

export default function Index() {
  return (
    <form action="/api/login" method="post">
      <input type="submit" value="Login" />
    </form>
  );
}
