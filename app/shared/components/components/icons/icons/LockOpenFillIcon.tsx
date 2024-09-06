'use client';

import { rem } from '@mantine/core';

interface LockOpenFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const LockOpenFillIcon = ({ size, style, ...others }: LockOpenFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5874)">
      <path d="M8.42785 19.3125H15.5763C16.7247 19.3125 17.3341 18.6875 17.3341 17.4531V12.0703C17.3341 10.8437 16.7247 10.2188 15.5763 10.2188H8.42785C7.27942 10.2188 6.67004 10.8437 6.67004 12.0703V17.4531C6.67004 18.6875 7.27942 19.3125 8.42785 19.3125ZM14.8185 10.8281H16.0529V8.19531C16.0529 6.21875 17.3184 5.17969 18.7794 5.17969C20.2403 5.17969 21.5059 6.21875 21.5059 8.19531V9.92969C21.5059 10.3906 21.7794 10.625 22.1309 10.625C22.4669 10.625 22.7481 10.4141 22.7481 9.92969V8.35938C22.7481 5.42188 20.8184 4 18.7794 4C16.7325 4 14.8185 5.42188 14.8185 8.35938V10.8281Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5874">
        <rect width="16.0781" height="15.7109" fill="white" transform="translate(6.67004 4)" />
      </clipPath>
    </defs>
  </svg>
);
