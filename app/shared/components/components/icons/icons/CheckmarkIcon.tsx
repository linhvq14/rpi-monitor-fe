'use client';

import { rem } from '@mantine/core';

interface CheckmarkIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CheckmarkIcon = ({ size, style, ...others }: CheckmarkIconProps) => (
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
    <g clipPath="url(#clip0_2007_5840)">
      <path d="M10.3633 18.8946C10.6992 18.8946 10.9648 18.7461 11.1523 18.4571L18.5351 6.83203C18.6757 6.60547 18.7304 6.43359 18.7304 6.25391C18.7304 5.82422 18.4492 5.54297 18.0195 5.54297C17.707 5.54297 17.5351 5.64453 17.3476 5.94141L10.332 17.1211L6.69141 12.3555C6.49609 12.082 6.30078 11.9727 6.01953 11.9727C5.57422 11.9727 5.26953 12.2773 5.26953 12.707C5.26953 12.8867 5.34766 13.0898 5.49609 13.2773L9.55078 18.4414C9.78515 18.7461 10.0273 18.8946 10.3633 18.8946Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5840">
        <rect
          width="13.4609"
          height="13.7891"
          fill="white"
          transform="translate(5.26953 5.10547)"
        />
      </clipPath>
    </defs>
  </svg>
);
