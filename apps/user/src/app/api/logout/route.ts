import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const target = new URL('/login', new URL(request.url).origin);
  const response = Response.redirect(target, 302);

  cookieStore.delete('token');

  return response;
}
