import { paper } from '@myapp/shared/theme';
import {
  Badge,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  drawerClasses,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Icon } from '../../icon';
import Scrollbar from '../../scrollbar/scrollbar';
import { useSettingsContext } from '../context';
import BaseOptions from './base-option';
import FullScreenOption from './fullscreen-option';

export default function SettingsDrawer() {
  const theme = useTheme();

  const settings = useSettingsContext();

  const labelStyles = {
    mb: 1.5,
    color: 'text.disabled',
    fontWeight: 'fontWeightSemiBold',
  };

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Settings
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={settings.onReset}>
          <Badge color="error" variant="dot" invisible={!settings.canReset}>
            <Icon name="reload" size={24} />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={settings.onClose}>
        <Icon name="close" size={24} />
      </IconButton>
    </Stack>
  );

  const renderMode = (
    <div>
      <Typography variant="caption" component="div" sx={{ ...labelStyles }}>
        Mode
      </Typography>

      <BaseOptions
        value={settings.themeMode}
        onChange={(newValue: string) =>
          settings.onUpdate('themeMode', newValue)
        }
        options={['light', 'dark']}
        icons={['sun', 'moon']}
      />
    </div>
  );

  const renderDirection = (
    <div>
      <Typography variant="caption" component="div" sx={{ ...labelStyles }}>
        Direction
      </Typography>

      <BaseOptions
        value={settings.themeDirection}
        onChange={(newValue: string) =>
          settings.onUpdate('themeDirection', newValue)
        }
        options={['ltr', 'rtl']}
        icons={['align_left', 'align_right']}
      />
    </div>
  );

  return (
    <Drawer
      anchor="right"
      open={settings.open}
      onClose={settings.onClose}
      slotProps={{
        backdrop: { invisible: true },
      }}
      sx={{
        [`& .${drawerClasses?.paper}`]: {
          ...paper({ theme, bgcolor: theme.palette.background.default }),
          width: 280,
        },
      }}
    >
      {renderHead}

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3 }}>
          {renderMode}

          {renderDirection}
        </Stack>
      </Scrollbar>

      <FullScreenOption />
    </Drawer>
  );
}
