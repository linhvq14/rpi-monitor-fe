'use client';

import { ActionIcon, Anchor, Box, Image, LoadingOverlay, Menu, rem } from '@mantine/core';
import { ReactNode, useEffect, useState } from 'react';
import {
  IMAGE_MIME_TYPE,
  MIME_TYPES,
  MS_EXCEL_MIME_TYPE,
  MS_POWERPOINT_MIME_TYPE,
  MS_WORD_MIME_TYPE,
  PDF_MIME_TYPE,
} from '@mantine/dropzone';
import { File as MediaFile } from '@grpc/@types/core/media/v1/resources/file';
import { MoreActionIcon, TrashIcon } from '../icons';
import fileFileIcon from './assets/file.svg';
import docFileIcon from './assets/doc.svg';
import mp3FileIcon from './assets/mp3.svg';
import pdfFileIcon from './assets/pdf.svg';
import pptFileIcon from './assets/ppt.svg';
import svgFileIcon from './assets/svg.svg';
import xlsxFileIcon from './assets/xlsx.svg';
import zipFileIcon from './assets/zip.svg';
import { getFileDetail } from '../../apis/media/file';

interface FileProps {
  name?: string;
  type?: string;
  actions?: { icon?: ReactNode; label: string; onClick?: () => void }[];
  fileId?: string;
  fileUrl?: string;
  onDelete?: (target: string) => void;
}

const getFileIcon = (type: any) => {
  if (MS_WORD_MIME_TYPE.includes(type)) return docFileIcon;

  if (PDF_MIME_TYPE.includes(type)) return pdfFileIcon;

  if (MS_EXCEL_MIME_TYPE.includes(type)) return xlsxFileIcon;

  if (MS_POWERPOINT_MIME_TYPE.includes(type)) return pptFileIcon;

  if (['video/mp3'].includes(type)) return mp3FileIcon;

  if ([MIME_TYPES.svg].includes(type)) return svgFileIcon;

  if ([MIME_TYPES.zip].includes(type)) return zipFileIcon;

  return fileFileIcon;
};

export const File = ({ fileUrl, fileId, name, type, onDelete, actions }: FileProps) => {
  const [file, setFile] = useState<MediaFile | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchFileDetail = async (id: string) => {
    setLoading(true);

    const fileInfo = await getFileDetail(id);

    if (fileInfo) {
      setFile(fileInfo.data);
    }

    setLoading(false);
  };

  const previewUrl = () => {
    if (fileId) {
      if (IMAGE_MIME_TYPE.includes(file?.type as any)) {
        return `${process.env.NEXT_PUBLIC_CDN_URL}/${file?.id}`;
      }

      return getFileIcon(file?.type || '')?.src;
    }

    if (fileUrl && IMAGE_MIME_TYPE.includes(type as any)) {
      return `${process.env.NEXT_PUBLIC_CDN_URL}/${fileUrl}`;
    }

    return getFileIcon(type)?.src;
  };

  useEffect(() => {
    if (fileId) {
      fetchFileDetail(fileId);
    }
  }, [fileId]);

  return (
    <Box
      display="flex"
      pos="relative"
      miw={rem('240px')}
      p={rem('6px')}
      style={{
        border: '1px solid var(--mantine-color-gray-scale-3)',
        alignItems: 'center',
        borderRadius: rem('4px'),
        background: '#fff',
      }}
    >
      <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />

      <Box
        w={rem('32px')}
        h={rem('32px')}
        display="flex"
        mr={rem('12px')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image src={previewUrl()} w={rem('22.15px')} h={rem('29.54px')} alt="default file icon" />
      </Box>

      <Box flex={1}>
        <Anchor
          target="_blank"
          href={fileId ? `${process.env.NEXT_PUBLIC_CDN_URL}/${fileId}` : fileUrl}
          lineClamp={1}
          fw={500}
          fz={rem('15px')}
          lh={rem('24px')}
          c="#000"
        >
          {fileId ? file?.name : name}
        </Anchor>
      </Box>

      {onDelete ? (
        <ActionIcon
          variant="transparent"
          w={rem('28px')}
          h={rem('28px')}
          onClick={() => onDelete(fileId || fileUrl || '')}
        >
          <TrashIcon fill="var(--mantine-color-error-5)" />
        </ActionIcon>
      ) : null}

      {actions && actions.length > 0 ? (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <ActionIcon variant="transparent" w={rem('28px')} h={rem('28px')}>
              <MoreActionIcon />
            </ActionIcon>
          </Menu.Target>

          <Menu.Dropdown>
            {actions.map((action) => (
              <Menu.Item leftSection={action.icon || null} onClick={action.onClick || undefined}>
                {action.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ) : null}
    </Box>
  );
};
