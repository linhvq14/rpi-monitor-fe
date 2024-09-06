'use client';

import { rem } from '@mantine/core';

interface ThumbUpFilledIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ThumbUpFilledIcon = ({ size, style, ...others }: ThumbUpFilledIconProps) => (
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
    <g clipPath="url(#clip0_2007_5763)">
      <path d="M4.30078 14.7695C4.30078 17.082 5.74609 19.0195 7.68359 19.0195H9.05859C7.65234 17.9961 7.07422 16.4492 7.07422 14.6914C7.08203 12.7383 7.83984 11.3398 8.51172 10.4961H7.39453C5.65234 10.4961 4.30078 12.3711 4.30078 14.7695ZM8.15234 14.707C8.15234 17.5585 10.3789 19.7617 14.0117 19.7617H15.0742C16.082 19.7617 16.832 19.6914 17.2539 19.5742C17.8633 19.4257 18.4492 19.0507 18.4492 18.3164C18.4492 18.0117 18.3711 17.7929 18.2774 17.6289C18.2149 17.5273 18.2305 17.4492 18.3242 17.4101C18.8086 17.207 19.207 16.7539 19.207 16.1367C19.207 15.7851 19.1055 15.4726 18.9336 15.2617C18.8477 15.1445 18.8555 15.0351 19.0039 14.957C19.3477 14.7539 19.5977 14.3164 19.5977 13.8085C19.5977 13.4414 19.4805 13.0586 19.2774 12.8711C19.1524 12.7617 19.1758 12.6836 19.3008 12.5664C19.543 12.3633 19.6992 12.0117 19.6992 11.5664C19.6992 10.8164 19.1133 10.1992 18.3399 10.1992H15.5899C14.8946 10.1992 14.4336 9.83984 14.4336 9.26172C14.4336 8.22265 15.7383 6.30078 15.7383 4.92578C15.7383 4.19922 15.2696 3.77734 14.6602 3.77734C14.0977 3.77734 13.8242 4.16016 13.5273 4.74609C12.3633 7.0039 10.8164 8.83203 9.63672 10.3945C8.63672 11.7227 8.15234 12.8711 8.15234 14.707Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5763">
        <rect
          width="15.3984"
          height="16.4453"
          fill="white"
          transform="translate(4.30078 3.77734)"
        />
      </clipPath>
    </defs>
  </svg>
);
