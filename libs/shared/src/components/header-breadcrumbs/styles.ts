import { Breadcrumbs as BreadcrumbsBase } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BreadcrumbsBase)`
  & > .MuiBreadcrumbs-ol > .MuiBreadcrumbs-separator {
    margin: 0 ${(p) => p.theme.spacing(0.5)};
  }

  & > .MuiBreadcrumbs-ol > .MuiBreadcrumbs-li > span {
    font-weight: bold;
  }
`;
