'use client';

import { rem } from '@mantine/core';

interface ChevronRightIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronRightIcon = ({ size, style, ...others }: ChevronRightIconProps) => (
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
    <g clipPath="url(#clip0_2007_5944)">
      <path d="M15.8203 11.9961C15.8203 11.8008 15.7422 11.6211 15.5937 11.4805L9.40625 5.41797C9.26563 5.28516 9.09375 5.21484 8.89063 5.21484C8.49219 5.21484 8.17969 5.51953 8.17969 5.92578C8.17969 6.12109 8.25781 6.30078 8.38281 6.43359L14.0703 11.9961L8.38281 17.5586C8.25781 17.6914 8.17969 17.8632 8.17969 18.0664C8.17969 18.4726 8.49219 18.7773 8.89063 18.7773C9.09375 18.7773 9.26563 18.707 9.40625 18.5664L15.5937 12.5117C15.7422 12.3633 15.8203 12.1914 15.8203 11.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5944">
        <rect
          width="7.64062"
          height="13.5703"
          fill="white"
          transform="translate(8.17969 5.21484)"
        />
      </clipPath>
    </defs>
  </svg>
);
