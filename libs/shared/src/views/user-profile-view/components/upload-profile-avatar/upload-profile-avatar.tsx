import { mergeUserData, useAuthContext } from '@myapp/shared/auth';
import {
  CustomFile,
  CustomPopover,
  Icon,
  UploadAvatar,
  UploadAvatarRef,
  UploadProps,
  usePopover,
} from '@myapp/shared/components';
import { useBoolean, useNotify } from '@myapp/shared/hooks';
import { useTusUpload } from '@myapp/shared/store';
import { classnames, resize } from '@myapp/shared/utils';
import { MenuItem } from '@mui/material';
import { memo, useRef, useState } from 'react';
import { useUserEditMutationApi } from '../../hooks/use-user-edit-mutation-api';
import * as Styled from './styles';
import { UploadProfileAvatarProps as Props } from './types';

export const UploadProfileAvatar = memo(({ className }: Props) => {
  const popover = usePopover();
  const notify = useNotify();
  const deleting = useBoolean();
  const { user, setUser } = useAuthContext();
  const api = useUserEditMutationApi();
  const avatarRef = useRef<UploadAvatarRef>(null);
  const [url, setUrl] = useState(user?.attributes?.avatar);
  const [file, setFile] = useState<UploadProps['file']>(
    user?.attributes?.avatar
  );

  const { uploadFile, loading, percentage } = useTusUpload();
  const hasImg = !!url;

  const handleChange = () => {
    avatarRef.current?.open();
    popover.onClose();
  };

  const handleDelete = () => {
    popover.onClose();
    deleting.onTrue();
    api
      .mutateAsync(mergeUserData(user, {}, { attributes: { avatar: '' } }))
      .then((res) => {
        setUser(res);
        notify.success('successfully updated');
        setFile(undefined);
        setUrl('');
      })
      .finally(() => {
        deleting.onFalse();
      });
  };

  const handleUploadAndSetAvatar = (avatarFile: CustomFile) => {
    uploadFile(avatarFile).then((response) => {
      api
        .mutateAsync(
          mergeUserData(user, {}, { attributes: { avatar: response } })
        )
        .then((res) => {
          setUser(res);
          notify.success('successfully updated');
          setUrl(response);
        });
    });
  };

  const handleDrop = (acceptedFiles: File[]) => {
    const tmp = acceptedFiles[0];
    if (!tmp) return;
    resize(tmp).then((resized) => {
      const preview = URL.createObjectURL(resized);
      setUrl(preview);
      setFile(Object.assign(resized, { preview }));
      handleUploadAndSetAvatar(Object.assign(resized, { preview }));
    });
  };

  const uploader = (
    <Styled.UploadWrapper>
      <UploadAvatar
        loading={loading || deleting.value}
        percentage={Number(percentage)}
        onDrop={handleDrop}
        noClick={hasImg}
        file={file}
        ref={avatarRef}
        helperText={!url}
        disabled={loading}
      />
    </Styled.UploadWrapper>
  );

  return (
    <Styled.Wrapper className={classnames('UploadProfileAvatar', className)}>
      <Styled.Card>
        {hasImg ? (
          <CustomPopover
            state={popover}
            arrowPosition="top-left"
            sx={{ width: 170 }}
            element={uploader}
          >
            <MenuItem onClick={handleChange}>
              <Icon name="collections" /> Change photo
            </MenuItem>

            <MenuItem onClick={handleDelete}>
              <Icon name="delete" /> Delete photo
            </MenuItem>
          </CustomPopover>
        ) : (
          uploader
        )}
      </Styled.Card>
    </Styled.Wrapper>
  );
});

UploadProfileAvatar.displayName = 'UploadProfileAvatar';
