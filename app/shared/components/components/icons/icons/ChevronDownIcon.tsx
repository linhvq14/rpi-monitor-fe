'use client';

import { rem } from '@mantine/core';

interface ChevronDownIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronDownIcon = ({ size, style, ...others }: ChevronDownIconProps) => (
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
    <g clipPath="url(#clip0_2007_5895)">
      <path d="M12.0039 16.1602C12.1992 16.1602 12.3945 16.082 12.5273 15.9336L18.5742 9.73828C18.707 9.60546 18.7851 9.43359 18.7851 9.23828C18.7851 8.83203 18.4804 8.51953 18.0742 8.51953C17.8789 8.51953 17.6992 8.59766 17.5664 8.72266L11.582 14.8398H12.418L6.43359 8.72266C6.30859 8.59766 6.12891 8.51953 5.92578 8.51953C5.51953 8.51953 5.21484 8.83203 5.21484 9.23828C5.21484 9.43359 5.29297 9.60546 5.42578 9.74609L11.4727 15.9336C11.6211 16.082 11.8008 16.1602 12.0039 16.1602Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5895">
        <rect
          width="13.5703"
          height="8.32031"
          fill="white"
          transform="translate(5.21484 7.83984)"
        />
      </clipPath>
    </defs>
  </svg>
);
