'use client';

import { rem } from '@mantine/core';

interface CopyIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CopyIcon = ({ size, style, ...others }: CopyIconProps) => (
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
    <g clipPath="url(#clip0_2007_5920)">
      <path d="M4.08596 15.4102C4.08596 17.043 4.89066 17.8633 6.50786 17.8633H13.875C15.4922 17.8633 16.2969 17.043 16.2969 15.4102V4.73826C16.2969 3.10546 15.4844 2.28516 13.875 2.28516H6.50786C4.89846 2.28516 4.08596 3.10546 4.08596 4.73826V15.4102ZM5.34376 15.3867V4.75386C5.34376 3.98826 5.75786 3.54296 6.57026 3.54296H13.8125C14.625 3.54296 15.0391 3.98826 15.0391 4.75386V15.3867C15.0391 16.168 14.625 16.6055 13.8125 16.6055H6.57026C5.75786 16.6055 5.34376 16.168 5.34376 15.3867ZM7.70316 19.2695C7.70316 20.9023 8.50786 21.7227 10.125 21.7227H17.4922C19.1094 21.7227 19.9141 20.9023 19.9141 19.2695V8.68356C19.9141 7.05076 19.1016 6.23046 17.4922 6.23046H15.7891V7.48826H17.4297C18.2422 7.48826 18.6563 7.93356 18.6563 8.69926V19.2461C18.6563 20.0273 18.2422 20.4648 17.4297 20.4648H10.1875C9.37496 20.4648 8.96096 20.0273 8.96096 19.2461V17.332H7.70316V19.2695Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5920">
        <rect
          width="15.8281"
          height="19.4453"
          fill="white"
          transform="matrix(-1 0 0 -1 19.9141 21.7227)"
        />
      </clipPath>
    </defs>
  </svg>
);
