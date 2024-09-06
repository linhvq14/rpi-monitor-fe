'use client';

import { rem } from '@mantine/core';

interface MapFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MapFillIcon = ({ size, style, ...others }: MapFillIconProps) => (
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
    <g clipPath="url(#clip0_2030_6036)">
      <path
        d="M3.875 18.496C3.875 19.0664 4.20312 19.3945 4.76562 19.3945C4.96875 19.3945 5.16406 19.332 5.42188 19.1914L8.70312 17.4179V4.47266C8.5625 4.54297 8.40625 4.62109 8.26562 4.69922L4.5625 6.82422C4.09375 7.08203 3.875 7.45703 3.875 7.98046V18.496ZM9.77344 17.2695L13.7109 19.4804C13.8281 19.5429 13.9531 19.5976 14.0703 19.6289V6.8789L10.2109 4.51953C10.0781 4.43359 9.92188 4.37109 9.77344 4.33984V17.2695ZM15.1328 19.6054C15.2109 19.582 15.2969 19.5507 15.3672 19.5039L19.4375 17.1914C19.9062 16.9336 20.125 16.5586 20.125 16.0351V5.51172C20.125 4.93359 19.7969 4.61328 19.2344 4.61328C19.0312 4.61328 18.8359 4.67578 18.5781 4.81641L15.1328 6.73046V19.6054Z"
        fillOpacity="0.85"
      />
    </g>
    <defs>
      <clipPath id="clip0_2030_6036">
        <rect width="16.25" height="15.3203" fill="white" transform="translate(3.875 4.33984)" />
      </clipPath>
    </defs>
  </svg>
);
