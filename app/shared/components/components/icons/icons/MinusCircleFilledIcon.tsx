'use client';

import { rem } from '@mantine/core';

interface MinusCircleFilledIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MinusCircleFilledIcon = ({ size, style, ...others }: MinusCircleFilledIconProps) => (
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
    <g clipPath="url(#clip0_2007_5948)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM8.85156 12.6836C8.39063 12.6836 8.07813 12.4414 8.07813 12.0117C8.07813 11.5742 8.375 11.3242 8.85156 11.3242H15.1641C15.6328 11.3242 15.9219 11.5742 15.9219 12.0117C15.9219 12.4414 15.6172 12.6836 15.1641 12.6836H8.85156Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5948">
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
