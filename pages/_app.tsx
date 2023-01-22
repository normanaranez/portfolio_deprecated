import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const {
    publicRuntimeConfig: { PUBLIC_URL },
} = getConfig();

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        router.basePath = PUBLIC_URL;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [PUBLIC_URL]);

    return <Component {...pageProps} />;
}
