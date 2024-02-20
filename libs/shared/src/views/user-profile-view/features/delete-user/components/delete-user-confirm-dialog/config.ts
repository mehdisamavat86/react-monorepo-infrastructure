import { DeleteUserReason } from './types';

export const DELETE_USER_REASON_LABEL: Record<DeleteUserReason, string> = {
  TEMPORARY: 'This is temporary.',
  TOO_COMPLEX: 'It’s too complicated.',
  TOO_EXPENSIVE: 'It’s expensive.',
  FINISHED_THE_WORK: 'I finished the work, I needed to do',
  LOW_QUALITY: 'The data quality is too low.',
  OTHER: 'Other reason',
};
