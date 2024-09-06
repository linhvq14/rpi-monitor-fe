'use client';

import { rem } from '@mantine/core';

interface CheckmarkCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CheckmarkCircleFillIcon = ({
  size,
  style,
  ...others
}: CheckmarkCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5833)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM11.125 15.8164C10.8594 15.8164 10.6406 15.707 10.4375 15.4335L8.47656 13.0273C8.35937 12.8711 8.28906 12.6992 8.28906 12.5195C8.28906 12.168 8.5625 11.8789 8.91406 11.8789C9.14063 11.8789 9.3125 11.9492 9.50781 12.207L11.0938 14.2539L14.4297 8.89453C14.5782 8.66015 14.7812 8.53515 14.9844 8.53515C15.3281 8.53515 15.6484 8.76953 15.6484 9.13672C15.6484 9.30859 15.5469 9.48828 15.4531 9.65234L11.7812 15.4335C11.6172 15.6914 11.3906 15.8164 11.125 15.8164Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5833">
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
