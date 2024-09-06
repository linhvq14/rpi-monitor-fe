'use client';

import { rem } from '@mantine/core';

interface StarFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const StarFillIcon = ({ size, style, ...others }: StarFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5759)">
      <path d="M6.65383 19.5898C6.97414 19.8398 7.38039 19.7539 7.86476 19.4023L11.9976 16.3632L16.1383 19.4023C16.6226 19.7539 17.0211 19.8398 17.3492 19.5898C17.6695 19.3476 17.7398 18.9492 17.5445 18.3789L15.9117 13.5195L20.0836 10.5195C20.5679 10.1758 20.7633 9.8164 20.6383 9.42578C20.5133 9.05078 20.1461 8.86328 19.5445 8.87109L14.4273 8.90234L12.8726 4.01953C12.6851 3.44141 12.4038 3.15234 11.9976 3.15234C11.5991 3.15234 11.3179 3.44141 11.1304 4.01953L9.5757 8.90234L4.45851 8.87109C3.85695 8.86328 3.48976 9.05078 3.36476 9.42578C3.23195 9.8164 3.43508 10.1758 3.91945 10.5195L8.09133 13.5195L6.45851 18.3789C6.2632 18.9492 6.33351 19.3476 6.65383 19.5898Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5759">
        <rect
          width="17.3501"
          height="17.6953"
          fill="white"
          transform="translate(3.32495 3.15234)"
        />
      </clipPath>
    </defs>
  </svg>
);
