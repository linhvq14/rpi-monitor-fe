'use client';

import { rem } from '@mantine/core';

interface InfoCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const InfoCircleFillIcon = ({ size, style, ...others }: InfoCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5907)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM10.5938 16.5195C10.2578 16.5195 10 16.2773 10 15.9414C10 15.6289 10.2578 15.3711 10.5938 15.3711H11.5859V11.6992H10.7266C10.3984 11.6992 10.1406 11.457 10.1406 11.1211C10.1406 10.8086 10.3984 10.5508 10.7266 10.5508H12.2422C12.6562 10.5508 12.875 10.8477 12.875 11.2852V15.3711H13.8672C14.2032 15.3711 14.4609 15.6289 14.4609 15.9414C14.4609 16.2773 14.2032 16.5195 13.8672 16.5195H10.5938ZM11.9297 9.22265C11.3438 9.22265 10.875 8.7539 10.875 8.16015C10.875 7.5664 11.3438 7.09765 11.9297 7.09765C12.5156 7.09765 12.9766 7.5664 12.9766 8.16015C12.9766 8.7539 12.5156 9.22265 11.9297 9.22265Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5907">
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
