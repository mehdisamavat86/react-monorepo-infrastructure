import { CopyToClipboardProps } from '../copy-to-clipboard';

export interface ShortIdProps {
  className?: string;
  value: string;
  showCopy?: boolean;
  copyProps?: Pick<CopyToClipboardProps, 'icon' | 'iconSize'>;
}
