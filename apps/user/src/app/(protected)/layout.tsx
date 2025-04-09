import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Menu from './Menu';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('token')?.value;

  if (!authToken) {
    redirect('/login');
  }

  return <Menu>{children}</Menu>;
}
