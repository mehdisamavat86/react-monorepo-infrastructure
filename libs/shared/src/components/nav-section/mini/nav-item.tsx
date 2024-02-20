import { forwardRef } from 'react';

import { useAuthCheckAccess } from '@myapp/shared/auth';
import { RouterLink } from '@myapp/shared/router';
import { Link, ListItemText, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Icon } from '../../icon';
import type { NavConfigProps, NavItemProps } from '../types';
import { StyledIcon, StyledItem } from './styles';

type Props = NavItemProps & {
  config: NavConfigProps;
};

const NavItem = forwardRef<HTMLDivElement, Props>(
  ({ item, depth, open, active, externalLink, config, ...other }, ref) => {
    const theme = useTheme();
    const { title, path, icon, children, disabled, caption, roles } = item;
    const auth = useAuthCheckAccess(roles, true);
    if (!auth) return null;

    const subItem = depth !== 1;
    const renderContent = (
      <StyledItem
        disableGutters
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        config={config}
        {...other}
      >
        {icon && (
          <StyledIcon
            size={config.iconSize}
            sx={{
              ...(subItem && { mr: 1.5 }),
            }}
          >
            {icon}
          </StyledIcon>
        )}

        {!(config.hiddenLabel && !subItem) && (
          <ListItemText
            sx={{
              width: 1,
              flex: 'unset',
              ...(!subItem && {
                px: 0.5,
                mt: 0.5,
              }),
            }}
            primary={title}
            primaryTypographyProps={{
              noWrap: true,
              fontSize: 10,
              lineHeight: '16px',
              textAlign: 'center',
              textTransform: 'capitalize',
              fontWeight: active ? 'fontWeightBold' : 'fontWeightSemiBold',
              ...(subItem && {
                textAlign: 'unset',
                fontSize: theme.typography.body2.fontSize,
                lineHeight: theme.typography.body2.lineHeight,
                fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
              }),
            }}
          />
        )}

        {caption && (
          <Tooltip title={caption} arrow placement="right">
            <Icon
              size={16}
              name="info"
              sxx={{
                color: 'text.disabled',
                ...(!subItem && {
                  top: 11,
                  left: 6,
                  position: 'absolute',
                }),
              }}
            />
          </Tooltip>
        )}

        {!!children && (
          <Icon
            size={16}
            name="arrow-forward"
            sxx={{
              top: 11,
              right: 6,
              position: 'absolute',
            }}
          />
        )}
      </StyledItem>
    );

    // External link
    if (externalLink)
      return (
        <Link
          href={path}
          target="_blank"
          rel="noopener"
          underline="none"
          sx={{
            width: 1,
            ...(disabled && {
              cursor: 'default',
            }),
          }}
        >
          {renderContent}
        </Link>
      );

    // Default
    return (
      <Link
        component={RouterLink}
        to={path}
        underline="none"
        sx={{
          width: 1,
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;
