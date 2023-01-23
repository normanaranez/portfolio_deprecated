import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <main className='flex flex-col flex-1'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
}
