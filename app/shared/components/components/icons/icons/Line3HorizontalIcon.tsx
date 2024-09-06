'use client';

import { rem } from '@mantine/core';

interface Line3HorizontalIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const Line3HorizontalIcon = ({ size, style, ...others }: Line3HorizontalIconProps) => (
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
    <g clipPath="url(#clip0_2007_5859)">
      <path d="M4.58594 16.0234H19.2109C19.5391 16.0234 19.8047 15.7578 19.8047 15.4219C19.8047 15.0938 19.5391 14.8359 19.2109 14.8359H4.58594C4.25781 14.8359 4 15.0938 4 15.4219C4 15.7578 4.25781 16.0234 4.58594 16.0234ZM4.58594 12.6094H19.2109C19.5391 12.6094 19.8047 12.3516 19.8047 12.0234C19.8047 11.6875 19.5391 11.4219 19.2109 11.4219H4.58594C4.25781 11.4219 4 11.6875 4 12.0234C4 12.3516 4.25781 12.6094 4.58594 12.6094ZM4.58594 9.20312H19.2109C19.5391 9.20312 19.8047 8.94531 19.8047 8.61719C19.8047 8.28906 19.5391 8.02344 19.2109 8.02344H4.58594C4.25781 8.02344 4 8.28906 4 8.61719C4 8.94531 4.25781 9.20312 4.58594 9.20312Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5859">
        <rect width="15.8047" height="8.02344" fill="white" transform="translate(4 8)" />
      </clipPath>
    </defs>
  </svg>
);
