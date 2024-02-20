import { MotionContainer, varBounce } from '@myapp/shared/components/animate';
import { CompactLayout } from '@myapp/shared/layouts';
import { RouterLink } from '@myapp/shared/router';
import { Button, Typography } from '@mui/material';
import { m } from 'framer-motion';

type Props = {
  title?: string;
  description?: string;
  redirectTo?: string;
  redirectToTitle?: string;
  onRedirect?: () => void;
};

export default function ErrorView({
  title,
  description,
  redirectTo,
  redirectToTitle,
  onRedirect,
}: Props) {
  return (
    <CompactLayout>
      <MotionContainer sx={{ gap: 2 }}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ fontSize: '30px', mb: 2 }}>
            {title || 'Error!'}
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary', mb: 2 }}>
            {description || 'There was an error, please try again later.'}
          </Typography>
        </m.div>

        <Button
          component={RouterLink}
          to={redirectTo || '/'}
          size="large"
          variant="contained"
          onClick={onRedirect}
        >
          {redirectToTitle || 'Go to Home'}
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
