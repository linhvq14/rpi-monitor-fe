'use client';

import { rem } from '@mantine/core';

interface UnderlineIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const UnderlineIcon = ({ size, style, ...others }: UnderlineIconProps) => (
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
    <g clipPath="url(#clip0_2007_5912)">
      <path d="M11.9961 17.7852C14.8086 17.7852 16.5508 16.0976 16.5508 13.6445V6.9336C16.5508 6.4961 16.2617 6.20703 15.8164 6.20703C15.3789 6.20703 15.1055 6.4961 15.1055 6.9336V13.5274C15.1055 15.2695 13.957 16.457 11.9961 16.457C10.043 16.457 8.89453 15.2695 8.89453 13.5274V6.9336C8.89453 6.4961 8.60547 6.20703 8.16016 6.20703C7.72266 6.20703 7.44922 6.4961 7.44922 6.9336V13.6445C7.44922 16.0976 9.1836 17.7852 11.9961 17.7852ZM7.91016 20.1836H16.082C16.3398 20.1836 16.5508 19.9883 16.5508 19.7226C16.5508 19.457 16.3398 19.2539 16.082 19.2539H7.91016C7.66016 19.2539 7.44922 19.457 7.44922 19.7226C7.44922 19.9883 7.66016 20.1836 7.91016 20.1836Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5912">
        <rect
          width="9.10156"
          height="16.3672"
          fill="white"
          transform="translate(7.44922 3.81641)"
        />
      </clipPath>
    </defs>
  </svg>
);
