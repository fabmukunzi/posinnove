import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ConfigProvider, theme } from 'antd';
import antdTheme from '@utils/config/antdConfig';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';

const roboto = Poppins({
  weight: '400',
  subsets: ['devanagari'],
});
export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <ConfigProvider theme={antdTheme}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ConfigProvider>
  );
}
