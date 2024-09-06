'use client';

import { rem } from '@mantine/core';

interface ArrowRightIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowRightIcon = ({ size, style, ...others }: ArrowRightIconProps) => (
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
    <g clipPath="url(#clip0_2007_5878)">
      <path d="M19.2539 11.9961C19.2539 11.8008 19.1758 11.6211 19.0195 11.4727L13.8398 6.30859C13.668 6.13672 13.5039 6.07422 13.3164 6.07422C12.9336 6.07422 12.6367 6.35547 12.6367 6.74609C12.6367 6.93359 12.6992 7.11328 12.8242 7.23828L14.5742 9.01953L17.6758 11.8477L17.832 11.457L15.3164 11.3008H5.43359C5.02734 11.3008 4.74609 11.5898 4.74609 11.9961C4.74609 12.4023 5.02734 12.6914 5.43359 12.6914H15.3164L17.832 12.5352L17.6758 12.1523L14.5742 14.9727L12.8242 16.7539C12.6992 16.8711 12.6367 17.0586 12.6367 17.2461C12.6367 17.6367 12.9336 17.918 13.3164 17.918C13.5039 17.918 13.668 17.8476 13.8242 17.6992L19.0195 12.5195C19.1758 12.3711 19.2539 12.1914 19.2539 11.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5878">
        <rect
          width="14.5078"
          height="11.8516"
          fill="white"
          transform="translate(4.74609 6.07422)"
        />
      </clipPath>
    </defs>
  </svg>
);
