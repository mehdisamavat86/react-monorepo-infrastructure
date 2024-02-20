import type { SxStyle } from '@myapp/shared/theme';
import type { SidebarQuickAccessButtonPickedProps } from './components/sidebar-quick-access-button';

export const academicCenterTitle: SxStyle = {
  flexGrow: 1,
  justifyContent: 'flex-start',
  fontSize: (p) => p.typography.body1.fontSize,
};

export const upgradePlanMini: SidebarQuickAccessButtonPickedProps = {
  variant: 'text',
};

export const supportTitle: SxStyle = { textDecoration: 'underline' };
