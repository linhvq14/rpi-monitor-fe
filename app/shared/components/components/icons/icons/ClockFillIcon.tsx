'use client';

import { rem } from '@mantine/core';

interface ClockFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ClockFillIcon = ({ size, style, ...others }: ClockFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5886)">
      <path d="M7.91406 12.8398C7.60156 12.8398 7.36719 12.6055 7.36719 12.293C7.36719 11.9883 7.60156 11.7539 7.91406 11.7539H11.4531V7.02734C11.4531 6.72265 11.6875 6.48828 11.9922 6.48828C12.2969 6.48828 12.5391 6.72265 12.5391 7.02734V12.293C12.5391 12.6055 12.2969 12.8398 11.9922 12.8398H7.91406ZM12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5886">
        <rect
          width="15.9375"
          height="15.9453"
          fill="white"
          transform="translate(4.03125 4.02734)"
        />
      </clipPath>
    </defs>
  </svg>
);
