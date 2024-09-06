'use client';

import { rem } from '@mantine/core';

interface DotSpacingIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const DotSpacingIcon = ({ size, style, ...others }: DotSpacingIconProps) => (
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
    <circle cx="8" cy="10" r="1" />
  </svg>
);
