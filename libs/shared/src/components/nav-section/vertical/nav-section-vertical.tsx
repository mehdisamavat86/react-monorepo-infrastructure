import { renderElement } from '@myapp/shared/utils/react';
import { Collapse, Divider, List, Stack } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import { navVerticalConfig } from '../config';
import type { NavConfigProps, NavListProps, NavSectionProps } from '../types';
import NavList from './nav-list';
import { StyledSubheader } from './styles';

function NavSectionVertical({
  data,
  config,
  sx,
  component,
  ...other
}: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {component
        ? renderElement(component as any)
        : data?.map((group, index) => (
            <Group
              {...group}
              key={group.subheader || index}
              config={navVerticalConfig(config)}
            />
          ))}
    </Stack>
  );
}

export default memo(NavSectionVertical);

type GroupProps = {
  subheader?: string;
  items: NavListProps[];
  config: NavConfigProps;
  divider?: boolean;
};

function Group({ subheader, items, config, divider }: GroupProps) {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  const renderContent = items.map((list) => (
    <NavList
      key={list.title + list.path}
      data={list}
      depth={1}
      hasChild={!!list.children}
      childCount={list.children?.length}
      config={config}
    />
  ));
  return (
    <>
      <List disablePadding sx={config.listSx || { px: 2 }}>
        {subheader ? (
          <>
            <StyledSubheader
              disableGutters
              disableSticky
              onClick={handleToggle}
              config={config}
            >
              {subheader}
            </StyledSubheader>

            <Collapse in={open}>{renderContent}</Collapse>
          </>
        ) : (
          renderContent
        )}
      </List>
      {divider && <Divider />}
    </>
  );
}
