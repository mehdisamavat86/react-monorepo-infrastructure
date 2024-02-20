import { useActiveLink, usePathname } from '@myapp/shared/router';
import { Collapse } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import type { NavConfigProps, NavListProps } from '../types';
import NavItem from './nav-item';

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
  childCount: number;
  config: NavConfigProps;
};

export default function NavList({
  data,
  depth,
  hasChild,
  childCount,
  config,
}: NavListRootProps) {
  const pathname = usePathname();

  const active = useActiveLink(data.path, hasChild);

  const externalLink = data.path.includes('http');

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onClick={handleToggle}
        config={config}
      />

      {hasChild && !!childCount && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.children} depth={depth} config={config} />
        </Collapse>
      )}
    </>
  );
}

type NavListSubProps = {
  data: NavListProps[];
  depth: number;
  config: NavConfigProps;
};

function NavSubList({ data, depth, config }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
          childCount={list.children?.length}
          config={config}
        />
      ))}
    </>
  );
}
