import { ListItemButton, ListItemIcon, ListSubheader } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import type { NavConfigProps, NavItemProps } from '../types';

type StyledItemProps = Omit<NavItemProps, 'item'> & {
  config: NavConfigProps;
};

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledItemProps>(({ active, depth, config, theme }) => {
  const subItem = depth !== 1;

  const deepSubItem = depth > 2;

  const activeStyles = {
    root: {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.common.white
          : theme.palette.primary.main,
      backgroundColor: alpha(theme.palette.primary.main, 1),
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 1),
      },
    },
    sub: {
      color: theme.palette.text.primary,
      backgroundColor: 'transparent',
    },
  };

  return {
    // Root item
    padding: config.itemPadding,
    marginBottom: config.itemGap,
    borderRadius: config.itemRadius,
    minHeight: config.itemRootHeight,
    color: theme.palette.text.primary,

    // Active root item
    ...(active && {
      ...activeStyles.root,
    }),

    // Sub item
    ...(subItem && {
      minHeight: config.itemSubHeight,
      // Active sub item
      ...(active && {
        ...activeStyles.sub,
      }),
    }),

    // Deep sub item
    ...(deepSubItem && {
      paddingLeft: theme.spacing(depth),
    }),
  };
});

type StyledIconProps = {
  size?: number;
  active?: boolean;
};

export const StyledIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledIconProps>(({ size, active, theme }) => ({
  width: size,
  height: size,
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,

  ...(active && {
    color: theme.palette.common.white,
  }),
}));

type StyledDotIconProps = {
  active?: boolean;
};

export const StyledDotIcon = styled('span')<StyledDotIconProps>(
  ({ active, theme }) => ({
    width: 4,
    height: 4,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.disabled,
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    ...(active && {
      transform: 'scale(2)',
      backgroundColor: theme.palette.primary.main,
    }),
  })
);

type StyledSubheaderProps = {
  config: NavConfigProps;
};

export const StyledSubheader = styled(ListSubheader)<StyledSubheaderProps>(
  ({ config, theme }) => ({
    ...theme.typography.overline,
    fontSize: theme.typography.body2.fontSize,
    cursor: 'pointer',
    display: 'inline-flex',
    padding: config.itemPadding,
    paddingTop: theme.spacing(2),
    marginBottom: config.itemGap,
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    transition: theme.transitions.create(['color'], {
      duration: theme.transitions.duration.shortest,
    }),
    textTransform: 'capitalize',
  })
);
