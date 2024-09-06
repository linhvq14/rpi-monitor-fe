'use client';

import { rem } from '@mantine/core';

interface ShippingboxIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ShippingboxIcon = ({ size, style, ...others }: ShippingboxIconProps) => (
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
    <g clipPath="url(#clip0_2007_5922)">
      <path d="M5.20703 16.9257L11.3555 20.4101C11.793 20.6601 12.207 20.6601 12.6523 20.4101L18.793 16.9257C19.5117 16.5117 19.8867 16.1054 19.8867 14.9882V8.80078C19.8867 7.98828 19.5899 7.48828 18.9336 7.10546L13.4023 3.96484C12.457 3.42578 11.543 3.42578 10.5977 3.96484L5.07422 7.10546C4.41016 7.48828 4.11328 7.98828 4.11328 8.80078V14.9882C4.11328 16.1054 4.49609 16.5117 5.20703 16.9257ZM5.91016 15.8945C5.45703 15.6367 5.30078 15.3789 5.30078 14.9492V9.05078L11.3867 12.5273V19.0117L5.91016 15.8945ZM18.0977 15.8945L12.6133 19.0117V12.5273L18.6992 9.05078V14.9492C18.6992 15.3789 18.543 15.6367 18.0977 15.8945ZM12.0039 11.4336L5.97266 8.01953L8.38672 6.63672L14.418 10.0664L12.0039 11.4336ZM15.6758 9.35546L9.62109 5.93359L11.1211 5.08203C11.7227 4.73828 12.2773 4.73046 12.8867 5.08203L18.0352 8.01953L15.6758 9.35546Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5922">
        <rect
          width="15.7734"
          height="17.1953"
          fill="white"
          transform="translate(4.11328 3.40234)"
        />
      </clipPath>
    </defs>
  </svg>
);
