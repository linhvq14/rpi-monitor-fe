'use client';

import { rem } from '@mantine/core';

interface KeyFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const KeyFillIcon = ({ size, style, ...others }: KeyFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5923)">
      <path d="M12.0039 2.41797C9.22266 2.41797 7.01172 4.62891 7.01172 7.39453C7.01172 9.48047 8.26172 11.3242 10.2148 12.0664V19.7773C10.2148 19.9726 10.2773 20.121 10.418 20.2695L11.7227 21.582C11.8555 21.7148 12.1211 21.7539 12.2852 21.5898L14.7617 19.1132C14.9258 18.9414 14.918 18.7148 14.7617 18.5507L13.2227 17.0351L15.332 14.9335C15.4805 14.7773 15.4805 14.5507 15.3164 14.3789L13.2305 12.2773C15.6445 11.3164 16.9883 9.53516 16.9883 7.39453C16.9883 4.64453 14.7617 2.41797 12.0039 2.41797ZM12.0039 6.9961C11.2773 6.9961 10.6992 6.41016 10.6992 5.69141C10.6992 4.96485 11.2695 4.38672 12.0039 4.38672C12.7227 4.38672 13.3086 4.96485 13.3086 5.69141C13.3086 6.41016 12.7227 6.9961 12.0039 6.9961Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5923">
        <rect
          width="9.97656"
          height="19.3959"
          fill="white"
          transform="translate(7.01172 2.30206)"
        />
      </clipPath>
    </defs>
  </svg>
);
