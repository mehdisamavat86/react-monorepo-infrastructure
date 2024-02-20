import { LoadingButton } from '@mui/lab';
import { DownloadableFileLink } from '@myapp/shared/definition';
import { classnames, toValidDownloadUrl } from '@myapp/shared/utils';
import { memo } from 'react';
import {
    PopoverListButton,
    PopoverListButtonItem,
} from '../popover-list-button';
import { DOWNLOAD_LINK_MENU_ITEMS } from './config';
import type { DownloadLinkButtonProps as Props } from './types';

export const DownloadLinkButton = memo(
  ({ className, link, title, titleProps, loading, handleDownload }: Props) => {
    const handleSelect = (value: PopoverListButtonItem) => {
      if (handleDownload)
        return handleDownload(value.key as keyof DownloadableFileLink);

      const url = link && toValidDownloadUrl((link as any)[value.key]);
      return window.open(url, '_blank');
    };

    return (
      <PopoverListButton
        className={classnames('DownloadLinkButton', className)}
        items={DOWNLOAD_LINK_MENU_ITEMS}
        icon="download"
        buttonElement={
          title ? (
            <LoadingButton loading={loading} {...titleProps}>
              {title}
            </LoadingButton>
          ) : undefined
        }
        onSelect={handleSelect}
      />
    );
  }
);

DownloadLinkButton.displayName = 'DownloadLinkButton';
