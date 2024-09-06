'use client';

import { rem } from '@mantine/core';

interface ShippingBoxAndArrowFowardFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ShippingBoxAndArrowFowardFillIcon = ({
  size,
  style,
  ...others
}: ShippingBoxAndArrowFowardFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5919)">
      <path d="M16.4219 8.38672C16.4687 8.5586 16.4844 8.7461 16.4844 8.98047V11.4727H14.1562C13.2266 11.4727 12.6875 12.0195 12.6875 12.9648C12.6875 13.9102 13.2266 14.4571 14.1562 14.4571H16.4844V15.0664C16.4844 16.1993 16.0859 16.6211 15.3672 17.0352L9.24219 20.5196C9.19529 20.5508 9.14839 20.5743 9.09379 20.5899V12.5742L16.4219 8.38672ZM8.02339 20.5899C7.96879 20.5743 7.92189 20.5508 7.86719 20.5196L1.74999 17.0352C1.02339 16.6211 0.632788 16.1993 0.632788 15.0664V8.98047C0.632788 8.7461 0.648388 8.5586 0.695288 8.38672L8.02339 12.5742V20.5899ZM8.55469 11.6367L5.21879 9.7461L12.6172 5.51954L15.4844 7.15235C15.6562 7.2461 15.7969 7.33985 15.9219 7.45704L8.55469 11.6367ZM4.13279 9.12891L1.19529 7.45704C1.31249 7.33985 1.45309 7.2461 1.62499 7.15235L7.14059 4.01172C7.61719 3.73828 8.09379 3.58984 8.55469 3.58984C9.02339 3.58984 9.49999 3.73828 9.97659 4.01172L11.5625 4.91016L4.13279 9.12891ZM13.4844 12.9648C13.4844 12.5586 13.7734 12.2695 14.1719 12.2695H19.4219L21.8281 12.3477V12.7852L19.6953 10.8477L18.6172 9.89454C18.4453 9.7461 18.3906 9.55078 18.3906 9.36328C18.3906 8.97266 18.6875 8.69141 19.0781 8.69141C19.2578 8.69141 19.4219 8.75391 19.5781 8.90235L23.125 12.4414C23.2812 12.5898 23.3672 12.7695 23.3672 12.9648C23.3672 13.1602 23.2812 13.3398 23.125 13.4883L19.6016 17.004C19.4297 17.1758 19.2578 17.2383 19.0781 17.2383C18.6875 17.2383 18.3906 16.9571 18.3906 16.5664C18.3906 16.379 18.4375 16.1836 18.6172 16.0352L19.6953 15.0821L21.8281 13.1445V13.5821L19.4219 13.6602H14.1719C13.7734 13.6602 13.4844 13.3711 13.4844 12.9648Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5919">
        <rect
          width="22.7344"
          height="17.1797"
          fill="white"
          transform="matrix(-1 0 0 1 23.3672 3.41016)"
        />
      </clipPath>
    </defs>
  </svg>
);
