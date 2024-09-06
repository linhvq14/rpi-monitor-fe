'use client';

import { rem } from '@mantine/core';

interface MusicNoteIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const MusicNoteIcon = ({ size, style, ...others }: MusicNoteIconProps) => (
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
    <g clipPath="url(#clip0_2007_6924)">
      <path d="M16.7656 7.88672V4.94923C16.7656 4.53516 16.4297 4.26954 16.0313 4.34766L12.0156 5.22266C11.5156 5.33204 11.2422 5.60547 11.2422 6.04297L11.2578 14.7305C11.2969 15.1133 11.1172 15.3633 10.7734 15.4336L9.53126 15.6915C7.96875 16.0196 7.23438 16.8165 7.23438 17.9961C7.23438 19.1915 8.15625 20.0274 9.45312 20.0274C10.6016 20.0274 12.3203 19.1836 12.3203 16.9102V9.76172C12.3203 9.34766 12.3984 9.26172 12.7656 9.1836L16.3359 8.40235C16.6016 8.34766 16.7656 8.14454 16.7656 7.88672Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_6924">
        <rect
          width="9.53125"
          height="16.0547"
          fill="white"
          transform="translate(7.23438 3.97266)"
        />
      </clipPath>
    </defs>
  </svg>
);
