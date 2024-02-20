import { Box } from '@mui/material';
import { classnames } from '@myapp/shared/utils/class-names';
import { memo } from 'react';
import * as Styled from './styles';
import type { } from {};
{pascalCase name}}GroupActionProps as Props } from './types';

export const {{pascalCase name}}GroupAction = memo(
  ({ className, item, rowNumber }: Props) => {
    return (
      <Styled.Wrapper
        className={classnames('{{pascalCase name}}GroupAction', className)}
        rowNumber={rowNumber}
        item={item}
        items={[
          {
            button: { children: 'Action', color: 'inherit' },
            el: (props) => <Box>Action {props.rowNumber}</Box>,
          },
        ]}
      />
    );
  }
);

{{pascalCase name}}GroupAction.displayName = '{{pascalCase name}}GroupAction';
