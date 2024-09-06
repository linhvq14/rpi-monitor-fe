'use client';

import { rem } from '@mantine/core';

interface MinusCircleIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MinusCircleIcon = ({ size, style, ...others }: MinusCircleIconProps) => (
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
    <g clipPath="url(#clip0_2007_5837)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 18.6367C8.3125 18.6367 5.36719 15.6835 5.36719 11.9961C5.36719 8.30859 8.30469 5.35546 11.9922 5.35546C15.6796 5.35546 18.6406 8.30859 18.6406 11.9961C18.6406 15.6835 15.6875 18.6367 12 18.6367ZM8.92969 12.6602H15.0625C15.5001 12.6602 15.7969 12.4258 15.7969 12.0117C15.7969 11.5898 15.5157 11.3477 15.0625 11.3477H8.92969C8.47656 11.3477 8.1875 11.5898 8.1875 12.0117C8.1875 12.4258 8.49219 12.6602 8.92969 12.6602Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5837">
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
