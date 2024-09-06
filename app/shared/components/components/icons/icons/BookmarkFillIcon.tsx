'use client';

import { rem } from '@mantine/core';

interface BookmarkFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const BookmarkFillIcon = ({ size, style, ...others }: BookmarkFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5775)">
      <path d="M7.5625 20.3633C7.94532 20.3633 8.17188 20.1446 8.87499 19.4649L11.9297 16.4571C11.9688 16.418 12.0391 16.418 12.0703 16.4571L15.125 19.4649C15.8281 20.1446 16.0547 20.3633 16.4375 20.3633C16.961 20.3633 17.2656 20.0196 17.2656 19.4102V5.84766C17.2656 4.36328 16.5234 3.60547 15.0547 3.60547H8.94531C7.47656 3.60547 6.73438 4.36328 6.73438 5.84766V19.4102C6.73438 20.0196 7.03906 20.3633 7.5625 20.3633Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5775">
        <rect
          width="10.5312"
          height="16.7891"
          fill="white"
          transform="translate(6.73438 3.60547)"
        />
      </clipPath>
    </defs>
  </svg>
);
