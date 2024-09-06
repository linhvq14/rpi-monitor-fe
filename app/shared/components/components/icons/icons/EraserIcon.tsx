'use client';

import { rem } from '@mantine/core';

interface EraserIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const EraserIcon = ({ size, style, ...others }: EraserIconProps) => (
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
    <g clipPath="url(#clip0_2007_5796)">
      <path d="M5.11361 15.8008L8.13704 18.8164C9.31673 19.9883 10.637 20.0352 11.7464 18.9258L19.2776 11.3867C19.9729 10.6992 19.9651 9.70705 19.2542 8.99612L14.9339 4.68362C14.2229 3.97268 13.2386 3.95706 12.5433 4.65237L5.01204 12.1836C3.90267 13.3008 3.94173 14.6211 5.11361 15.8008ZM6.00423 14.9102C5.40267 14.3008 5.37142 13.6055 5.94173 13.0274L13.3792 5.58987C13.5824 5.38674 13.8636 5.38674 14.0589 5.58205L18.3558 9.87893C18.5511 10.0742 18.5433 10.3477 18.3479 10.543L10.9027 17.9883C10.3324 18.5664 9.63704 18.5352 9.02767 17.9258L6.00423 14.9102ZM6.25423 11.8008L12.1292 17.6836L12.9105 16.9024L7.0511 11.043L6.25423 11.8008Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5796">
        <rect width="15.5868" height="15.719" fill="white" transform="translate(4.20654 4.1405)" />
      </clipPath>
    </defs>
  </svg>
);
