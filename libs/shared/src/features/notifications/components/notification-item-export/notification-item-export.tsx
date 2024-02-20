import { useNotify } from '@myapp/shared/hooks';
import { useRedirect } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { Button, ButtonProps } from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { NotificationItemExportProps as Props } from './types';

export const NotificationItemExport = memo(({ className, item }: Props) => {
  const notify = useNotify();
  const redirect = useRedirect();
  const handleClick = () => {
    redirect('/search-list/export-similarity');
    // TODO should use toURL and ROUTES
  };
  const handleDownload: ButtonProps['onClick'] = (e) => {
    e.stopPropagation();
    notify.message('Downloading the Exported search.');
    // TODO download exported data
  };

  return (
    <Styled.Wrapper
      item={item}
      className={classnames('NotificationItemExport', className)}
      sx={SX.root}
      onClick={handleClick}
    >
      <Button variant="contained" onClick={handleDownload} color="primary">
        Download
      </Button>
    </Styled.Wrapper>
  );
});

NotificationItemExport.displayName = 'NotificationItemExport';
