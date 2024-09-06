'use client';

import { rem } from '@mantine/core';

interface SearchIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const SearchIcon = ({ size, style, ...others }: SearchIconProps) => (
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
    <g clipPath="url(#clip0_2007_5901)">
      <path d="M4.36719 10.5273C4.36719 13.9648 7.16407 16.7618 10.6016 16.7618C11.9609 16.7618 13.2031 16.3242 14.2266 15.5899L18.0703 19.4414C18.25 19.6211 18.4844 19.7071 18.7344 19.7071C19.2656 19.7071 19.6328 19.3086 19.6328 18.7852C19.6328 18.5352 19.5391 18.3086 19.375 18.1446L15.5547 14.3008C16.3594 13.2539 16.836 11.9492 16.836 10.5273C16.836 7.08985 14.0391 4.29297 10.6016 4.29297C7.16407 4.29297 4.36719 7.08985 4.36719 10.5273ZM5.70313 10.5273C5.70313 7.82422 7.89844 5.62891 10.6016 5.62891C13.3047 5.62891 15.5 7.82422 15.5 10.5273C15.5 13.2305 13.3047 15.4258 10.6016 15.4258C7.89844 15.4258 5.70313 13.2305 5.70313 10.5273Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5901">
        <rect
          width="15.2656"
          height="15.4141"
          fill="white"
          transform="translate(4.36719 4.29297)"
        />
      </clipPath>
    </defs>
  </svg>
);
