import type { AdvanceTableConfig } from '@myapp/shared/features';
import type { SxStyle } from '@myapp/shared/theme';
import {
  Box,
  FormControlLabel,
  Stack,
  Switch,
  TablePagination,
  type TablePaginationProps,
} from '@mui/material';
import { min } from 'lodash-es';
import { SkeletonList } from '../skeleton-list';
import { TablePageSelector } from './table-page-selector';

type Props = {
  config: AdvanceTableConfig;
  dense?: boolean;
  isLoading?: boolean;
  sx?: SxStyle;
  onChangeDense?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TablePaginationCustom({
  config,
  dense,
  onChangeDense,
  sx,
  isLoading,
  ...other
}: Props & TablePaginationProps) {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      {isLoading ? (
        <SkeletonList
          count={[
            { width: 50, height: 25, variant: 'rectangular' },
            { variant: 'rounded', width: 80, height: 25 },
            { width: 15, height: 25 },
            { width: 15, height: 25 },
          ]}
          sx={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
            px: 2,
            py: 1.5,
            gap: 2,
          }}
        />
      ) : (
        <>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
            gap={1}
          >
            {config.showPageSelector !== false && (
              <TablePageSelector
                current={other.page}
                count={
                  min([
                    config.pageSelectorMax,
                    Math.ceil(other.count / other.rowsPerPage),
                  ]) || 1
                }
                onChange={other.onPageChange}
              />
            )}
            <TablePagination
              rowsPerPageOptions={config.rowsPerPageOptions}
              component="div"
              {...other}
              nextIconButtonProps={
                config.pageSelectorMax &&
                other.page + 1 >= config.pageSelectorMax
                  ? {
                      disabled: true,
                    }
                  : {}
              }
              sx={{
                borderTopColor: 'transparent',
                width: 'max-content',

                '& [class*="MuiTablePagination-select"]': {
                  display: config.showRowsPerPage ? undefined : 'none',
                },
              }}
            />
          </Stack>

          {onChangeDense && (
            <FormControlLabel
              label="Dense"
              control={<Switch checked={dense} onChange={onChangeDense} />}
              sx={{
                pl: 2,
                py: 1.5,
                top: 0,
                position: {
                  sm: 'absolute',
                },
              }}
            />
          )}
        </>
      )}
    </Box>
  );
}
