import { Maybe } from '@myapp/shared/definition';
import { Dispatch, SetStateAction } from 'react';

export type SettingsValueProps = {
  themeStretch: boolean;
  themeMode: 'light' | 'dark';
  themeDirection: 'rtl' | 'ltr';
  themeContrast: 'default' | 'bold';
  themeLayout: 'vertical' | 'horizontal' | 'mini';
  themeColorPresets: 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';
  enableSettingButton: boolean;
};

export type SettingsContextProps = SettingsValueProps & {
  // Update
  onUpdate: (name: keyof SettingsValueProps, value: string | boolean) => void;
  // Direction by lang
  onChangeDirectionByLang: (lang: string) => void;
  // Reset
  canReset: boolean;
  onReset: VoidFunction;
  // Drawer
  minimizeAble: boolean;
  setMinimizeAble: (value: boolean) => void;
  open: boolean;
  onToggle: VoidFunction;
  onClose: VoidFunction;
};
