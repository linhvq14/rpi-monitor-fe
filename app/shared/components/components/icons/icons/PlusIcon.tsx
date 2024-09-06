'use client';

import { rem } from '@mantine/core';

interface PlusIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PlusIcon = ({ size, style, ...others }: PlusIconProps) => (
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
    <g clipPath="url(#clip0_2007_5949)">
      <path d="M5.55469 11.9961C5.55469 12.3789 5.875 12.6914 6.25 12.6914H11.3047V17.7461C11.3047 18.1211 11.6172 18.4414 12 18.4414C12.3828 18.4414 12.7031 18.1211 12.7031 17.7461V12.6914H17.75C18.125 12.6914 18.4453 12.3789 18.4453 11.9961C18.4453 11.6133 18.125 11.293 17.75 11.293H12.7031V6.24609C12.7031 5.87109 12.3828 5.55078 12 5.55078C11.6172 5.55078 11.3047 5.87109 11.3047 6.24609V11.293H6.25C5.875 11.293 5.55469 11.6133 5.55469 11.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5949">
        <rect
          width="12.8906"
          height="12.8984"
          fill="white"
          transform="translate(5.55469 5.55078)"
        />
      </clipPath>
    </defs>
  </svg>
);
