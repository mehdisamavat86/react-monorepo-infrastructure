import { SerializedStyles } from '@emotion/react';
import { Theme } from '@mui/material/styles';

// TODO add this to theme itself as a mixin
export function dirCss(
  props: { theme: Theme },
  ltrStyle: SerializedStyles,
  styleRtl: SerializedStyles
) {
  return props.theme.direction === 'ltr' ? ltrStyle : styleRtl;
}
