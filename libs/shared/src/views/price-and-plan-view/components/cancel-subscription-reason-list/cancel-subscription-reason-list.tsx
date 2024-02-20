import { CancelSubscriptionReason as Reason } from '@myapp/shared/definition';
import { classnames } from '@myapp/shared/utils';
import { FormControl, Radio, RadioGroup, TextField } from '@mui/material';
import { memo } from 'react';
import type { ReasonData } from '../cancel-subscription/types';
import { CANCEL_SUBSCRIPTION_REASON_LABEL as REASON_LABEL } from './config';
import * as Styled from './styles';
import type { CancelSubscriptionReasonListProps as Props } from './types';

export const CancelSubscriptionReasonList = memo(
  ({ className, value, onChange }: Props) => {
    const isOther = value.reason === Reason.OTHER;
    const updateReason = (val: Partial<ReasonData>) => {
      const result = { ...value, ...val };
      const isOtherLocal = result.reason === Reason.OTHER;
      onChange({
        ...result,
        description: isOtherLocal ? result.description : '',
        isValid: isOtherLocal ? !!result.description.trim().length : true,
      });
    };

    return (
      <Styled.Wrapper
        className={classnames('CancelSubscriptionReasonList', className)}
      >
        <Styled.Reason>
          <FormControl>
            <RadioGroup
              value={value.reason}
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
              <TextField
                fullWidth
                rows={3}
                multiline
                value={value?.description}
                placeholder="Tell us more about why you are cancelling your subscription."
                onChange={(e) =>
                  updateReason({ description: e.currentTarget.value })
                }
              />
            )}
          </FormControl>
        </Styled.Reason>
      </Styled.Wrapper>
    );
  }
);

CancelSubscriptionReasonList.displayName = 'CancelSubscriptionReasonList';
