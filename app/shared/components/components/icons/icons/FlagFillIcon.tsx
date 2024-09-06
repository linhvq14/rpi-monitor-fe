'use client';

import { rem } from '@mantine/core';

interface FlagFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const FlagFillIcon = ({ size, style, ...others }: FlagFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5849)">
      <path d="M5.65625 19.6679C5.98438 19.6679 6.25 19.4101 6.25 19.082V14.7382C6.44531 14.6523 7.17969 14.3711 8.32812 14.3711C11.2188 14.3711 13.0312 15.7851 15.7813 15.7851C17 15.7851 17.4531 15.6523 18.0469 15.3867C18.5859 15.1445 18.9375 14.7382 18.9375 14.0195V6.08984C18.9375 5.66797 18.5781 5.42578 18.125 5.42578C17.7422 5.42578 17.0234 5.75391 15.6797 5.75391C12.9297 5.75391 11.125 4.33984 8.22656 4.33984C7.00781 4.33984 6.54688 4.47266 5.95312 4.73828C5.41406 4.98047 5.0625 5.38672 5.0625 6.09765V19.082C5.0625 19.4023 5.33594 19.6679 5.65625 19.6679Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5849">
        <rect width="13.875" height="15.3359" fill="white" transform="translate(5.0625 4.33203)" />
      </clipPath>
    </defs>
  </svg>
);
