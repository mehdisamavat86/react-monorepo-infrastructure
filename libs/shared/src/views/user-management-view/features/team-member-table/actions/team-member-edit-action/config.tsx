import { PopoverListButtonProps } from '@myapp/shared/components';
import * as Styled from './styles';
import { TeamMemberActionType as ActionType } from './types';

export const ITEMS: PopoverListButtonProps['items'] = [
  {
    key: ActionType.edit,
    label: <Styled.MenuItem>Edit Member</Styled.MenuItem>,
  },
  {
    key: ActionType.disable,
    label: <Styled.MenuItem color="error">Disable Member</Styled.MenuItem>,
  },
  {
    key: ActionType.enable,
    label: <Styled.MenuItem color="primary">Enable Member</Styled.MenuItem>,
  },
];
