import { Icon } from '@myapp/shared/components';
import { varHover } from '@myapp/shared/components/animate';
import { useSettingsContext } from '@myapp/shared/components/settings';
import type { SxStyle } from '@myapp/shared/theme';
import { Badge, Box, IconButton, badgeClasses } from '@mui/material';
import { m } from 'framer-motion';

type Props = {
  sx?: SxStyle;
};

export default function SettingsButton({ sx }: Props) {
  const settings = useSettingsContext();

  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!settings.canReset}
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: 8,
        },
        ...sx,
      }}
    >
      <Box
        component={m.div}
        animate={{
          rotate: [0, settings.open ? 0 : 360],
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          aria-label="settings"
          onClick={settings.onToggle}
          sx={{
            width: 40,
            height: 40,
          }}
        >
          <Icon name="setting" />
        </IconButton>
      </Box>
    </Badge>
  );
}
