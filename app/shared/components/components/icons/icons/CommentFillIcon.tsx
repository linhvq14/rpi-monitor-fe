'use client';

import { rem } from '@mantine/core';

interface CommentFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CommentFillIcon = ({ size, style, ...others }: CommentFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5865)">
      <path d="M5.92188 19.832C6.23438 19.832 6.45313 19.6757 6.82032 19.332L9.09375 17.2148C8.65625 16.8632 8.29688 16.3086 8.29688 15.0351V9.85546C8.29688 7.46484 9.75 6.03515 12.1484 6.03515H17.6171L17.6093 5.74609C17.4921 4.13672 16.4375 3.09766 14.6484 3.09766H3.92969C2.14063 3.09766 0.960938 4.16796 0.960938 6.03515V13.707C0.960938 15.5586 2.14063 16.7539 3.92969 16.7539H5.22656V19.0351C5.22656 19.5117 5.48438 19.832 5.92188 19.832ZM18.5468 20.9101C18.9921 20.9101 19.2421 20.5976 19.2421 20.1132V17.8398H20.0703C21.8593 17.8398 23.039 16.6445 23.039 14.7851V10.0352C23.039 8.17578 21.8593 7.10546 20.0703 7.10546H12.3281C10.4609 7.10546 9.36719 8.17578 9.36719 10.043V14.7851C9.36719 16.6445 10.4609 17.8398 12.3281 17.8398H14.8281L17.6484 20.4179C18.0156 20.7539 18.2343 20.9101 18.5468 20.9101Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5865">
        <rect
          width="22.0781"
          height="17.8203"
          fill="white"
          transform="translate(0.960938 3.08984)"
        />
      </clipPath>
    </defs>
  </svg>
);
