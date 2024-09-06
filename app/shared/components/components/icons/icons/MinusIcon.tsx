'use client';

import { rem } from '@mantine/core';

interface MinusIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MinusIcon = ({ size, style, ...others }: MinusIconProps) => (
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
    <g clipPath="url(#clip0_2007_2534)">
      <path d="M6.25 12.707H17.75C18.125 12.707 18.4453 12.3867 18.4453 12.0039C18.4453 11.6211 18.125 11.3086 17.75 11.3086H6.25C5.875 11.3086 5.55469 11.6211 5.55469 12.0039C5.55469 12.3867 5.875 12.707 6.25 12.707Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_2534">
        <rect width="12.8906" height="1.41406" fill="white" transform="translate(5.55469 11.293)" />
      </clipPath>
    </defs>
  </svg>
);
