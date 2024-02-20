import {
  Scrollbar as BaseScrollbar,
  BorderedCard,
} from '@myapp/shared/components';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(BorderedCard)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  gap: ${(p) => p.theme.spacing(5)};
  background: ${(p) =>
    p.theme.palette.mode === 'dark'
      ? p.theme.palette.grey[700]
      : p.theme.palette.grey[200]};
  flex: 1;

  @media (max-height: 800px) {
    gap: ${(p) => p.theme.spacing(2)};
  }
`;

export const Scrollbar = styled(BaseScrollbar)`
  width: 100%;

  .content-wrapper {
    display: flex;
    height: 100%;
  }

  .simplebar-content {
    max-width: 100%;
    width: fit-content;
    margin: auto;
  }
`;

export const List = styled('div')<{ center?: boolean }>`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: ${(p) => p.theme.spacing(2)};
  padding: ${(p) => p.theme.spacing(0.25)};
  align-items: end;

  :has(.iSPopular) {
    .SubscriptionPlanItem {
      :not(.iSPopular) {
        height: calc(100% - 40px);
      }
    }
  }
`;
