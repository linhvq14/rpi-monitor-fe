'use client';

import { rem } from '@mantine/core';

interface PlayFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PlayFillIcon = ({ size, style, ...others }: PlayFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5929)">
      <path d="M7.03125 18.6211C7.34375 18.6211 7.60937 18.4961 7.92187 18.3164L17.0312 13.0508C17.6797 12.668 17.9062 12.418 17.9062 12.0039C17.9062 11.5898 17.6797 11.3398 17.0312 10.9648L7.92187 5.69141C7.60937 5.51172 7.34375 5.39453 7.03125 5.39453C6.45312 5.39453 6.09375 5.83203 6.09375 6.51172V17.4961C6.09375 18.1758 6.45312 18.6211 7.03125 18.6211Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5929">
        <rect
          width="11.8125"
          height="13.2422"
          fill="white"
          transform="translate(6.09375 5.37891)"
        />
      </clipPath>
    </defs>
  </svg>
);
