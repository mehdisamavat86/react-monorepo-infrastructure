import { InputError } from './types';

export const ErrorMessage: Record<InputError, string> = {
  [InputError.NEGATIVE_NUMBER]: 'Cannot use negative numbers',
  [InputError.INVALID_COMBINATION]: 'The Max should be higher than Min',
};
