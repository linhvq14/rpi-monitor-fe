'use client';

import { rem } from '@mantine/core';

interface ArrowDropdownIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowDropdownIcon = ({ size, style, ...others }: ArrowDropdownIconProps) => (
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
    <g clipPath="url(#clip0_2007_5934)">
      <path d="M17 9.87363C17 9.64705 16.6417 9.50621 16.0949 9.50621L7.89881 9.50314C7.35198 9.50314 7 9.64399 7 9.87057C7 9.99304 7.11314 10.0941 7.23884 10.2227L11.1609 14.1572C11.4249 14.4174 11.6637 14.5001 11.9969 14.5001C12.33 14.5001 12.5751 14.4174 12.8391 14.1572L16.7549 10.2227C16.8869 10.0971 17 9.9961 17 9.87363Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5934">
        <rect width="10" height="5" fill="white" transform="translate(7 9.5)" />
      </clipPath>
    </defs>
  </svg>
);
