'use client';

import { rem } from '@mantine/core';

interface ExclamationmarkIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ExclamationmarkIcon = ({ size, style, ...others }: ExclamationmarkIconProps) => (
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
    <g clipPath="url(#clip0_2007_5863)">
      <path d="M12.0078 15.1758C12.4219 15.1758 12.7031 14.9024 12.7109 14.4805L12.7812 5.37894C12.7812 4.93362 12.4219 4.62894 12 4.62894C11.5781 4.62894 11.2188 4.93362 11.2188 5.37894L11.3047 14.4805C11.3125 14.9024 11.5938 15.1758 12.0078 15.1758ZM12 19.4805C12.6172 19.4805 13.1094 18.9805 13.1094 18.3712C13.1094 17.754 12.6172 17.2618 12 17.2618C11.3906 17.2618 10.8906 17.754 10.8906 18.3712C10.8906 18.9805 11.3906 19.4805 12 19.4805Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5863">
        <rect
          width="2.21875"
          height="14.9609"
          fill="white"
          transform="translate(10.8906 4.51956)"
        />
      </clipPath>
    </defs>
  </svg>
);
