import { CheckPassword, CheckPasswordRule } from './types';

export const checkPasswprd: CheckPassword[] = [
  {
    title: '8 or more Characters',
    icon: 'check',
    condition: CheckPasswordRule.length,
  },
  {
    title: 'At least one upper case character',
    icon: 'check',
    condition: CheckPasswordRule.upper,
  },
  {
    title: 'At least one lower case character',
    icon: 'check',
    condition: CheckPasswordRule.lower,
  },
  {
    title: 'At least one digit',
    icon: 'check',
    condition: CheckPasswordRule.digit,
  },
  {
    title: 'At least one symbol',
    icon: 'check',
    condition: CheckPasswordRule.symbol,
  },
];
