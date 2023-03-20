import TelegramAuthContext from '@/contexts/AuthTelegram';
import { useContext } from 'react';

export default function useTelegram() {
  return useContext(TelegramAuthContext);
}
