import { CustomPopover, PopoverActionEvent } from '@myapp/shared/components';
import { useNotify } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { memo } from 'react';
import * as Styled from './styles';
import type { ExportInvoicesProps as Props } from './types';

export const ExportInvoices = memo(({ className }: Props) => {
  const notif = useNotify();

  const handleExport: PopoverActionEvent = (e) => {
    notif.success('successfully exported');
    e.onClose();
  };

  return (
    <Styled.Wrapper className={classnames('ExportInvoices', className)}>
      <CustomPopover
        icon="download-offline"
        title={<Typography variant="h6">Export all invoices</Typography>}
        titleSx={{ px: '32px' }}
        element={<Button>Export all invoices</Button>}
        actions={[
          {
            children: 'Export Now',
            variant: 'text',
            color: 'primary',
            fullWidth: true,
            onClick: handleExport,
          },
        ]}
      >
        <FormControl>
          <RadioGroup defaultValue="CSV">
            <FormControlLabel value="CSV" control={<Radio />} label="CSV" />
            <FormControlLabel value="Excel" control={<Radio />} label="Excel" />
          </RadioGroup>
        </FormControl>
      </CustomPopover>
    </Styled.Wrapper>
  );
});

ExportInvoices.displayName = 'ExportInvoices';
