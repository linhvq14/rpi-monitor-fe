'use client';

import { rem } from '@mantine/core';

interface CreaditCardFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CreaditCardFillIcon = ({ size, style, ...others }: CreaditCardFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5950)">
      <path d="M6.01562 16.2539C5.55469 16.2539 5.25 15.9414 5.25 15.5039V14.0586C5.25 13.6133 5.55469 13.3086 6.01562 13.3086H7.92969C8.39062 13.3086 8.69531 13.6133 8.69531 14.0586V15.5039C8.69531 15.9414 8.39062 16.2539 7.92969 16.2539H6.01562ZM2.82031 10.2539V8.48047H21.1797V10.2539H2.82031ZM5.27343 18.6758H18.7265C20.3672 18.6758 21.1797 17.8711 21.1797 16.2617V7.75391C21.1797 6.14453 20.3672 5.33203 18.7265 5.33203H5.27343C3.64062 5.33203 2.82031 6.14453 2.82031 7.75391V16.2617C2.82031 17.8711 3.64062 18.6758 5.27343 18.6758Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5950">
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
