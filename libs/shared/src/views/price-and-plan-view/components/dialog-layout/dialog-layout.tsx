import { Stack } from '@mui/material';
import { Icon, IconType } from '@myapp/shared/components';
import { DialogLayoutProps, DialogType } from './type';
import * as Styled from './styles';
import * as SX from './sx';

export default function DialogLayout({
  children,
  dialogType,
}: DialogLayoutProps) {
  let imageSrc: string = '';
  let icon: IconType = 'downgrade';

  switch (dialogType) {
    case DialogType.DOWNGRADE:
      imageSrc = '/assets/images/blue-circle.svg';
      icon = 'down';
      break;

    case DialogType.UPGRADE:
      imageSrc = '/assets/images/blue-circle.svg';
      icon = 'up';
      break;
    case DialogType.SUCCESS:
      imageSrc = '/assets/images/green-circle.svg';
      icon = 'tick';
      break;
    default:
      break;
  }

  return (
    <Styled.Wrapper>
      <Styled.DefaultHeader justifyContent="center" alignItems="center">
        <img src={imageSrc} alt="imghead" />
        <Stack justifyContent="center" direction="row" sx={SX.iconWrapper}>
          <Icon
            name={icon}
            color="green"
            size={20}
            sxx={SX.icon(dialogType === DialogType.SUCCESS)}
          />
        </Stack>
      </Styled.DefaultHeader>

      <Styled.Content>{children}</Styled.Content>
    </Styled.Wrapper>
  );
}
