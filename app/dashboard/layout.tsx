import SideNav from '@/app/ui/dashboard/sidenav';
import { lightTheme, themeType } from '../lib/theme';
 
export default async function Layout({ children }: { children: React.ReactNode }) {
  // Use default light theme since auth is removed
  const theme: themeType = lightTheme;

  return (
    <div className={`flex h-screen flex-col md:flex-row md:overflow-hidden ${theme.bg}`}>
      <div className="w-full flex-none md:w-64">
        <SideNav theme={theme} />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}