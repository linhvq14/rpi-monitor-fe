'use client';

import { rem } from '@mantine/core';

interface StarSquareOnSquareFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const StarSquareOnSquareFillIcon = ({
  size,
  style,
  ...others
}: StarSquareOnSquareFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5838)">
      <path d="M9.97656 20.1914H17.8203C19.4453 20.1914 20.2656 19.3789 20.2656 17.7695V9.86328C20.2656 8.2539 19.4453 7.4414 17.8203 7.4414H9.97656C8.33593 7.4414 7.52344 8.24609 7.52344 9.86328V17.7695C7.52344 19.3789 8.33593 20.1914 9.97656 20.1914ZM3.73438 14.1524C3.73438 15.7617 4.54688 16.5742 6.18749 16.5742H6.45312V9.86328C6.45312 7.65234 7.75 6.3789 9.97656 6.3789H16.4766V6.24609C16.4766 4.63672 15.6563 3.82422 14.0313 3.82422H6.18749C4.54688 3.82422 3.73438 4.63672 3.73438 6.24609V14.1524ZM11.9688 17.3164C11.5703 17.6211 11.1563 17.3086 11.3125 16.8477L12.0781 14.5586L10.1094 13.1523C9.74219 12.8867 9.86719 12.3555 10.3672 12.3633L12.7813 12.3867L13.5078 10.082C13.6563 9.6289 14.1719 9.6289 14.3125 10.082L15.0469 12.3867L17.4532 12.3633C17.961 12.3555 18.0703 12.8867 17.711 13.1523L15.75 14.5586L16.5156 16.8477C16.6719 17.3086 16.25 17.6211 15.8516 17.3164L13.9141 15.9024L11.9688 17.3164Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5838">
        <rect
          width="16.5312"
          height="16.3828"
          fill="white"
          transform="translate(3.73438 3.80859)"
        />
      </clipPath>
    </defs>
  </svg>
);
