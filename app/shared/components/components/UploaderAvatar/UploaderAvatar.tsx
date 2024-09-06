import { CloseButton, Avatar, Input, rem, Box } from '@mantine/core';
import { Dropzone, FileRejection, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import { PhotoOnReactangleAngleIcon, TrashIcon } from '@shared/components/icons';
import { uploadFile } from '@shared/apis/media/file';
import { notifications } from '@mantine/notifications';

interface UploaderAvatarProps {
  accept?: string[];
  acceptExtensions?: string[];
  onDrop: (file: any) => void;
  onReject?: (file: any) => void;
  url?: string;
  label?: string;
  children?: React.ReactNode;
  other?: any;
  maxSize?: number;
}

export const UploaderAvatar = ({
  accept,
  maxSize,
  onDrop,
  onReject,
  url,
  label,
  children,
  other,
  acceptExtensions,
}: UploaderAvatarProps) => {
  const defaultMaxSize = maxSize || 10;
  const defaultAcceptExtensions = acceptExtensions || ['.jpg', '.jpeg', '.png'];
  const [loading, setLoading] = useState(false);

  const handleUpload = async (files: FileWithPath[] | null) => {
    setLoading(true);

    if (!files || files.length === 0) {
      onDrop({});
    } else {
      const response: any = await uploadFile(files[0]);

      onDrop(response);
    }

    setLoading(false);
  };

  const handleOnReject = (files: FileRejection[]) => {
    if (!files) return;

    files.forEach((file) => {
      if (file?.errors?.length) {
        if (file?.errors[0]?.code === 'file-too-large') {
          notifications.show({
            color: 'red',
            message: `Kích thước tệp quá giới hạn cho phép. Tối đa ${defaultMaxSize}MB`,
            autoClose: 3000,
          });
        } else if (file?.errors[0]?.code === 'file-invalid-type') {
          notifications.show({
            color: 'red',
            message: `Định dạng không hợp lệ. Cho phép ${defaultAcceptExtensions.join(', ')}`,
            autoClose: 3000,
          });
        }
      }

      onReject && onReject(file?.file);
    });
  };

  return (
    <Input.Wrapper label={label || 'Ảnh đại diện'} pos="relative">
      <Dropzone
        loading={loading}
        accept={accept || ['image/png', 'image/jpeg']}
        maxFiles={1}
        maxSize={defaultMaxSize * 1024 * 1024}
        multiple={false}
        onDrop={(files) => handleUpload(files)}
        onReject={(files) => handleOnReject(files)}
        h={rem('160px')}
        bg="gray-scale.1"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        {...other}
      >
        {children ||
          (url ? (
            <Avatar
              h="100%"
              w="100%"
              src={url ? `${process.env.NEXT_PUBLIC_CDN_URL}/${url}` : undefined}
              radius={rem('4px')}
              p={0}
            />
          ) : (
            <Box
              style={{
                width: 32,
                height: 32,
                backgroundColor: 'white',
                border: '1px solid var(--mantine-color-gray-scale-3)',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 12,
                right: 12,
                zIndex: 1,
              }}
            >
              <PhotoOnReactangleAngleIcon fill="var(--mantine-color-gray-scale-5)" />
            </Box>
          ))}
      </Dropzone>

      {url && (
        <CloseButton
          variant="transparent"
          pos="absolute"
          top={36}
          right={4}
          icon={<TrashIcon fill="var(--mantine-color-error-5)" />}
          onClick={() => handleUpload(null)}
        />
      )}
    </Input.Wrapper>
  );
};
