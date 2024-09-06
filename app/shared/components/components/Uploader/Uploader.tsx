import { Anchor, Flex, Input, Paper, rem, Text, UnstyledButton } from '@mantine/core';
import { Dropzone, FileRejection, FileWithPath } from '@mantine/dropzone';
import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchListFiles, uploadFile } from '@shared/apis/media/file';
import { notifications } from '@mantine/notifications';
import { DocFillIcon, TrashIcon } from '../icons';

interface UploaderProps {
  accept?: string[];
  onDrop: (file: any) => void;
  onReject?: (file: any) => void;
  onDeleteFile?: (file: any) => void;
  label?: string;
  children?: React.ReactNode;
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  values?: any[string];
  inputProps?: any;
  acceptExtensions?: string[];
  other?: any;
}

export const Uploader = ({
  accept,
  onDrop,
  onReject,
  onDeleteFile,
  label,
  children,
  maxFiles,
  maxSize,
  multiple,
  values,
  inputProps,
  acceptExtensions,
  other,
}: UploaderProps) => {
  const defaultMaxSize = maxSize || 10;
  const defaultAcceptExtensions = acceptExtensions || ['.pdf'];
  const [loading, setLoading] = useState(false);

  const filesQuery = useQuery({
    queryKey: [
      'media:files',
      {
        values,
      },
    ],
    queryFn: async () => {
      const response = await fetchListFiles({
        pageSize: values?.length,
        fields: {
          ids: values,
        },
      });

      return response?.data;
    },
    placeholderData: keepPreviousData,
    enabled: values?.length > 0,
  });

  const handleUpload = async (files: FileWithPath[] | null) => {
    if (!files) return;

    setLoading(true);

    const uploadPromises = files.map((file) => uploadFile(file));

    try {
      const responses = await Promise.all(uploadPromises);
      responses.forEach((response) => onDrop(response));
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
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
    <>
      <Input.Wrapper label={label || ''} pos="relative" {...inputProps}>
        <Dropzone
          loading={loading}
          accept={accept || ['image/png', 'image/jpeg']}
          maxFiles={maxFiles || 1}
          multiple={multiple || false}
          maxSize={defaultMaxSize * 1024 * 1024}
          onDrop={(files) => handleUpload(files)}
          onReject={(files) => handleOnReject(files)}
          h={rem('88px')}
          p={rem('4px')}
          bg="gray-scale.1"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
          mb={inputProps?.error ? rem('8px') : 0}
          {...other}
        >
          {children || (
            <>
              <Text ta="center" fz={rem('13px')} fw={500} c="gray-scale.10">
                Kéo thả hoặc chọn file
              </Text>
              <Text ta="center" fz={rem('13px')} c="gray-scale.10" mt={rem('4px')}>
                Nhận định dạng{' '}
                {acceptExtensions?.length
                  ? acceptExtensions.join(', ')
                  : accept?.length
                    ? accept.join(', ')
                    : 'pdf'}{' '}
                với kích thước tối đa {defaultMaxSize}MB.
              </Text>
            </>
          )}
        </Dropzone>
      </Input.Wrapper>

      {values?.length > 0 &&
        (filesQuery?.data as any)?.files !== undefined &&
        (filesQuery?.data as any)?.files?.length > 0 &&
        (filesQuery?.data as any)?.files?.map((element: any) => (
          <Paper
            key={element?.id}
            withBorder
            mt={rem('8px')}
            p={rem('5px')}
            style={{ borderRadius: rem('4px') }}
          >
            <Flex align="center" justify="space-between" w="100%">
              <Anchor
                href={`${process.env.NEXT_PUBLIC_CDN_URL}/${element?.id}`}
                target="_blank"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <DocFillIcon
                  fill="var(--mantine-color-brand-4)"
                  style={{ width: rem('32px'), height: rem('32px'), minWidth: rem('32px') }}
                />
                <Text
                  fz={rem('15px')}
                  fw={500}
                  c="gray-scale.10"
                  ml={rem('8px')}
                  lineClamp={1}
                  style={{ wordBreak: 'break-word' }}
                >
                  {element?.name}
                </Text>
              </Anchor>

              <UnstyledButton
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={() => onDeleteFile?.(element)}
              >
                <TrashIcon fill="var(--mantine-color-error-5)" />
              </UnstyledButton>
            </Flex>
          </Paper>
        ))}
    </>
  );
};
