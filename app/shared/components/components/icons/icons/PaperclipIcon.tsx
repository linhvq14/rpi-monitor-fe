'use client';

import { rem } from '@mantine/core';

interface PaperclipIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PaperclipIcon = ({ size, style, ...others }: PaperclipIconProps) => (
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
    <g clipPath="url(#clip0_2007_5839)">
      <path d="M17.2871 12.4727L11.545 18.2148C10.0528 19.7148 8.04498 19.5664 6.76373 18.2695C5.47467 16.9883 5.32623 14.9961 6.81842 13.4961L14.6543 5.66797C15.5528 4.76954 16.8731 4.64454 17.7324 5.4961C18.584 6.36329 18.459 7.67579 17.5684 8.57422L9.91217 16.2304C9.52935 16.6289 9.0606 16.5117 8.79498 16.2461C8.52935 15.9726 8.41998 15.5195 8.80279 15.1211L14.1544 9.78516C14.3887 9.54297 14.4044 9.19922 14.1778 8.97266C13.9512 8.75391 13.6075 8.76954 13.3731 9.00391L8.00592 14.3711C7.20904 15.1679 7.24029 16.3867 7.94342 17.0898C8.70904 17.8554 9.86529 17.8398 10.67 17.0351L18.3574 9.34766C19.8184 7.88672 19.7559 5.96485 18.4824 4.69141C17.2403 3.44922 15.2871 3.35547 13.8262 4.81641L5.95123 12.6992C4.02154 14.6289 4.16998 17.3867 5.91217 19.1289C7.65435 20.8633 10.4122 21.0117 12.3419 19.0898L18.1231 13.3086C18.3496 13.082 18.3496 12.668 18.1153 12.457C17.8887 12.2148 17.5215 12.2461 17.2871 12.4727Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5839">
        <rect
          width="14.8911"
          height="16.9616"
          fill="white"
          transform="translate(4.55444 3.51923)"
        />
      </clipPath>
    </defs>
  </svg>
);
