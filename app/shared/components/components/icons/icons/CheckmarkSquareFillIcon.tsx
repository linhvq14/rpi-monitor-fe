'use client';

import { rem } from '@mantine/core';

interface CheckmarkSquareFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CheckmarkSquareFillIcon = ({
  size,
  style,
  ...others
}: CheckmarkSquareFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5905)">
      <path d="M7.26171 19.1992H16.7383C18.3789 19.1992 19.1914 18.3867 19.1914 16.7774V7.23828C19.1914 5.62891 18.3789 4.81641 16.7383 4.81641H7.26171C5.62891 4.81641 4.80859 5.62109 4.80859 7.23828V16.7774C4.80859 18.3946 5.62891 19.1992 7.26171 19.1992ZM11.1289 15.8164C10.8633 15.8164 10.6445 15.707 10.4414 15.4336L8.48047 13.0273C8.36328 12.8711 8.29297 12.6992 8.29297 12.5195C8.29297 12.168 8.5664 11.8789 8.92578 11.8789C9.14453 11.8789 9.3164 11.9492 9.51171 12.207L11.0977 14.2539L14.4336 8.89453C14.582 8.66016 14.7852 8.53516 14.9961 8.53516C15.332 8.53516 15.6524 8.76953 15.6524 9.13672C15.6524 9.30859 15.5586 9.48828 15.457 9.65234L11.7852 15.4336C11.6211 15.6914 11.3945 15.8164 11.1289 15.8164Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5905">
        <rect
          width="14.3828"
          height="14.3984"
          fill="white"
          transform="translate(4.80859 4.80078)"
        />
      </clipPath>
    </defs>
  </svg>
);
