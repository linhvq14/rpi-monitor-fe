'use client';

import { rem } from '@mantine/core';

interface TableIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const TableIcon = ({ size, style, ...others }: TableIconProps) => (
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
    <g clipPath="url(#clip0_2007_5779)">
      <path d="M3.14844 10.4414H20.9375V9.18359H3.14844V10.4414ZM3.14844 14.8242H20.9375V13.5664H3.14844V14.8242ZM11.375 18.8398H12.6328V5.16797H11.375V18.8398ZM5.24218 19.1914H18.7579C20.3985 19.1914 21.211 18.3867 21.211 16.7774V7.23047C21.211 5.62109 20.3985 4.80859 18.7579 4.80859H5.24218C3.60937 4.80859 2.78906 5.62109 2.78906 7.23047V16.7774C2.78906 18.3867 3.60937 19.1914 5.24218 19.1914ZM5.25781 17.9336C4.47656 17.9336 4.04687 17.5195 4.04687 16.707V7.30078C4.04687 6.48828 4.47656 6.0664 5.25781 6.0664H18.7422C19.5157 6.0664 19.9532 6.48828 19.9532 7.30078V16.707C19.9532 17.5195 19.5157 17.9336 18.7422 17.9336H5.25781Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5779">
        <rect
          width="18.4219"
          height="14.3828"
          fill="white"
          transform="translate(2.78906 4.80859)"
        />
      </clipPath>
    </defs>
  </svg>
);
