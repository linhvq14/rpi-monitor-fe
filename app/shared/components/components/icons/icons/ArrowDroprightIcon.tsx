'use client';

import { rem } from '@mantine/core';

interface ArrowDroprightIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowDroprightIcon = ({ size, style, ...others }: ArrowDroprightIconProps) => (
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
    <g clipPath="url(#clip0_2007_5898)">
      <path d="M9.87366 7C9.64708 7 9.50624 7.35825 9.50624 7.90509L9.50317 16.1012C9.50317 16.648 9.64402 17 9.8706 17C9.99307 17 10.0941 16.8869 10.2227 16.7612L14.1572 12.8391C14.4175 12.5751 14.5001 12.3363 14.5001 12.0031C14.5001 11.67 14.4175 11.4249 14.1572 11.1609L10.2227 7.24514C10.0972 7.11312 9.99613 7 9.87366 7Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5898">
        <rect width="10" height="5" fill="white" transform="translate(9.5 17) rotate(-90)" />
      </clipPath>
    </defs>
  </svg>
);
