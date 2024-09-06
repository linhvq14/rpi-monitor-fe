'use client';

import { rem } from '@mantine/core';

interface ArrowDownIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowDownIcon = ({ size, style, ...others }: ArrowDownIconProps) => (
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
    <g clipPath="url(#clip0_2007_5914)">
      <path d="M12 4.62109C11.5937 4.62109 11.3047 4.90234 11.3047 5.30859V15.5977L11.3828 17.9258L11.8203 17.7695L9.02344 14.6992L7.24218 12.9492C7.12501 12.8242 6.9375 12.7617 6.75 12.7617C6.35938 12.7617 6.07812 13.0586 6.07812 13.4414C6.07812 13.6289 6.14844 13.793 6.29688 13.9492L11.4766 19.1445C11.625 19.3008 11.8047 19.3789 12 19.3789C12.1953 19.3789 12.375 19.3008 12.5234 19.1445L17.7109 13.9492C17.8593 13.793 17.9219 13.6289 17.9219 13.4414C17.9219 13.0586 17.6406 12.7617 17.25 12.7617C17.0625 12.7617 16.8828 12.8242 16.7578 12.9492L14.9766 14.6992L12.1719 17.7695L12.6172 17.9258L12.6953 15.5977V5.30859C12.6953 4.90234 12.4062 4.62109 12 4.62109Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5914">
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
