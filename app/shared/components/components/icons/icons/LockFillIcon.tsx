'use client';

import { rem } from '@mantine/core';

interface LockFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const LockFillIcon = ({ size, style, ...others }: LockFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5758)">
      <path d="M8.42578 19.457H15.5742C16.7227 19.457 17.3321 18.832 17.3321 17.5977V12.2148C17.3321 10.9805 16.7227 10.3633 15.5742 10.3633H8.42578C7.27734 10.3633 6.66797 10.9805 6.66797 12.2148V17.5977C6.66797 18.832 7.27734 19.457 8.42578 19.457ZM8.03516 10.9648H9.27735V8.32422C9.27735 6.35547 10.5352 5.3086 11.9961 5.3086C13.457 5.3086 14.7305 6.35547 14.7305 8.32422V10.9648H15.9648V8.4961C15.9648 5.5586 14.043 4.12891 11.9961 4.12891C9.95703 4.12891 8.03516 5.5586 8.03516 8.4961V10.9648Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5758">
        <rect
          width="10.6641"
          height="15.7422"
          fill="white"
          transform="translate(6.66797 4.12891)"
        />
      </clipPath>
    </defs>
  </svg>
);
