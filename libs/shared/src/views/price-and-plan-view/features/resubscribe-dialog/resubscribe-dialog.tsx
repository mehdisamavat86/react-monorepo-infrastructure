import { classnames } from '@myapp/shared/utils';
import { memo, useState } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { ResubscribeDialogProps as Props } from './types';
import { StepOne } from './components/step-one';
import { StepTwo } from './components/step-two';

export const ResubscribeDialog = memo(({ className, plan }: Props) => {
  const [currentStep, setCuttentStep] = useState<0 | 1>(0);

  const onNext = () => {
    setCuttentStep(1);
  };

  const steps = {
    0: <StepOne plan={plan} onNext={onNext} />,
    1: <StepTwo plan={plan} />,
  };

  return (
    <Styled.Wrapper
      className={classnames('ResubscribeDialog', className)}
      sx={SX.root}
    >
      {steps[currentStep]}
    </Styled.Wrapper>
  );
});

ResubscribeDialog.displayName = 'ResubscribeDialog';
