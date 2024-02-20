import { classnames } from '@myapp/shared/utils';
import { Icon as BaseIcon } from '@iconify/react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { createElement, forwardRef } from 'react';
import { icons } from './config';
import * as Styled from './styles';
import type { IconProps as Props } from './types';

export const Icon = forwardRef<SVGElement, Props>(
  ({ className, name, size = '1.5em', color, sxx: sx, rel, ...other }, ref) => {
    const theme = useTheme();

    if (color === undefined) color = (sx as any)?.color;
    if (typeof color === 'string')
      color = (theme.palette as any)[color]?.main ?? color;
    if (typeof color === 'function') color = color(theme);

    className = classnames('Icon', className);

    if (typeof name === 'function')
      return createElement(name, { sx, size, color, ...other, className, ref });

    if (typeof name === 'object' && 'src' in name)
      return (
        <Styled.Image alt="icon" {...name} sx={{ ...sx, ...name.sx } as any} />
      );

    if (typeof name === 'object' && 'props' in name) return name;

    return (
      <Box
        className={className}
        ref={ref}
        component={BaseIcon}
        icon={icons[name] ?? name}
        sx={{ width: size, height: size, color, ...sx }}
        {...other}
      />
    );
  }
);

Icon.displayName = 'Icon';
