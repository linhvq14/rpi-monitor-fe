'use client';

import { rem } from '@mantine/core';

interface ClockIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ClockIcon = ({ size, style, ...others }: ClockIconProps) => (
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
    <g clipPath="url(#clip0_2007_5899)">
      <path d="M7.91406 12.8398H11.9922C12.2969 12.8398 12.5391 12.6055 12.5391 12.293V7.02734C12.5391 6.72265 12.2969 6.48828 11.9922 6.48828C11.6875 6.48828 11.4531 6.72265 11.4531 7.02734V11.7539H7.91406C7.60156 11.7539 7.36719 11.9883 7.36719 12.293C7.36719 12.6055 7.60156 12.8398 7.91406 12.8398ZM12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 18.6367C8.3125 18.6367 5.36719 15.6835 5.36719 11.9961C5.36719 8.30859 8.30469 5.35546 11.9922 5.35546C15.6796 5.35546 18.6406 8.30859 18.6406 11.9961C18.6406 15.6835 15.6875 18.6367 12 18.6367Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5899">
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
