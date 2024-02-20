import { classnames } from '@myapp/shared/utils';
import { memo, useEffect, useState } from 'react';
import { SubscriptionDialog } from '../../../../components/subscription-dialog';
import { useDialogContext } from '../../../../context';
import { SubButtonMode } from './config';
import * as Styled from './styles';
import * as SX from './sx';
import type { PlanSubscribeProps as Props, SubMode } from './types';

export const PlanSubscribe = memo(({ className, SubMode, config }: Props) => {
  const [buttonMode, setButtonMode] = useState<SubMode>();
  const { onToggle, onFalse, value } = useDialogContext();

  useEffect(() => {
    setButtonMode(SubButtonMode.find(({ mode }) => mode === SubMode));
  }, [SubMode]);

  return (
    <>
      <SubscriptionDialog
        open={value}
        onClose={onFalse}
        content={config.dialogContent}
      />
      <Styled.Wrapper
        className={classnames('PlanSubscribe', className)}
        sx={SX.root}
      >
        <Styled.SubButton
          sx={buttonMode?.style}
          variant={config.variant}
          color="primary"
          disabled={config.disabled}
          onClick={onToggle}
        >
          {config.buttonTitle}
        </Styled.SubButton>
      </Styled.Wrapper>
    </>
  );
});

PlanSubscribe.displayName = 'PlanSubscribe';
