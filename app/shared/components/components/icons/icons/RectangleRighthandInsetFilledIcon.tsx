'use client';

import { rem } from '@mantine/core';

interface RectangleRighthandInsetFilledIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const RectangleRighthandInsetFilledIcon = ({
  size,
  style,
  ...others
}: RectangleRighthandInsetFilledIconProps) => (
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
    <g clipPath="url(#clip0_2007_5951)">
      <path d="M12.6719 16.8711H18.2032C18.6953 16.8711 18.8907 16.668 18.8907 16.168V7.83985C18.8907 7.33985 18.6953 7.13672 18.2032 7.13672H12.6719C12.1797 7.13672 11.9844 7.33985 11.9844 7.83985V16.168C11.9844 16.668 12.1797 16.8711 12.6719 16.8711ZM5.24218 19.1914H18.7579C20.3985 19.1914 21.211 18.3867 21.211 16.7774V7.23048C21.211 5.6211 20.3985 4.8086 18.7579 4.8086H5.24218C3.60937 4.8086 2.78906 5.6211 2.78906 7.23048V16.7774C2.78906 18.3867 3.60937 19.1914 5.24218 19.1914ZM5.25781 17.9336C4.47656 17.9336 4.04687 17.5195 4.04687 16.707V7.30079C4.04687 6.48829 4.47656 6.06641 5.25781 6.06641H18.7422C19.5157 6.06641 19.9532 6.48829 19.9532 7.30079V16.707C19.9532 17.5195 19.5157 17.9336 18.7422 17.9336H5.25781Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5951">
        <rect width="18.4219" height="14.3828" fill="white" transform="translate(2.78906 4.8086)" />
      </clipPath>
    </defs>
  </svg>
);
