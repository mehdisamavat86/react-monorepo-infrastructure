import type { YupFormData } from '@myapp/shared/utils/yup';
import { scheme } from './config';

export interface CreateWorkspaceProps {
  className?: string;
}

export type CreateWorkspaceFormData = YupFormData<typeof scheme>;
