import { classnames } from '@myapp/shared/utils';
import { memo, useState } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { DialogProps as Props } from './types';
import { StepTwo } from './components/step-two';
import { StepOne } from './components/step-one';

export const Dialog = memo(({ className, plan, actionType }: Props) => {
  const [currentStep, setCuttentStep] = useState<0 | 1>(0);

  const onNext = () => {
    setCuttentStep(1);
  };

  const steps = {
    0: <StepOne actionType={actionType} plan={plan} onNext={onNext} />,
    1: <StepTwo actionType={actionType} />,
  };

  return (
    <Styled.Wrapper className={classnames('Dialog', className)} sx={SX.root}>
      {steps[currentStep]}
    </Styled.Wrapper>
  );
});

Dialog.displayName = 'Dialog';
