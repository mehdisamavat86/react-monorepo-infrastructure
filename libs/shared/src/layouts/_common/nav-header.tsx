import {
  Icon,
  NavSectionHeaderProps as Props,
  useIsMiniLayout,
  useSettingsContext,
} from '@myapp/shared/components';
import { Box, IconButton } from '@mui/material';
import { useMemo } from 'react';
import * as SX from './sx';

export default function NavHeader({
  closable,
  title: _title,
  sx,
  ...props
}: Props) {
  const settings = useSettingsContext();
  const isOpen = !useIsMiniLayout();
  const setting = useMemo(() => {
    const icon = 'icon' in props ? props.icon : undefined;
    const actions = 'actions' in props ? props.actions : undefined;
    const titleKey = isOpen ? 'open' : 'close';
    const title =
      _title && typeof _title === 'object' && 'open' in _title
        ? _title[titleKey]
        : _title;

    if (closable === true)
      return {
        title,
        icon: isOpen ? icon?.close : icon?.open,
        action: icon?.action,
        actions,
      };

    return {
      title,
      icon: undefined,
      action: icon?.action ?? undefined,
      actions,
    };
  }, [_title, props, closable, isOpen]);

  return (
    <Box sx={SX.navWrapper({ setting, sx })}>
      <Box sx={SX.content}>
        {isOpen && setting.actions && (
          <Box sx={SX.actions}>{setting.actions}</Box>
        )}
        <Box sx={SX.title(isOpen)}>
          {setting.title}
          {isOpen && setting.action}
          {closable && (
            <IconButton
              size="small"
              onClick={() =>
                settings.onUpdate(
                  'themeLayout',
                  settings.themeLayout === 'vertical' ? 'mini' : 'vertical'
                )
              }
            >
              {setting.icon && <Icon name={setting.icon} />}
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
}
