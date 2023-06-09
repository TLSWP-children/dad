import { useState, useEffect } from 'react';
import TelegramAuthContext from '../contexts/AuthTelegram';

export default function AuthTelegramProvider({ children }) {
  const [value, setValue] = useState({});
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    const onClose = () => {
      tg.close();
    };

    const onToggleButton = () => {
      if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
      } else {
        tg.MainButton.show();
      }
    };

    setValue({
      onClose,
      onToggleButton,
      tg,
      user: tg.initDataUnsafe?.user,
      queryId: tg.initDataUnsafe?.query_id,
    });
  }, []);
  return <TelegramAuthContext.Provider value={value}>{children}</TelegramAuthContext.Provider>;
}
