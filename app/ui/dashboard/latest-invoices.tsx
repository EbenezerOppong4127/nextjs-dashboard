
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';
import { themeType } from '@/app/lib/theme';

export default async function LatestInvoices({theme}:{theme: themeType}) {
  let latestInvoices = [];
  try {
    latestInvoices = await fetchLatestInvoices() || [];
  } catch (error) {
    console.error('Error fetching latest invoices:', error);
    latestInvoices = [];
  }


}
