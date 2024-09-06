'use client';

import { rem } from '@mantine/core';

interface BoldIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const BoldIcon = ({ size, style, ...others }: BoldIconProps) => (
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
    <g clipPath="url(#clip0_2007_5804)">
      <path d="M8.67578 17.5821H12.7461C15.1367 17.5821 16.6445 16.3242 16.6445 14.3945C16.6445 12.8711 15.543 11.7695 13.957 11.6836V11.6211C15.2539 11.4414 16.1367 10.4648 16.1367 9.22266C16.1367 7.48047 14.8008 6.41016 12.6367 6.41016H8.67578C7.83984 6.41016 7.35547 6.90234 7.35547 7.76172V16.2383C7.35547 17.0899 7.83984 17.5821 8.67578 17.5821ZM9.93359 15.7773V12.6758H11.8945C13.2617 12.6758 14.0273 13.207 14.0273 14.207C14.0273 15.2305 13.293 15.7773 11.9492 15.7773H9.93359ZM9.93359 11.0508V8.2461H11.8555C12.9492 8.2461 13.5977 8.7461 13.5977 9.60547C13.5977 10.5117 12.8789 11.0508 11.6602 11.0508H9.93359Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5804">
        <rect
          width="9.28906"
          height="11.1797"
          fill="white"
          transform="translate(7.35547 6.41016)"
        />
      </clipPath>
    </defs>
  </svg>
);
