import { useAuthCheckAccess } from '@myapp/shared/auth';
import { RouterLink } from '@myapp/shared/router';
import { Box, Link, ListItemText, Tooltip } from '@mui/material';
import { Icon } from '../../icon';
import type { NavConfigProps, NavItemProps } from '../types';
import { StyledDotIcon, StyledIcon, StyledItem } from './styles';

type Props = NavItemProps & {
  config: NavConfigProps;
};

export default function NavItem({
  item,
  open,
  depth,
  active,
  config,
  externalLink,
  ...other
}: Props) {
  const { title, path, icon, info, children, disabled, caption, roles } = item;
  const subItem = depth !== 1;
  const auth = useAuthCheckAccess(roles, true);
  if (!auth) return null;
  const renderContent = (
    <StyledItem
      disableGutters
      disabled={disabled}
      active={active}
      depth={depth}
      config={config}
      {...other}
    >
      <>
        {icon && (
          <StyledIcon color="white" active={active} size={config.iconSize}>
            {icon}
          </StyledIcon>
        )}

        {subItem && (
          <StyledIcon size={config.iconSize}>
            <StyledDotIcon active={active} />
          </StyledIcon>
        )}
      </>

      {!(config.hiddenLabel && !subItem) && (
        <ListItemText
          primary={title}
          secondary={
            caption ? (
              <Tooltip title={caption} placement="top-start">
                <span>{caption}</span>
              </Tooltip>
            ) : null
          }
          primaryTypographyProps={{
            noWrap: true,
            typography: 'body2',
            textTransform: 'capitalize',
            fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            component: 'span',
            typography: 'caption',
            color: 'text.disabled',
          }}
        />
      )}

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children?.length && (
        <Icon
          name={open ? 'chevron-down' : 'arrow-right'}
          size={16}
          sxx={{ ml: 1, flexShrink: 0 }}
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
        color="inherit"
        sx={{
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );

  // Has child
  if (children) {
    return (
      <Link
        component={RouterLink}
        to={path}
        underline="none"
        color="inherit"
        sx={{
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );
  }

  // Default
  return (
    <Link
      component={RouterLink}
      to={path}
      underline="none"
      color="inherit"
      sx={{
        ...(disabled && {
          cursor: 'default',
        }),
      }}
    >
      {renderContent}
    </Link>
  );
}
