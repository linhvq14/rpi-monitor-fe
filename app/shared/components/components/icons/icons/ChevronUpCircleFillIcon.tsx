'use client';

import { rem } from '@mantine/core';

interface ChevronUpCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronUpCircleFillIcon = ({
  size,
  style,
  ...others
}: ChevronUpCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5866)">
      <path d="M12 4.03516C16.3594 4.03516 19.9688 7.65236 19.9688 12.0039C19.9688 16.3633 16.3516 19.9727 11.9922 19.9727C7.64063 19.9727 4.03125 16.3633 4.03125 12.0039C4.03125 7.65236 7.64844 4.03516 12 4.03516ZM12.8125 9.42576C12.3047 8.88676 11.7188 8.88676 11.2109 9.42576L8.05469 12.7773C7.80469 13.0352 7.80469 13.4023 8.02344 13.6367C8.27344 13.8945 8.66406 13.8945 8.89063 13.6523L12.0078 10.3477L15.125 13.6523C15.3593 13.8945 15.7421 13.8867 16 13.6367C16.2265 13.4102 16.2109 13.0352 15.9688 12.7773L12.8125 9.42576Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5866">
        <rect
          width="15.9375"
          height="15.9453"
          fill="white"
          transform="matrix(1 0 0 -1 4.03125 19.9727)"
        />
      </clipPath>
    </defs>
  </svg>
);
