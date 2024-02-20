import { useActiveLink, usePathname } from '@myapp/shared/router';
import { Popover, Stack, appBarClasses } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { NavConfigProps, NavListProps } from '../types';
import NavItem from './nav-item';

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChild: boolean;
  config: NavConfigProps;
};

export default function NavList({
  data,
  depth,
  hasChild,
  config,
}: NavListRootProps) {
  const navRef = useRef(null);

  const pathname = usePathname();

  const active = useActiveLink(data.path, hasChild);

  const externalLink = data.path.includes('http');

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const appBarEl = Array.from(
      document.querySelectorAll(`.${appBarClasses.root}`)
    ) as Array<HTMLElement>;

    // Reset styles when hover
    const styles = () => {
      document.body.style.overflow = '';
      document.body.style.padding = '';
      // Apply for Window
      appBarEl.forEach((elem) => {
        elem.style.padding = '';
      });
    };

    if (open) {
      styles();
    } else {
      styles();
    }
  }, [open]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <NavItem
        ref={navRef}
        item={data}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        config={config}
      />

      {hasChild && (
        <Popover
          open={open}
          anchorEl={navRef.current}
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          slotProps={{
            paper: {
              onMouseEnter: handleOpen,
              onMouseLeave: handleClose,
              sx: {
                mt: 0.5,
                width: 160,
                ...(open && {
                  pointerEvents: 'auto',
                }),
              },
            },
          }}
          sx={{
            pointerEvents: 'none',
          }}
        >
          <NavSubList data={data.children} depth={depth} config={config} />
        </Popover>
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
    <Stack spacing={0.5}>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChild={!!list.children}
          config={config}
        />
      ))}
    </Stack>
  );
}
