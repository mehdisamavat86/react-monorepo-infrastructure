import * as SX from './sx';
import { SubMode } from './types';

export const SubButtonMode: SubMode[] = [
  {
    mode: 'currentPlan',
    title: 'Resubscribe',
    style: SX.currentPlanBtn,
    variant: 'outlined',
  },
  {
    mode: 'downgradeToFree',
    title: 'Downgrade to Free',
    style: SX.freeDowngradeBtn,
    variant: 'contained',
  },
  {
    mode: 'downgrade',
    title: 'Downgrade',
    style: SX.freeDowngradeBtn,
    variant: 'contained',
  },
  {
    mode: 'downgradeNow',
    title: 'Downgrade Now',
    style: SX.freeDowngradeBtn,
    variant: 'contained',
  },
  {
    mode: 'cancelDowngrade',
    title: 'Cancel Downgrade',
    style: SX.cancelDowngrade,
    variant: 'soft',
  },
  {
    mode: 'upgradeNow',
    title: 'Upgrade Now',
    style: SX.freeDowngradeBtn,
    variant: 'contained',
  },
];
