import { getAppNaturalName } from '@myapp/shared/layouts/dashboard/components/sidebar/utils';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import * as SX from './sx';
import type { LogoTextProps as Props } from './types';

export const LogoText = memo(({ className }: Props) => {
  return (
    <Styled.Wrapper className={classnames('LogoText', className)} sx={SX.root}>
      <Styled.Text color="primary.main">AI</Styled.Text>
      <Styled.Text color="common.black">{getAppNaturalName()}</Styled.Text>
    </Styled.Wrapper>
  );
});

LogoText.displayName = 'LogoText';
