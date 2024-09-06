'use client';

import { rem } from '@mantine/core';

interface PlusCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PlusCircleFillIcon = ({ size, style, ...others }: PlusCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5812)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM8.1875 12.0039C8.1875 11.5977 8.46875 11.3164 8.875 11.3164H11.3203V8.87109C11.3203 8.46484 11.5938 8.17578 11.9922 8.17578C12.3984 8.17578 12.6797 8.46484 12.6797 8.87109V11.3164H15.1328C15.5312 11.3164 15.8203 11.5977 15.8203 12.0039C15.8203 12.4023 15.5312 12.668 15.1328 12.668H12.6797V15.1211C12.6797 15.5273 12.3984 15.8085 11.9922 15.8085C11.5938 15.8085 11.3203 15.5195 11.3203 15.1211V12.668H8.875C8.46875 12.668 8.1875 12.4023 8.1875 12.0039Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5812">
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
