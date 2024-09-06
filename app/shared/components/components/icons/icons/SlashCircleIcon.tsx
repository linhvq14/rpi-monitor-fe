'use client';

import { rem } from '@mantine/core';

interface SlashCircleIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const SlashCircleIcon = ({ size, style, ...others }: SlashCircleIconProps) => (
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
    <g clipPath="url(#clip0_2007_5828)">
      <path d="M12 19.9648C16.3594 19.9648 19.9688 16.3476 19.9688 11.9961C19.9688 7.63672 16.3516 4.02734 11.9922 4.02734C7.64063 4.02734 4.03125 7.63672 4.03125 11.9961C4.03125 16.3476 7.64844 19.9648 12 19.9648ZM12 18.6367C8.3125 18.6367 5.36719 15.6835 5.36719 11.9961C5.36719 8.30859 8.30469 5.35546 11.9922 5.35546C15.6796 5.35546 18.6406 8.30859 18.6406 11.9961C18.6406 15.6835 15.6875 18.6367 12 18.6367ZM9.27344 15.3867C9.49219 15.3867 9.65625 15.3007 9.82813 15.1289L15.0781 9.80078C15.2421 9.63672 15.3438 9.4414 15.3438 9.26172C15.3438 8.89453 15.0469 8.61328 14.6875 8.61328C14.5001 8.61328 14.3203 8.69922 14.1484 8.87109L8.90625 14.1992C8.73437 14.3711 8.64063 14.5585 8.64063 14.7461C8.64063 15.0976 8.89844 15.3867 9.27344 15.3867Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5828">
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
