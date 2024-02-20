import { Icon } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils/class-names';
import { useTheme } from '@mui/material/styles';
import { memo, useState } from 'react';
import { ChangeMemberStatusDialog } from '../../../../components/change-member-status-dialog';
import { EditMemberDialog } from '../../../../components/edit-member-dialog';
import * as Styled from './styles';
import {
  TeamMemberActionType as ActionType,
  TeamMemberEditActionProps as Props,
} from './types';
import { filterMemberEditItems } from './utils';

export const TeamMemberEditAction = memo(({ className, item }: Props) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<ActionType | undefined>();
  const deselectItem = () => setSelectedItem(undefined);

  return (
    <>
      <Styled.Wrapper
        className={classnames('TeamMemberEditAction', className)}
        icon={<Icon name="edit" size={24} />}
        items={filterMemberEditItems(item)}
        buttonProps={{
          iconColor: theme.palette.text.primary,
          square: 8,
          sx: {
            backgroundColor: theme.palette.background.neutral,
            padding: '4px 8px',
          },
        }}
        onSelect={(x) => setSelectedItem(x.key as ActionType)}
      />
      {selectedItem === ActionType.edit && (
        <EditMemberDialog item={item} onClose={deselectItem} />
      )}

      {(selectedItem === ActionType.disable ||
        selectedItem === ActionType.enable) && (
        <ChangeMemberStatusDialog item={item} onClose={deselectItem} />
      )}
    </>
  );
});

TeamMemberEditAction.displayName = 'TeamMemberEditAction';
