import '@/styles/globals.css';
import AuthTelegramProvider from './providers/AuthTelegram';

export default function App({ Component, pageProps }) {
  return (
    <AuthTelegramProvider>
      <Component {...pageProps} />
    </AuthTelegramProvider>
  );
}
