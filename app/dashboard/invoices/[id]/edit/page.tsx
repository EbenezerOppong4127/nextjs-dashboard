import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { lightTheme, themeType } from '@/app/lib/theme';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // Use default light theme since auth is removed
  const theme: themeType = lightTheme;

  let invoice: any;
  let customers: any[] = [];
  try {
    [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);
  } catch (error) {
    console.error('Error fetching invoice or customers:', error);
    invoice = null;
    customers = [];
  }

  if (!invoice) {
    notFound();
  }

  // Ensure customers is an array
  if (!customers || !Array.isArray(customers)) {
    customers = [];
  }
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
        theme={theme}
      />
      <Form invoice={invoice} customers={customers} theme={theme} />
    </main>
  )
}