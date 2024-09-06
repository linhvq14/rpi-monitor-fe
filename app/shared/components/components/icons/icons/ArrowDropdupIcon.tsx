'use client';

import { rem } from '@mantine/core';

interface ArrowDropdupIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowDropdupIcon = ({ size, style, ...others }: ArrowDropdupIconProps) => (
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
    <g clipPath="url(#clip0_2007_5883)">
      <path d="M17 14.1264C17 14.3529 16.6417 14.4938 16.0949 14.4938L7.89881 14.4969C7.35198 14.4969 7 14.356 7 14.1294C7 14.007 7.11314 13.9059 7.23884 13.7773L11.1609 9.84285C11.4249 9.58257 11.6637 9.49992 11.9969 9.49992C12.33 9.49992 12.5751 9.58257 12.8391 9.84285L16.7549 13.7773C16.8869 13.9029 17 14.0039 17 14.1264Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5883">
        <rect width="10" height="5" fill="white" transform="matrix(1 0 0 -1 7 14.5)" />
      </clipPath>
    </defs>
  </svg>
);
