'use client';

import { rem } from '@mantine/core';

interface PieChartIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PieChartIcon = ({ size, style, ...others }: PieChartIconProps) => (
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
    <g clipPath="url(#clip0_2007_5815)">
      <path d="M16.7109 17.4101L17.5 16.6757L13.0469 12.2773L18.3906 9.20703L17.8672 8.30078L12.6094 11.3164V5.05078H11.5625V12.1055C11.5625 12.2773 11.6016 12.418 11.75 12.5586L16.7109 17.4101ZM12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 18.6367C8.3125 18.6367 5.36719 15.6835 5.36719 11.9961C5.36719 8.30859 8.30469 5.35546 11.9922 5.35546C15.6796 5.35546 18.6406 8.30859 18.6406 11.9961C18.6406 15.6835 15.6875 18.6367 12 18.6367Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5815">
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
