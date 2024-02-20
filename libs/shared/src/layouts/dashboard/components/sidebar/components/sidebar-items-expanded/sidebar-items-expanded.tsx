import { classnames } from '@myapp/shared/utils';
import { Fragment, memo } from 'react';
import { SidebarMainItem } from './components/sidebar-main-item';
import { SidebarSubItem } from './components/sidebar-sub-item';
import * as Styled from './styles';
import * as SX from './sx';
import type { SidebarItemsExpandedProps as Props } from './types';

export const SidebarItemsExpanded = memo(({ className, options }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('SidebarItemsExpanded', className)}
      sx={SX.root}
    >
      {options?.items.map((item, index) => (
        <Fragment key={index.toString()}>
          <SidebarMainItem title={item.title} description={item.description} />
          {item.subItems?.map((sub) => (
            <SidebarSubItem
              key={sub.title}
              icon={sub.icon}
              title={sub.title}
              route={sub.route}
            />
          ))}
        </Fragment>
      ))}
    </Styled.Wrapper>
  );
});

SidebarItemsExpanded.displayName = 'SidebarItemsExpanded';
