'use client';

import { rem } from '@mantine/core';

interface ChevronLeftIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronLeftIcon = ({ size, style, ...others }: ChevronLeftIconProps) => (
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
    <g clipPath="url(#clip0_2007_5879)">
      <path d="M8.17969 11.9961C8.17969 12.1914 8.25 12.3633 8.39844 12.5117L14.5937 18.5664C14.7266 18.707 14.8984 18.7773 15.1016 18.7773C15.5078 18.7773 15.8203 18.4726 15.8203 18.0664C15.8203 17.8632 15.7344 17.6914 15.6094 17.5586L9.92188 11.9961L15.6094 6.43359C15.7344 6.30078 15.8203 6.12109 15.8203 5.92578C15.8203 5.51953 15.5078 5.21484 15.1016 5.21484C14.8984 5.21484 14.7266 5.28516 14.5937 5.41797L8.39844 11.4805C8.25 11.6211 8.17969 11.8008 8.17969 11.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5879">
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
