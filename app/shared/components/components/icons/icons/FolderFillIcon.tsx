'use client';

import { rem } from '@mantine/core';

interface FolderFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const FolderFillIcon = ({ size, style, ...others }: FolderFillIconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      width: rem(size),
      height: rem(size),
      ...style,
    }}
    {...others}
  >
    <g clipPath="url(#clip0_2007_5943)">
      <path d="M3.12891 16.6758C3.12891 18.293 3.94922 19.0977 5.58203 19.0977H18.6523C20.0508 19.0977 20.8711 18.2852 20.8711 16.6758V10.2695H3.12891V16.6758ZM3.12891 9.24609H20.8711V8.65234C20.8711 7.04297 20.043 6.23047 18.418 6.23047H10.918C10.3867 6.23047 10.0664 6.10547 9.67579 5.76953L9.19922 5.37891C8.6836 4.94141 8.28516 4.80078 7.51172 4.80078H5.28516C3.91797 4.80078 3.12891 5.58203 3.12891 7.15234V9.24609Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5943">
        <rect
          width="17.7422"
          height="14.3984"
          fill="white"
          transform="translate(3.12891 4.80078)"
        />
      </clipPath>
    </defs>
  </svg>
);
