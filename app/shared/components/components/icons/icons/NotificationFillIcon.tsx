'use client';

import { rem } from '@mantine/core';

interface NotificationFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const NotificationFillIcon = ({ size, style, ...others }: NotificationFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5913)">
      <path d="M5.8086 17.0898H18.1914C18.9258 17.0898 19.3711 16.7148 19.3711 16.1445C19.3711 15.3632 18.5742 14.6601 17.9023 13.9648C17.3867 13.4258 17.2461 12.3164 17.1836 11.418C17.1289 8.41796 16.332 6.35546 14.2539 5.60546C13.957 4.58203 13.1523 3.77734 11.9961 3.77734C10.8477 3.77734 10.0352 4.58203 9.7461 5.60546C7.66797 6.35546 6.8711 8.41796 6.81641 11.418C6.75391 12.3164 6.61329 13.4258 6.09766 13.9648C5.41797 14.6601 4.62891 15.3632 4.62891 16.1445C4.62891 16.7148 5.06641 17.0898 5.8086 17.0898ZM11.9961 20.2226C13.3242 20.2226 14.293 19.2539 14.3945 18.1601H9.60547C9.70703 19.2539 10.6758 20.2226 11.9961 20.2226Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5913">
        <rect
          width="14.7422"
          height="16.4453"
          fill="white"
          transform="translate(4.62891 3.77734)"
        />
      </clipPath>
    </defs>
  </svg>
);
