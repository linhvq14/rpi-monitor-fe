'use client';

import { rem } from '@mantine/core';

interface ChevronCompactUpIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronCompactUpIcon = ({ size, style, ...others }: ChevronCompactUpIconProps) => (
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
    <g clipPath="url(#clip0_2007_5888)">
      <path d="M5.52734 12.418C5.23047 12.5352 5.03516 12.8008 5.03516 13.082C5.03516 13.543 5.37109 13.8945 5.82422 13.8945C6.06641 13.8945 6.3711 13.7617 6.56641 13.6836L12.5508 11.3398H11.4492L17.4336 13.6836C17.629 13.7617 17.9414 13.8945 18.1758 13.8945C18.629 13.8945 18.9649 13.543 18.9649 13.082C18.9649 12.8008 18.7696 12.5352 18.4727 12.418L13.1445 10.332C12.7852 10.1914 12.3477 10.0195 12.0039 10.0195C11.6523 10.0195 11.2227 10.1914 10.8633 10.332L5.52734 12.418Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5888">
        <rect
          width="13.9297"
          height="3.96094"
          fill="white"
          transform="translate(5.03516 10.0195)"
        />
      </clipPath>
    </defs>
  </svg>
);
