import { classnames } from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { } from {};
{pascalCase name}}FilterProps as Props } from './types';

export const {{pascalCase name}}Filter = memo(({ className, filters, setFilter }: Props) => {
  return (
    <Styled.Wrapper
      className={classnames('{{pascalCase name}}Filter ', className)}
      placeholder="{{pascalCase name}}"
      value={filters.{{camelCase name}} ?? ''}
      onChange={(e) => setFilter('{{camelCase name}}', e.currentTarget.value)}
    />
  );
});

{{pascalCase name}}Filter.displayName = '{{pascalCase name}}Filter';
