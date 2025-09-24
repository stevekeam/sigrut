import { Head } from '@inertiajs/react';
import Header from './Header';
import Footer from './Footer';

import { ReactNode } from 'react';

export default function AppLayout({ children, title = 'Sigrut Farms - Sustainable Agriculture' }: { children: ReactNode, title?: string }) {
    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}