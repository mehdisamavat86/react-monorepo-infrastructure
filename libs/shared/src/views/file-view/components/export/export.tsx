import { Icon, LinkOut } from '@myapp/shared/components';
import { useParams, useSearchParams } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { useTheme } from '@mui/material';
import { memo } from 'react';
import { useGetExportFileQuery } from '../../api/use-get-export-file-query-api';
import * as Styled from './styles';
import { ExportFileUrlParams, type ExportProps as Props } from './types';

export const Export = memo(({ className }: Props) => {
  const theme = useTheme();
  const params = useSearchParams<ExportFileUrlParams>();
  const { id } = useParams();
  const api = useGetExportFileQuery(id!, params.workspaceId);

  return (
    <Styled.Wrapper
      className={classnames('ExportFile', className)}
      title="Click the link below to download the export file"
      titleProps={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
      contentSx={{ textAlign: 'center' }}
    >
      <LinkOut
        variant="text"
        sx={{ textAlign: 'center' }}
        href={api.data?.url ?? '#'}
        startIcon={
          <Icon color={theme.palette.grey[500]} size={16} name="download" />
        }
      >
        Download Report
      </LinkOut>
    </Styled.Wrapper>
  );
});

Export.displayName = 'Export';
