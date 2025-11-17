import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { themeType } from '@/app/lib/theme';

export default async function InvoicesTable({
                                              query,
                                              currentPage,
                                              theme
                                            }: {
  query: string;
  currentPage: number;
  theme: themeType;
}) {
  let invoices = [];
  try {
    invoices = await fetchFilteredInvoices(query, currentPage) || [];
  } catch (error) {
    console.error('Error fetching invoices:', error);
    invoices = [];
  }

}
