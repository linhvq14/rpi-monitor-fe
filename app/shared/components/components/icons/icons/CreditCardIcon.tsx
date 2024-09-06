'use client';

import { rem } from '@mantine/core';

interface CreditCardIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CreditCardIcon = ({ size, style, ...others }: CreditCardIconProps) => (
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
    <g clipPath="url(#clip0_2007_5889)">
      <path d="M6.32812 15.9414H8.24219C8.70312 15.9414 9.00781 15.6289 9.00781 15.1914V13.7461C9.00781 13.3008 8.70312 12.9961 8.24219 12.9961H6.32812C5.86719 12.9961 5.5625 13.3008 5.5625 13.7461V15.1914C5.5625 15.6289 5.86719 15.9414 6.32812 15.9414ZM3.45312 10.2148H20.5547V8.44141H3.45312V10.2148ZM5.27343 18.6758H18.7265C20.3672 18.6758 21.1797 17.8711 21.1797 16.2617V7.75391C21.1797 6.14453 20.3672 5.33203 18.7265 5.33203H5.27343C3.64062 5.33203 2.82031 6.14453 2.82031 7.75391V16.2617C2.82031 17.8711 3.64062 18.6758 5.27343 18.6758ZM5.28906 17.418C4.50781 17.418 4.07812 17.0039 4.07812 16.1914V7.82422C4.07812 7.01172 4.50781 6.58984 5.28906 6.58984H18.7109C19.4765 6.58984 19.9219 7.01172 19.9219 7.82422V16.1914C19.9219 17.0039 19.4765 17.418 18.7109 17.418H5.28906Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5889">
        <rect
          width="18.3594"
          height="13.3516"
          fill="white"
          transform="translate(2.82031 5.32422)"
        />
      </clipPath>
    </defs>
  </svg>
);
