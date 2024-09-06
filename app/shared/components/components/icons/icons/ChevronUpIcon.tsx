'use client';

import { rem } from '@mantine/core';

interface ChevronUpIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChevronUpIcon = ({ size, style, ...others }: ChevronUpIconProps) => (
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
    <g clipPath="url(#clip0_2007_5786)">
      <path d="M5.42578 14.2852C5.29297 14.4102 5.21484 14.5898 5.21484 14.793C5.21484 15.1992 5.51953 15.5039 5.92578 15.5039C6.12891 15.5039 6.3164 15.4336 6.43359 15.3008L12.418 9.1914H11.582L17.5664 15.3008C17.6914 15.4336 17.8789 15.5039 18.0742 15.5039C18.4804 15.5039 18.7851 15.1992 18.7851 14.793C18.7851 14.5898 18.707 14.4102 18.5742 14.2852L12.5273 8.09766C12.3945 7.94922 12.1992 7.86328 12.0039 7.86328C11.8008 7.86328 11.6133 7.94922 11.4727 8.09766L5.42578 14.2852Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5786">
        <rect
          width="13.5703"
          height="8.27344"
          fill="white"
          transform="translate(5.21484 7.86328)"
        />
      </clipPath>
    </defs>
  </svg>
);
