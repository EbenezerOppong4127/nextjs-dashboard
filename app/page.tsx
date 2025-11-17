import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { systemDefault } from './lib/theme';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <AcmeLogo />
            </div>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
                <div className={`flex flex-col justify-center gap-6 rounded-lg bg-gray-50 ${systemDefault.container} 
          px-6 py-10 md:w-2/5 md:px-20 h-[760px] overflow-y-auto
        `}>
                    <p className={`${lusitana.className} text-xl text-gray-800 ${systemDefault.text}
          md:text-3xl md:leading-normal
          `}>
                        <strong>WDD 430: Web Full-Stack Development</strong>
                    </p>

                    <p className={`${lusitana.className} text-lg text-gray-700 ${systemDefault.text}
          md:text-xl md:leading-normal
          `}>
                        Learn Next.js Dashboard Tutorial - Chapters 1-5
                    </p>

                    <p className={`${lusitana.className} text-base text-gray-700 ${systemDefault.text}
          md:text-lg md:leading-normal
          `}>
                        This project demonstrates completion of the first five chapters of the official{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500 hover:underline">
                            Next.js Learn Course
                        </a>
                        {' '}by Vercel. The application includes routing, navigation, and interactive dashboard features.
                    </p>

                    <div className={`${lusitana.className} text-base text-gray-700 ${systemDefault.text}
          md:text-lg md:leading-normal
          `}>
                        <p className="font-semibold mb-2">Project Features:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Dashboard navigation with active states</li>
                            <li>Multiple routes and pages</li>
                            <li>Responsive design for mobile and desktop</li>
                            <li>Modern UI with Tailwind CSS</li>
                            <li>TypeScript implementation</li>
                        </ul>
                    </div>

                    <div className={`${lusitana.className} text-base text-gray-700 ${systemDefault.text}
          md:text-lg md:leading-normal
          `}>
                        <p className="font-semibold mb-2">Student Information:</p>
                        <p>Name: <span className="font-medium">Tro Opong Ebenezer Jules Samuel</span></p>
                        <p>Course: <span className="font-medium">WDD 430 - BYU-Idaho</span></p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className={`${lusitana.className} text-base font-semibold text-gray-800 ${systemDefault.text}`}>
                            Navigation Links:
                        </p>

                        <Link
                            href="https://nextjs-dashboard-indol-beta-62.vercel.app/dashboard"
                            className="flex items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                        >
                            <span>Dashboard Home</span> <ArrowRightIcon className="w-4" />
                        </Link>

                        <Link
                            href="https://nextjs-dashboard-indol-beta-62.vercel.app/dashboard/invoices"
                            className="flex items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                        >
                            <span>View Invoices</span> <ArrowRightIcon className="w-4" />
                        </Link>

                        <Link
                            href="https://nextjs-dashboard-indol-beta-62.vercel.app/dashboard/customers"
                            className="flex items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                        >
                            <span>View Customers</span> <ArrowRightIcon className="w-4" />
                        </Link>

                        <Link
                            href="https://nextjs-dashboard-indol-beta-62.vercel.app/dashboard/user-profile"
                            className="flex items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                        >
                            <span>User Profile</span> <ArrowRightIcon className="w-4" />
                        </Link>

                        <Link
                            href="https://nextjs-dashboard-indol-beta-62.vercel.app/dashboard/settings"
                            className="flex items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400"
                        >
                            <span>Settings</span> <ArrowRightIcon className="w-4" />
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshots of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    );
}