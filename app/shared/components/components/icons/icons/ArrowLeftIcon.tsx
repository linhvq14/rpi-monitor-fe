'use client';

import { rem } from '@mantine/core';

interface ArrowLeftIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowLeftIcon = ({ size, style, ...others }: ArrowLeftIconProps) => (
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
    <g clipPath="url(#clip0_2007_5881)">
      <path d="M4.74609 11.9961C4.74609 12.1914 4.83203 12.3711 4.98828 12.5195L10.1758 17.6992C10.332 17.8476 10.4961 17.918 10.6836 17.918C11.0664 17.918 11.3711 17.6367 11.3711 17.2461C11.3711 17.0586 11.3008 16.8711 11.1758 16.7539L9.42578 14.9727L6.33203 12.1523L6.16797 12.5352L8.68359 12.6914H18.5664C18.9727 12.6914 19.2539 12.4023 19.2539 11.9961C19.2539 11.5898 18.9727 11.3008 18.5664 11.3008H8.68359L6.16797 11.457L6.33203 11.8477L9.42578 9.01953L11.1758 7.23828C11.3008 7.11328 11.3711 6.93359 11.3711 6.74609C11.3711 6.35547 11.0664 6.07422 10.6836 6.07422C10.4961 6.07422 10.332 6.13672 10.1602 6.30859L4.98828 11.4727C4.83203 11.6211 4.74609 11.8008 4.74609 11.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5881">
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
