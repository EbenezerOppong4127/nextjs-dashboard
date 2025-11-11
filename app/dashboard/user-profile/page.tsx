import Form from '@/app/ui/user-profile/edit-form';
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import { lightTheme, themeType } from '@/app/lib/theme';

export const metadata: Metadata = {
  title: 'User Profile',
};
 
export default async function Page() {
  // Use default light theme since auth is removed
  const theme: themeType = lightTheme;
  
  // Create a default user object since auth is removed
  const defaultUser = {
    id: '',
    name: '',
    email: '',
    password: '',
    theme: 'light' as const,
    isoauth: false,
    creation_date: new Date().toISOString(),
  };
  
  return (
    <main className="w-full">
      <div className="flex w-full items-center justify-between mb-6">
        <h1 className={`${lusitana.className} text-2xl ${theme.title}`}>User Profile</h1>
      </div>
      <div className={`rounded-lg ${theme.container} p-6 ${theme.text}`}>
        <p className="text-center text-gray-500">
          User profile management is not available without authentication.
        </p>
      </div>
    </main>
  )
}