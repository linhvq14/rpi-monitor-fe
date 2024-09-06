'use client';

import { rem } from '@mantine/core';

interface XmarkIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const XmarkIcon = ({ size, style, ...others }: XmarkIconProps) => (
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
    <g clipPath="url(#clip0_2007_5932)">
      <path d="M6.20216 18.1943C6.4756 18.46 6.92872 18.46 7.19435 18.1943L12.1943 13.1943L17.1943 18.1943C17.46 18.46 17.9209 18.4678 18.1865 18.1943C18.4522 17.9209 18.4522 17.4756 18.1865 17.21L13.1865 12.2022L18.1865 7.20216C18.4522 6.93653 18.46 6.48341 18.1865 6.21778C17.9131 5.94435 17.46 5.94435 17.1943 6.21778L12.1943 11.2178L7.19435 6.21778C6.92872 5.94435 6.46778 5.93653 6.20216 6.21778C5.93653 6.49122 5.93653 6.93653 6.20216 7.20216L11.2022 12.2022L6.20216 17.21C5.93653 17.4756 5.92872 17.9287 6.20216 18.1943Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5932">
        <rect width="12.3887" height="12.3965" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);
