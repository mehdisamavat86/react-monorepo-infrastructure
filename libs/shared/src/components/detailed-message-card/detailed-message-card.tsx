import { Button, Typography } from '@mui/material';
import { AUTH_LOGIN_URL } from '@myapp/shared/auth';
import { RouterLink } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { m } from 'framer-motion';
import { memo } from 'react';
import { MotionContainer, varBounce } from '../animate';
import * as Styled from './styles';
import type { DetailedMessageCardProps as Props } from './types';

export const DetailedMessageCard = memo(
  ({ className, title, description, children }: Props) => {
    return (
      <Styled.Wrapper className={classnames('DetailedMessageCard', className)}>
        <MotionContainer>
          <m.div variants={varBounce().in}>
            <Styled.Text variant="h3" paragraph>
              {title}
            </Styled.Text>
          </m.div>

          <m.div variants={varBounce().in}>
            <Typography sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </m.div>

          {children && (
            <m.div variants={varBounce().in}>
              <Styled.Content>{children}</Styled.Content>
            </m.div>
          )}

          <Button
            component={RouterLink}
            to={AUTH_LOGIN_URL}
            size="large"
            variant="contained"
          >
            Back to sign in
          </Button>
        </MotionContainer>
      </Styled.Wrapper>
    );
  }
);

DetailedMessageCard.displayName = 'DetailedMessageCard';
