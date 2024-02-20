import { MotionContainer, varBounce } from '@myapp/shared/components/animate';
import { SeverErrorIllustration } from '@myapp/shared/components/illustrations';
import { CompactLayout } from '@myapp/shared/layouts';
import { RouterLink } from '@myapp/shared/router';
import { Button, Typography } from '@mui/material';
import { m } from 'framer-motion';

export default function Page500() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            500 Internal Server Error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            There was an error, please try again later.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <SeverErrorIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} to="/" size="large" variant="contained">
          Go to Home
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
