import { CardBox, CardBoxProps } from '@myapp/shared/components';
import { classnames } from '@myapp/shared/utils';

export function DashboardLayoutContent({
  className,
  sx,
  contentSx,
  titleProps,
  ...props
}: CardBoxProps) {
  return (
    <CardBox
      className={classnames('DashboardLayoutContent', className)}
      {...props}
      sx={{
        ...sx,
        height: '100%',
        border: 'none',
        borderRadius: 0,
        borderTop: (p) =>
          `1px solid ${
            p.palette.mode === 'dark'
              ? p.palette.grey[900]
              : p.palette.primary[100]
          }`,
      }}
      titleProps={{ variant: 'h4', ...titleProps }}
      contentSx={{
        display: 'flex',
        flexDirection: 'column',
        ...contentSx,
      }}
    />
  );
}
