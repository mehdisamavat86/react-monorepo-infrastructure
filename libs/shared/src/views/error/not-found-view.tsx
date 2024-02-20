import { MotionContainer, varBounce } from '@myapp/shared/components/animate';
import { PageNotFoundIllustration } from '@myapp/shared/components/illustrations';
import { CompactLayout } from '@myapp/shared/layouts';
import { RouterLink } from '@myapp/shared/router';
import { Button, Typography } from '@mui/material';
import { m } from 'framer-motion';

export default function NotFoundView() {
  return (
    <CompactLayout>
      <MotionContainer>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" paragraph>
            Sorry, Page Not Found!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: 'text.secondary' }}>
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <PageNotFoundIllustration
            sx={{
              height: 260,
              my: { xs: 5, sm: 10 },
            }}
          />
        </m.div>

        <Button component={RouterLink} to="/" size="large" variant="contained">
          Go to Home
        </Button>
      </MotionContainer>
    </CompactLayout>
  );
}
