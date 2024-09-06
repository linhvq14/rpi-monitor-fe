'use client';

import { rem } from '@mantine/core';

interface ArrowUpIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowUpIcon = ({ size, style, ...others }: ArrowUpIconProps) => (
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
    <g clipPath="url(#clip0_2007_5781)">
      <path d="M12 19.3789C12.4062 19.3789 12.6953 19.0977 12.6953 18.6914V8.40234L12.6172 6.07421L12.1719 6.23047L14.9766 9.30078L16.7578 11.0508C16.8828 11.1758 17.0625 11.2383 17.25 11.2383C17.6406 11.2383 17.9219 10.9414 17.9219 10.5586C17.9219 10.3711 17.8593 10.207 17.7109 10.0508L12.5234 4.85547C12.375 4.69922 12.1953 4.62109 12 4.62109C11.8047 4.62109 11.625 4.69922 11.4766 4.85547L6.29688 10.0508C6.14844 10.207 6.07812 10.3711 6.07812 10.5586C6.07812 10.9414 6.35938 11.2383 6.75 11.2383C6.9375 11.2383 7.12501 11.1758 7.24218 11.0508L9.02344 9.30078L11.8203 6.23047L11.3828 6.07421L11.3047 8.40234V18.6914C11.3047 19.0977 11.5937 19.3789 12 19.3789Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5781">
        <rect
          width="11.8438"
          height="14.7578"
          fill="white"
          transform="translate(6.07812 4.62109)"
        />
      </clipPath>
    </defs>
  </svg>
);
