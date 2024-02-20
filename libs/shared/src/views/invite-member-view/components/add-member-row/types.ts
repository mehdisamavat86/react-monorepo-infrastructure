import type { LoadingButtonProps } from '@mui/lab';
import type { MemberFields } from '../add-member-form';

export interface AddMemberRowProps extends Omit<LoadingButtonProps, 'onClick'> {
  className?: string;
  onAppend: (data: MemberFields) => void;
}
