
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import { themeType } from '@/app/lib/theme';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function LatestInvoices({theme}:{theme: themeType}) {
  let latestInvoices: LatestInvoice[] = [];
  try {
    const fetchedInvoices = await fetchLatestInvoices();
    latestInvoices = fetchedInvoices || [];
  } catch (error) {
    console.error('Error fetching latest invoices:', error);
    latestInvoices = [];
  }


}
