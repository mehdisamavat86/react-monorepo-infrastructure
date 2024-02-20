import { Stack } from '@mui/material';
import { memo } from 'react';
import { navMiniConfig } from '../config';
import type { NavConfigProps, NavListProps, NavSectionProps } from '../types';
import NavList from './nav-list';

function NavSectionMini({ data, config, sx, ...other }: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {data?.map((group, index) => (
        <Group
          key={group.subheader || index}
          items={group.items}
          config={navMiniConfig(config)}
        />
      ))}
    </Stack>
  );
}

export default memo(NavSectionMini);

type GroupProps = {
  items: NavListProps[];
  config: NavConfigProps;
};

function Group({ items, config }: GroupProps) {
  return (
    <>
      {items.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={1}
          hasChild={!!list.children}
          config={config}
        />
      ))}
    </>
  );
}
