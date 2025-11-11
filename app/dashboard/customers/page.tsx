import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Metadata } from 'next'; 
import { lightTheme, themeType } from '@/app/lib/theme';
import Pagination from '@/app/ui/customers/pagination';
import { fetchCustomersPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // Use default light theme since auth is removed
  const theme: themeType = lightTheme;

  let totalPages = 0;
  try {
    totalPages = await fetchCustomersPages(query) || 0;
  } catch (error) {
    console.error('Error fetching customer pages:', error);
    totalPages = 0;
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl ${theme.title}`}>Customers</h1>
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton theme={theme} />}>
        <Table query={query} currentPage={currentPage} theme={theme} />
      </Suspense>
      {totalPages > 0 && (
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} theme={theme} />
        </div>
      )}
    </div>
  );
}