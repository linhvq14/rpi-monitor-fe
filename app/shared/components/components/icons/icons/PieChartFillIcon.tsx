'use client';

import { rem } from '@mantine/core';

interface PieChartFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PieChartFillIcon = ({ size, style, ...others }: PieChartFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5814)">
      <path d="M12 19.9649C13.875 19.9649 15.6874 19.293 17.1328 18.0664L11.5078 12.5508C11.3516 12.4102 11.3203 12.2773 11.3203 12.0664V4.05859C7.26563 4.41016 4.03125 7.8711 4.03125 11.9961C4.03125 16.3555 7.64844 19.9649 12 19.9649ZM19.9688 11.9961C19.9688 10.8242 19.6797 9.59766 19.1875 8.59766L12.8047 12.2695L17.9062 17.3086C19.1875 15.9102 19.9688 13.9883 19.9688 11.9961ZM12.3672 11.3086L18.6719 7.6836C17.3125 5.55078 14.8516 4.13672 12.3672 4.03516V11.3086Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5814">
        <rect
          width="15.9375"
          height="15.9297"
          fill="white"
          transform="translate(4.03125 4.03516)"
        />
      </clipPath>
    </defs>
  </svg>
);
