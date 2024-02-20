import { ConfirmDialogProps } from '@myapp/shared/components';
import { useBoolean } from '@myapp/shared/hooks';
import { classnames } from '@myapp/shared/utils';
import {
  Divider,
  FormControl,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { memo, useState } from 'react';
import { DELETE_USER_REASON_LABEL as REASON_LABEL } from './config';
import * as Styled from './styles';
import {
  DeleteUserConfirmDialogProps as Props,
  DeleteUserReason as Reason,
  ReasonData,
} from './types';

export const DeleteUserConfirmDialog = memo(
  ({ className, state, onSubmit }: Props) => {
    const loading = useBoolean();
    const [reason, setReason] = useState<ReasonData>({
      reason: Reason.OTHER,
      description: '',
    });
    const isOther = reason.reason === Reason.OTHER;
    const updateReason = (val: Partial<ReasonData>) =>
      setReason((r) => ({ ...r, ...val }));

    const handleSubmit: ConfirmDialogProps['onOk'] = (e) => {
      const description = isOther ? reason.description : reason.reason;
      if (!description?.trim()) return;
      loading.onTrue();
      onSubmit(description);
    };

    return (
      <Styled.Wrapper
        className={classnames('DeleteUserConfirmDialog', className)}
        state={state}
        loading={loading.value}
        headerSx={{ borderColor: 'divider' }}
        title="We value your feedback. Why are you deleting your account?"
        cancelTitle="No, go back"
        cancelProps={{ color: 'primary', variant: 'contained' }}
        okTitle="Delete"
        okProps={{
          disabled: isOther ? !reason.description.trim().length : false,
          loading: loading.value,
        }}
        actionsSx={{ justifyContent: 'center', flexDirection: 'row-reverse' }}
        onOk={handleSubmit}
      >
        <Styled.Reason>
          <FormControl>
            <RadioGroup
              value={reason.reason}
              onChange={(e) => updateReason({ reason: e.target.value as any })}
            >
              {Object.keys(REASON_LABEL).map((v) => (
                <Styled.Item
                  key={v}
                  value={v}
                  control={<Radio />}
                  label={REASON_LABEL[v as Reason]}
                />
              ))}
            </RadioGroup>

            {isOther && (
              <>
                <Divider sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  rows={3}
                  multiline
                  value={reason?.description}
                  placeholder="Tell us more about why you are cancelling your subscription."
                  onChange={(e) =>
                    updateReason({ description: e.currentTarget.value })
                  }
                />
              </>
            )}
          </FormControl>
        </Styled.Reason>
      </Styled.Wrapper>
    );
  }
);

DeleteUserConfirmDialog.displayName = 'DeleteUserConfirmDialog';
