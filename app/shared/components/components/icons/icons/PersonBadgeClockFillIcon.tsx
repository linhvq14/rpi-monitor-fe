'use client';

import { rem } from '@mantine/core';

interface PersonBadgeClockFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PersonBadgeClockFillIcon = ({
  size,
  style,
  ...others
}: PersonBadgeClockFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5790)">
      <path d="M12.8872 13.3164C11.5513 13.3164 10.3872 13.629 9.43408 14.1133C10.5591 15.0352 11.2856 16.4336 11.2856 17.9961C11.2856 18.3868 11.2388 18.7852 11.145 19.1524H17.7934C19.02 19.1524 19.4575 18.8008 19.4575 18.1133C19.4575 16.0977 16.9341 13.3164 12.8872 13.3164ZM12.8872 11.918C14.5669 11.918 16.0122 10.418 16.0122 8.46485C16.0122 6.53516 14.5591 5.10547 12.8872 5.10547C11.2153 5.10547 9.76221 6.56641 9.76221 8.48047C9.76221 10.418 11.2153 11.918 12.8872 11.918ZM6.23877 21.9649C8.39502 21.9649 10.2153 20.1602 10.2153 17.9961C10.2153 15.8164 8.41846 14.0274 6.23877 14.0274C4.0669 14.0274 2.27002 15.8164 2.27002 17.9961C2.27002 20.1758 4.0669 21.9649 6.23877 21.9649ZM4.38721 18.5977C4.12158 18.5977 3.90283 18.3868 3.90283 18.1211C3.90283 17.8555 4.1294 17.6446 4.38721 17.6446H5.80127V15.6836C5.80127 15.4258 6.01221 15.2149 6.28564 15.2149C6.55127 15.2149 6.76221 15.4258 6.76221 15.6836V18.1211C6.76221 18.3946 6.55127 18.5977 6.28564 18.5977H4.38721Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5790">
        <rect
          width="17.1875"
          height="19.9297"
          fill="white"
          transform="translate(2.27002 2.03516)"
        />
      </clipPath>
    </defs>
  </svg>
);
