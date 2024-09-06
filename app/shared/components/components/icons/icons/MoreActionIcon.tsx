'use client';

import { rem } from '@mantine/core';

interface MoreActionIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MoreActionIcon = ({ size, style, ...others }: MoreActionIconProps) => (
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
    <g clipPath="url(#clip0_2007_5893)">
      <path d="M6.5625 13.1328C7.44531 13.1328 8.14844 12.4375 8.14844 11.5703C8.14844 10.7031 7.44531 10.0078 6.5625 10.0078C5.70312 10.0078 5 10.7031 5 11.5703C5 12.4375 5.70312 13.1328 6.5625 13.1328ZM12.3672 13.1328C13.2344 13.1328 13.9297 12.4375 13.9297 11.5703C13.9297 10.7031 13.2344 10.0078 12.3672 10.0078C11.5078 10.0078 10.8125 10.7031 10.8125 11.5703C10.8125 12.4375 11.5078 13.1328 12.3672 13.1328ZM18.1719 13.1328C19.0391 13.1328 19.7344 12.4375 19.7344 11.5703C19.7344 10.7031 19.0391 10.0078 18.1719 10.0078C17.2891 10.0078 16.5938 10.7031 16.5938 11.5703C16.5938 12.4375 17.2891 13.1328 18.1719 13.1328Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5893">
        <rect width="14.7344" height="3.13281" fill="white" transform="translate(5 10)" />
      </clipPath>
    </defs>
  </svg>
);
