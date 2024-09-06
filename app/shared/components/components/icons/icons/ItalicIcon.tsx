'use client';

import { rem } from '@mantine/core';

interface ItalicIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ItalicIcon = ({ size, style, ...others }: ItalicIconProps) => (
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
    <g clipPath="url(#clip0_2007_5801)">
      <path d="M8.57812 17.5821H13.5156C13.8828 17.5821 14.1484 17.3555 14.1484 16.9883C14.1484 16.6368 13.8906 16.4102 13.5234 16.4102H11.7734L13.6719 7.58204H15.4219C15.7891 7.58204 16.0469 7.35547 16.0469 6.98828C16.0469 6.63672 15.7969 6.41016 15.4297 6.41016H10.4687C10.1016 6.41016 9.85157 6.63672 9.85157 6.98828C9.85157 7.35547 10.1094 7.58204 10.4766 7.58204H12.2266L10.3281 16.4102H8.57031C8.20312 16.4102 7.95312 16.6368 7.95312 16.9883C7.95312 17.3555 8.21094 17.5821 8.57812 17.5821Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5801">
        <rect
          width="8.09375"
          height="11.1797"
          fill="white"
          transform="translate(7.95312 6.41016)"
        />
      </clipPath>
    </defs>
  </svg>
);
