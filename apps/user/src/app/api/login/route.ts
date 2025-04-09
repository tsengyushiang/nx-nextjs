import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const target = new URL('/', new URL(request.url).origin);
  const response = Response.redirect(target, 302);

  cookieStore.set({
    name: 'token',
    value: 'accessToken',
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
