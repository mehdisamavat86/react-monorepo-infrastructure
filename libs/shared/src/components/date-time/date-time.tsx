import {
    DATE_FORMAT_MMM_DD_YYYY_HH_mm,
    classnames,
    fDate,
    fDateTime,
} from '@myapp/shared/utils';
import { memo } from 'react';
import * as Styled from './styles';
import type { DateTimeProps as Props } from './types';

export const DateTime = memo(
  ({ className, value, noTime, format, tooltipFormat, ...other }: Props) => {
    const dateFn = noTime || format ? fDate : fDateTime;
    const str = String(dateFn(value, format) || '');
    const tooltipStr = String(
      dateFn(value, tooltipFormat || DATE_FORMAT_MMM_DD_YYYY_HH_mm) || ''
    );

    return (
      <Styled.Wrapper
        className={classnames('DateTime', className)}
        tooltipValue={tooltipStr}
        {...other}
      >
        {tooltipStr}
      </Styled.Wrapper>
    );
  }
);

DateTime.displayName = 'DateTime';
