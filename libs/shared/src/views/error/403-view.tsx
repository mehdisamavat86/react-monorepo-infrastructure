import { MotionContainer, varBounce } from '@myapp/shared/components/animate';
import { ForbiddenIllustration } from '@myapp/shared/components/illustrations';
import { CompactLayout } from '@myapp/shared/layouts';
import { RouterLink } from '@myapp/shared/router';
import { Button, Typography } from '@mui/material';
import { m } from 'framer-motion';

export default function View403() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            No permission
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            The page you&apos;re trying access has restricted access.
            <br />
            Please refer to your system administrator
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </m.div>

        <Button component={RouterLink} to="/" size="large" variant="contained">
          Go to Home
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
