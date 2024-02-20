import { Icon } from '@myapp/shared/components';
import { useSettings } from '@myapp/shared/hooks';
import { useTheme } from '@mui/material/styles';
import { memo } from 'react';
import * as Styled from './styles';
import type { SocialMediaBarProps as Props } from './types';

export const SocialMediaBar = memo(({ className }: Props) => {
  const theme = useTheme();
  const {
    data: setting,
    isLoading,
    setSetting,
    isFetched,
  } = useSettings('social-media-bar');

  if (setting || isLoading || !isFetched) return null;

  return (
    <Styled.Wrapper
      className={`SocialMediaBar ${className}`}
      icon={
        <Icon name="facebook" color={theme.palette.primary.main} size={22} />
      }
      severity="info"
      closable
      onClose={setSetting}
    >
      Join our Facebook community
    </Styled.Wrapper>
  );
});

SocialMediaBar.displayName = 'SocialMediaBar';
