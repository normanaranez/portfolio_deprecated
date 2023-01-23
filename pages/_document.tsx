import { useDarkMode } from '@/hooks/useDarkMode';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  const [isDarkMode] = useDarkMode();
  
  return (
    <Html lang="en">
      
      <Head>
      <link rel="icon" href="/logo.png" type="png" />
      </Head>
      <body className={`flex h-full min-h-screen flex-colbg-zinc-50 mx-auto max-w-7xl px-6 dark:bg-slate-900`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
