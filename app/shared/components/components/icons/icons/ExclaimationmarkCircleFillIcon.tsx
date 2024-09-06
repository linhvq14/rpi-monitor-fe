'use client';

import { rem } from '@mantine/core';

interface ExclaimationmarkCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ExclaimationmarkCircleFillIcon = ({
  size,
  style,
  ...others
}: ExclaimationmarkCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5911)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 13.4492C11.5938 13.4492 11.3672 13.2227 11.3594 12.8086L11.2578 8.55078C11.25 8.13672 11.5547 7.83984 11.9922 7.83984C12.4219 7.83984 12.7422 8.14453 12.7344 8.55859L12.625 12.8086C12.6172 13.2305 12.3906 13.4492 12 13.4492ZM12 16.0664C11.5312 16.0664 11.125 15.6914 11.125 15.2304C11.125 14.7695 11.5234 14.3867 12 14.3867C12.4766 14.3867 12.875 14.7617 12.875 15.2304C12.875 15.6992 12.4688 16.0664 12 16.0664Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5911">
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
