'use client';

import { rem } from '@mantine/core';

interface PauseFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PauseFillIcon = ({ size, style, ...others }: PauseFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5894)">
      <path d="M8.27343 18.3633H10.0547C10.7344 18.3633 11.0938 18.0039 11.0938 17.3164V6.67578C11.0938 5.96484 10.7344 5.63672 10.0547 5.63672H8.27343C7.59375 5.63672 7.23438 5.99609 7.23438 6.67578V17.3164C7.23438 18.0039 7.59375 18.3633 8.27343 18.3633ZM13.9531 18.3633H15.7266C16.4141 18.3633 16.7656 18.0039 16.7656 17.3164V6.67578C16.7656 5.96484 16.4141 5.63672 15.7266 5.63672H13.9531C13.2656 5.63672 12.9063 5.99609 12.9063 6.67578V17.3164C12.9063 18.0039 13.2656 18.3633 13.9531 18.3633Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5894">
        <rect
          width="9.53125"
          height="12.7266"
          fill="white"
          transform="translate(7.23438 5.63672)"
        />
      </clipPath>
    </defs>
  </svg>
);
