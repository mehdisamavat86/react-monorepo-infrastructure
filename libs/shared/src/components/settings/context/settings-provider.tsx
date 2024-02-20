import { useLocalStorage } from '@myapp/shared/hooks';
import { localStorageGetRaw } from '@myapp/shared/utils';
import { isEqual } from 'lodash-es';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SettingsValueProps } from '../types';
import { SettingsContext } from './settings-context';

type SettingsProviderProps = {
  children: React.ReactNode;
  defaultSettings: SettingsValueProps;
};

export function SettingsProvider({
  children,
  defaultSettings,
}: SettingsProviderProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [minimizeAble, setMinimizeAblePrivate] = useState(false);

  const [settings, setSettings] = useLocalStorage('settings', defaultSettings);

  const isArabic = localStorageGetRaw('i18nextLng') === 'ar';

  useEffect(() => {
    if (isArabic) {
      onChangeDirectionByLang('ar');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isArabic]);

  const setMinimizeAble = useCallback((v: boolean) => {
    setMinimizeAblePrivate(v);
  }, []);

  const onUpdate = useCallback(
    (name: string, value: string | boolean) => {
      setSettings((prevState: SettingsValueProps) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setSettings]
  );

  // Direction by lang
  const onChangeDirectionByLang = useCallback(
    (lang: string) => {
      onUpdate('themeDirection', lang === 'ar' ? 'rtl' : 'ltr');
    },
    [onUpdate]
  );

  // Reset
  const onReset = useCallback(() => {
    setSettings(defaultSettings);
  }, [defaultSettings, setSettings]);

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const canReset = !isEqual(settings, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onUpdate,
      // Direction
      onChangeDirectionByLang,
      // Reset
      canReset,
      onReset,
      // Drawer
      minimizeAble,
      setMinimizeAble,
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [
      settings,
      onUpdate,
      onChangeDirectionByLang,
      canReset,
      onReset,
      minimizeAble,
      setMinimizeAble,
      openDrawer,
      onToggleDrawer,
      onCloseDrawer,
    ]
  );

  return (
    <SettingsContext.Provider value={memoizedValue}>
      {children}
    </SettingsContext.Provider>
  );
}
