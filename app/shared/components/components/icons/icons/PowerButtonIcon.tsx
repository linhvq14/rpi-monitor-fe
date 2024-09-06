'use client';

import { rem } from '@mantine/core';

interface PowerButtonIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PowerButtonIcon = ({ size, style, ...others }: PowerButtonIconProps) => (
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
    <g clipPath="url(#clip0_2007_5782)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 9.59766 18.875 7.51953 17.375 6.15234C16.6874 5.52734 15.8047 6.45703 16.4844 7.10547C17.8125 8.31641 18.6328 10.0508 18.6406 11.9961C18.6484 15.6836 15.6875 18.6367 12 18.6367C8.3125 18.6367 5.36719 15.6836 5.36719 11.9961C5.375 10.0352 6.19531 8.3086 7.51563 7.09766C8.20313 6.44141 7.3125 5.51953 6.625 6.14453C5.11719 7.51172 4.03125 9.59766 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 11.918C12.375 11.918 12.6328 11.6445 12.6328 11.2539V4.23828C12.6328 3.83984 12.375 3.57422 12 3.57422C11.625 3.57422 11.375 3.83984 11.375 4.23828V11.2539C11.375 11.6445 11.625 11.918 12 11.918Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5782">
        <rect
          width="15.9375"
          height="16.8516"
          fill="white"
          transform="translate(4.03125 3.57422)"
        />
      </clipPath>
    </defs>
  </svg>
);
