'use client';

import { rem } from '@mantine/core';

interface ShippingboxFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ShippingboxFillIcon = ({ size, style, ...others }: ShippingboxFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5824)">
      <path d="M12.5352 20.5899C12.5898 20.5743 12.6367 20.5508 12.6914 20.5196L18.8086 17.0352C19.5351 16.6211 19.9258 16.1993 19.9258 15.0664V8.98047C19.9258 8.7461 19.9101 8.5586 19.8633 8.38672L12.5352 12.5742V20.5899ZM11.4648 20.5899V12.5742L4.13672 8.38672C4.08984 8.5586 4.07422 8.7461 4.07422 8.98047V15.0664C4.07422 16.1993 4.47266 16.6211 5.19141 17.0352L11.3164 20.5196C11.3633 20.5508 11.4102 20.5743 11.4648 20.5899ZM12.0039 11.6367L15.3398 9.7461L7.94141 5.51954L5.07422 7.15235C4.90234 7.2461 4.76172 7.33985 4.63672 7.45704L12.0039 11.6367ZM16.4258 9.12891L19.3633 7.45704C19.2461 7.33985 19.1054 7.2461 18.9336 7.15235L13.418 4.01172C12.9414 3.73828 12.4648 3.58984 12.0039 3.58984C11.5352 3.58984 11.0586 3.73828 10.582 4.01172L8.9961 4.91016L16.4258 9.12891Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5824">
        <rect
          width="15.8516"
          height="17.1797"
          fill="white"
          transform="translate(4.07422 3.41016)"
        />
      </clipPath>
    </defs>
  </svg>
);
