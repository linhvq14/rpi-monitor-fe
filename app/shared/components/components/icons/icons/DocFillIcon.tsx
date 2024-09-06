'use client';

import { rem } from '@mantine/core';

interface DocFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const DocFillIcon = ({ size, style, ...others }: DocFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5906)">
      <path d="M7.85157 20.3711H16.1485C17.7656 20.3711 18.5703 19.5508 18.5703 17.9258V10.832H12.9141C11.9141 10.832 11.4375 10.3555 11.4375 9.35547V3.62109H7.85157C6.24219 3.62109 5.42969 4.44922 5.42969 6.07421V17.9258C5.42969 19.5586 6.23438 20.3711 7.85157 20.3711ZM12.9375 9.76171H18.4766C18.4297 9.4414 18.2031 9.1289 17.8281 8.74609L13.5234 4.36328C13.1562 3.98828 12.8359 3.76172 12.5078 3.70703V9.33984C12.5078 9.62109 12.6484 9.76171 12.9375 9.76171Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5906">
        <rect
          width="13.1406"
          height="16.7578"
          fill="white"
          transform="translate(5.42969 3.62109)"
        />
      </clipPath>
    </defs>
  </svg>
);
