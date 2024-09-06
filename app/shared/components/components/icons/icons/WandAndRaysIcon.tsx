'use client';

import { rem } from '@mantine/core';

interface WandAndRaysIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const WandAndRaysIcon = ({ size, style, ...others }: WandAndRaysIconProps) => (
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
    <g clipPath="url(#clip0_2007_5803)">
      <path d="M13.0078 17.5625C13.0078 17.1875 12.6953 16.875 12.3203 16.875C11.9531 16.875 11.6406 17.1875 11.6406 17.5625V19.9688C11.6406 20.3359 11.9531 20.6484 12.3203 20.6484C12.6953 20.6484 13.0078 20.3359 13.0078 19.9688V17.5625ZM6.45312 17.2188C6.19531 17.4766 6.19531 17.9219 6.44531 18.1797C6.70312 18.4375 7.14844 18.4453 7.41406 18.1875L9.11719 16.4844C9.375 16.2266 9.375 15.7891 9.11719 15.5312C8.86719 15.2656 8.41406 15.2656 8.15625 15.5312L6.45312 17.2188ZM4.67969 11.6406C4.3125 11.6406 4 11.9531 4 12.3203C4 12.6875 4.3125 13 4.67969 13H7.10156C7.46875 13 7.78125 12.6875 7.78125 12.3203C7.78125 11.9531 7.46875 11.6406 7.10156 11.6406H4.67969ZM8.15625 9.125C8.41406 9.38281 8.85156 9.38281 9.11719 9.125C9.375 8.85938 9.375 8.42188 9.11719 8.16406L7.42188 6.46094C7.16406 6.20312 6.72656 6.19531 6.46094 6.45312C6.20312 6.71094 6.20312 7.14844 6.46094 7.41406L8.15625 9.125ZM13.0078 4.67969C13.0078 4.3125 12.6953 4 12.3203 4C11.9531 4 11.6406 4.3125 11.6406 4.67969V7.08594C11.6406 7.46094 11.9531 7.77344 12.3203 7.77344C12.6953 7.77344 13.0078 7.46094 13.0078 7.08594V4.67969ZM15.5234 8.16406C15.2578 8.42188 15.2578 8.85938 15.5234 9.125C15.7812 9.38281 16.2266 9.38281 16.4922 9.125L18.1875 7.42188C18.4531 7.15625 18.4531 6.71875 18.1875 6.45312C17.9297 6.19531 17.4922 6.19531 17.2344 6.45312L15.5234 8.16406ZM19.9609 13C20.3359 13 20.6484 12.6875 20.6484 12.3203C20.6484 11.9531 20.3359 11.6406 19.9609 11.6406H17.5547C17.1875 11.6406 16.875 11.9531 16.875 12.3203C16.875 12.6875 17.1875 13 17.5547 13H19.9609ZM18.6406 19.9141C18.9688 20.25 19.5312 20.25 19.8438 19.9141C20.1719 19.5703 20.1641 19.0391 19.8438 18.7109L12.4219 11.2578C12.0938 10.9297 11.5234 10.9297 11.2109 11.2578C10.8906 11.6016 10.8984 12.1406 11.2109 12.4688L18.6406 19.9141ZM14.1016 14.5469L11.8047 12.25C11.6641 12.1094 11.625 11.9531 11.7578 11.8203C11.875 11.6953 12.0469 11.7266 12.1875 11.875L14.4844 14.1719L14.1016 14.5469Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5803">
        <rect width="16.6484" height="16.7109" fill="white" transform="translate(4 4)" />
      </clipPath>
    </defs>
  </svg>
);
