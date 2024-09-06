'use client';

import { rem } from '@mantine/core';

interface EqualIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const EqualIcon = ({ size, style, ...others }: EqualIconProps) => (
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
    <g clipPath="url(#clip0_2007_5936)">
      <path d="M6.07227 9.79785H17.9277C18.3965 9.79785 18.7969 9.39746 18.7969 8.91895C18.7969 8.44043 18.3965 8.0498 17.9277 8.0498H6.07227C5.60352 8.0498 5.20312 8.44043 5.20312 8.91895C5.20312 9.39746 5.60352 9.79785 6.07227 9.79785ZM6.07227 15.9697H17.9277C18.3965 15.9697 18.7969 15.5791 18.7969 15.1006C18.7969 14.6221 18.3965 14.2217 17.9277 14.2217H6.07227C5.60352 14.2217 5.20312 14.6221 5.20312 15.1006C5.20312 15.5791 5.60352 15.9697 6.07227 15.9697Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5936">
        <rect
          width="13.5938"
          height="7.93945"
          fill="white"
          transform="translate(5.20312 8.03027)"
        />
      </clipPath>
    </defs>
  </svg>
);
