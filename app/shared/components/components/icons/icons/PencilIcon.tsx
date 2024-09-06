'use client';

import { rem } from '@mantine/core';

interface PencilIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PencilIcon = ({ size, style, ...others }: PencilIconProps) => (
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
    <g clipPath="url(#clip0_2007_5892)">
      <path d="M7.25705 18.7852L17.1946 8.83204L15.093 6.73048L5.15549 16.6836L4.31174 18.9492C4.15549 19.3867 4.6008 19.7774 4.98361 19.6367L7.25705 18.7852ZM18.218 7.80861L19.3196 6.71486C19.8352 6.19923 19.8587 5.57423 19.3587 5.06642L18.8743 4.57423C18.3743 4.06642 17.7337 4.11329 17.2102 4.62111L16.1165 5.70704L18.218 7.80861Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5892">
        <rect width="15.4406" height="15.568" fill="white" transform="translate(4.27966 4.216)" />
      </clipPath>
    </defs>
  </svg>
);
