import { createContext, useContext, useMemo } from 'react';
import { SettingsContextProps } from '../types';

export const SettingsContext = createContext({} as SettingsContextProps);

export const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context)
    throw new Error('useSettingsContext must be use inside SettingsProvider');

  return context;
};

export const useIsMiniLayout = () => {
  const setting = useSettingsContext();

  return useMemo(
    () => setting.minimizeAble && setting.themeLayout === 'mini',
    [setting.minimizeAble, setting.themeLayout]
  );
};
