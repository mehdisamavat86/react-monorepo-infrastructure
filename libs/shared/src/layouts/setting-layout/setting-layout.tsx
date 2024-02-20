import { DashboardLayout } from '@myapp/shared/layouts';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import * as config from './config';
import { SettingLayoutProps as Props } from './types';

export default function SettingLayout({
  children,
  options: customOptions,
}: Props) {
  const options = useMemo(
    () => merge(config.options, customOptions),
    [customOptions]
  );

  return <DashboardLayout options={options}>{children}</DashboardLayout>;
}
