'use client';

import { rem } from '@mantine/core';

interface ChevronDownCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronDownCircleFillIcon = ({
  size,
  style,
  ...others
}: ChevronDownCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5942)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12.8125 14.5742C12.3047 15.1132 11.7188 15.1132 11.2109 14.5742L8.05469 11.2227C7.80469 10.9648 7.80469 10.5977 8.02344 10.3633C8.27344 10.1055 8.66406 10.1055 8.89063 10.3477L12.0078 13.6523L15.125 10.3477C15.3593 10.1055 15.7421 10.1133 16 10.3633C16.2265 10.5898 16.2109 10.9648 15.9688 11.2227L12.8125 14.5742Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5942">
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
