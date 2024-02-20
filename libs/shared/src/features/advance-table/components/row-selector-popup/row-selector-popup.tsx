import { useAdvanceTableContext } from '@myapp/shared/features/advance-table/context';
import { useNotify } from '@myapp/shared/hooks';
import { classnames, toNumber } from '@myapp/shared/utils';
import { ClickAwayListener, Popover } from '@mui/material';
import Divider from '@mui/material/Divider';
import { MouseEventHandler, memo, useMemo, useRef, useState } from 'react';
import { RowSelectorPopupActionButtons } from './components/row-selector-popup-action-buttons';
import { RowSelectorPopupAllSelect } from './components/row-selector-popup-all-select';
import { RowSelectorPopupNumberSelect } from './components/row-selector-popup-number-select';
import { RowSelectorPopupPageSelect } from './components/row-selector-popup-page-select';
import { useExportSizeLimit } from './hooks/use-export-size-limit';
import * as Styled from './styles';
import * as SX from './sx';
import { RowSelectorPopupProps as Props, SelectionMode } from './types';
import { getCheckboxState } from './utils';

export const RowSelectorPopup = memo(
  <T extends Record<string, any>>({ className, table, data }: Props<T>) => {
    const notify = useNotify();

    const inputRef = useRef<HTMLInputElement>(null);
    const [mode, setMode] = useState<SelectionMode | undefined>();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
    const { config } = useAdvanceTableContext();
    const rowKey = config?.rowKey || 'id';

    const open = Boolean(anchorEl);
    const sizeLimit = useExportSizeLimit(
      data?.totalElements,
      data?.top?.length
    );

    const handleOpenPopup: MouseEventHandler<HTMLElement> = (e) =>
      setAnchorEl(e.currentTarget);

    const contentItems = useMemo(() => {
      return (data?.content || []).map((x) => x[rowKey]) as string[];
    }, [data?.content, rowKey]);

    const size = useMemo(() => {
      let value = contentItems.length;
      if (mode === SelectionMode.ALL) value = sizeLimit.normalRowsLimit;
      else if (mode === SelectionMode.NUMBER)
        value = toNumber(inputRef?.current?.value) ?? 0;
      return value;
    }, [contentItems.length, mode, sizeLimit.normalRowsLimit]);

    const handleChangeMode = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
      selectionMode?: SelectionMode
    ) => {
      e.stopPropagation();
      setMode(selectionMode);
      setAnchorEl(null);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = (e) => {
      handleChangeMode(e);
      table?.selection.onClear();
    };

    const handleSelectPage: MouseEventHandler<HTMLButtonElement> = (e) => {
      handleChangeMode(e, SelectionMode.PAGE);
      table?.selection.onSelectRowsById(contentItems);
    };

    const handleSelectAll: MouseEventHandler<HTMLButtonElement> = (e) => {
      handleChangeMode(e, SelectionMode.ALL);
      table?.selection.onSelectRowsBySize(sizeLimit.normalRowsLimit);
    };

    const handleSelectNumber: MouseEventHandler<HTMLButtonElement> = (e) => {
      const value = toNumber(inputRef?.current?.value) ?? 0;
      if (!value) return;
      if (value > sizeLimit.normalRowsLimit) {
        if (sizeLimit.systemLimitReached)
          notify.error(
            `For Performance reasons, the number of records is caped to ${sizeLimit.normalRowsLimit}`
          );
        else
          notify.error(
            `Entered value is more than total number of records: ${sizeLimit.normalRowsLimit}`
          );
        inputRef.current!.value = String(sizeLimit.normalRowsLimit);
        return;
      }
      handleChangeMode(e, SelectionMode.NUMBER);
      table?.selection.onSelectRowsBySize(toNumber(value) ?? 0);
    };

    const state = getCheckboxState(
      table?.selection.size ?? 0,
      table?.selection.included.length ?? 0,
      table?.selection.excluded.length ?? 0,
      sizeLimit.totalRowsLimit,
      mode
    );

    return (
      <Styled.Wrapper
        className={classnames('RowSelectorPopup', className)}
        sx={SX.root}
        onClick={handleOpenPopup}
        count={table?.selection.count}
        disabled={!contentItems.length}
        state={state}
      >
        <Popover
          slotProps={{ paper: { sx: SX.popoverSlot } }}
          open={open}
          anchorEl={anchorEl}
          elevation={0}
        >
          <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
            <Styled.PopoverPaper sx={SX.popoverPaper}>
              <Styled.ContentWrapper container>
                <RowSelectorPopupPageSelect handleClick={handleSelectPage} />
                <Divider />
                <RowSelectorPopupAllSelect
                  sizeLimit={sizeLimit}
                  onClick={handleSelectAll}
                />
                <Divider />
                <RowSelectorPopupNumberSelect
                  value={size}
                  max={sizeLimit.normalRowsLimit}
                  inputRef={inputRef}
                  extra={data?.top?.length}
                />
                <RowSelectorPopupActionButtons
                  onApply={handleSelectNumber}
                  onClear={handleClear}
                />
              </Styled.ContentWrapper>
            </Styled.PopoverPaper>
          </ClickAwayListener>
        </Popover>
      </Styled.Wrapper>
    );
  }
);
