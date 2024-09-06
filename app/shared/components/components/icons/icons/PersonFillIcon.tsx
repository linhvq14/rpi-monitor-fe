'use client';

import { rem } from '@mantine/core';

interface PersonFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PersonFillIcon = ({ size, style, ...others }: PersonFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5843)">
      <path d="M6.76172 19.1524H17.2383C18.0742 19.1524 18.5742 18.7618 18.5742 18.1133C18.5742 16.0977 16.0508 13.3164 11.9961 13.3164C7.94922 13.3164 5.42578 16.0977 5.42578 18.1133C5.42578 18.7618 5.92578 19.1524 6.76172 19.1524ZM12.0039 11.918C13.6758 11.918 15.1289 10.418 15.1289 8.46485C15.1289 6.53516 13.6758 5.10547 12.0039 5.10547C10.332 5.10547 8.8789 6.56641 8.8789 8.48047C8.8789 10.418 10.3242 11.918 12.0039 11.918Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5843">
        <rect
          width="13.1484"
          height="14.3047"
          fill="white"
          transform="translate(5.42578 4.84766)"
        />
      </clipPath>
    </defs>
  </svg>
);
