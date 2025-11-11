import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import { lightTheme, themeType } from '@/app/lib/theme';

export const metadata: Metadata = {
  title: 'Create Invoice',
};
 
export default async function Page() {
  // Use default light theme since auth is removed
  const theme: themeType = lightTheme;

  let customers = [];
  try {
    customers = await fetchCustomers() || [];
  } catch (error) {
    console.error('Error fetching customers:', error);
    customers = [];
  }
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
        theme={theme}
      />
      <Form customers={customers} theme={theme} />
    </main>
  );
}