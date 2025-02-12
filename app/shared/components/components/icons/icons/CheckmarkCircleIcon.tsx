'use client';

import { rem } from '@mantine/core';

interface CheckmarkCircleIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CheckmarkCircleIcon = ({ size, style, ...others }: CheckmarkCircleIconProps) => (
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
    <g clipPath="url(#clip0_2007_5947)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 18.6367C8.3125 18.6367 5.36719 15.6835 5.36719 11.9961C5.36719 8.30859 8.30469 5.35546 11.9922 5.35546C15.6796 5.35546 18.6406 8.30859 18.6406 11.9961C18.6406 15.6835 15.6875 18.6367 12 18.6367ZM11.1406 15.707C11.3984 15.707 11.6172 15.582 11.7734 15.3398L15.3438 9.72265C15.4297 9.5664 15.5312 9.39453 15.5312 9.22265C15.5312 8.87109 15.2188 8.64453 14.8906 8.64453C14.6953 8.64453 14.5001 8.76953 14.3516 8.99609L11.1094 14.1992L9.57031 12.207C9.38281 11.957 9.21094 11.8945 8.99219 11.8945C8.65625 11.8945 8.39063 12.168 8.39063 12.5117C8.39063 12.6836 8.46094 12.8477 8.57031 12.9961L10.4766 15.3398C10.6719 15.5976 10.8828 15.707 11.1406 15.707Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5947">
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
