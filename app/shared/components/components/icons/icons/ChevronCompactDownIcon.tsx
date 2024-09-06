'use client';

import { rem } from '@mantine/core';

interface ChevronCompactDownIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronCompactDownIcon = ({ size, style, ...others }: ChevronCompactDownIconProps) => (
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
    <g clipPath="url(#clip0_2007_5847)">
      <path d="M5.52734 11.3398L10.8633 13.4258C11.2227 13.5664 11.6523 13.7383 12.0039 13.7383C12.3477 13.7383 12.7852 13.5664 13.1445 13.4258L18.4727 11.3398C18.7696 11.2227 18.9649 10.957 18.9649 10.668C18.9649 10.207 18.629 9.86328 18.1758 9.86328C17.9414 9.86328 17.629 9.99609 17.4336 10.0664L11.4492 12.418H12.5508L6.56641 10.0664C6.3711 9.99609 6.06641 9.86328 5.82422 9.86328C5.37109 9.86328 5.03516 10.207 5.03516 10.668C5.03516 10.957 5.23047 11.2227 5.52734 11.3398Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5847">
        <rect
          width="13.9297"
          height="4.27344"
          fill="white"
          transform="translate(5.03516 9.86328)"
        />
      </clipPath>
    </defs>
  </svg>
);
