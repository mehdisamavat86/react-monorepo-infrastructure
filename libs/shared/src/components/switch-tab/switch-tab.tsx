import { usePathname } from '@myapp/shared/router';
import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import { Icon } from '../icon';
import * as Styled from './styles';
import type { SwitchTabProps as Props } from './types';

export const SwitchTab = memo(
  ({
    className,
    options,
    activeProps = { variant: 'outlined', color: 'primary' },
    inActiveProps = { variant: 'outlined', color: 'inherit' },
  }: Props) => {
    const pathname = usePathname();

    return (
      <Styled.Wrapper className={classnames('SwitchTab ', className)}>
        {options.map((opt) => {
          const isCurrent = opt.path.startsWith(pathname);

          return (
            <Styled.Button
              key={opt.key}
              className={classnames({ active: isCurrent })}
              to={opt.path}
              variant="text"
              color="inherit"
              {...(isCurrent ? activeProps : inActiveProps)}
            >
              {opt.icon && <Icon name={opt.icon} size={20} />}
              {opt.title}
            </Styled.Button>
          );
        })}
      </Styled.Wrapper>
    );
  }
);

SwitchTab.displayName = 'SwitchTab';
