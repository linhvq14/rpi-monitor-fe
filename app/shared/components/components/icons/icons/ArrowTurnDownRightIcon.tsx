'use client';

import { rem } from '@mantine/core';

interface ArrowTurnDownRightIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowTurnDownRightIcon = ({ size, style, ...others }: ArrowTurnDownRightIconProps) => (
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
    <g clipPath="url(#clip0_3568_15181)">
      <path d="M5.40234 5.43359C4.98828 5.43359 4.80078 5.69922 4.73828 6.01172C4.68359 6.25391 4.66797 6.63671 4.66797 7.09765C4.66797 10.8789 6.18359 12.5039 9.88672 12.5039H15.3477L17.2618 12.3945L14.6289 14.793L12.8945 16.5586C12.7695 16.6914 12.707 16.8711 12.707 17.0586C12.707 17.4492 13.0039 17.7305 13.3945 17.7305C13.5742 17.7305 13.7461 17.6602 13.918 17.4961L19.0899 12.332C19.2539 12.1758 19.3321 11.9961 19.3321 11.8008C19.3321 11.6133 19.2539 11.4258 19.0899 11.2773L13.9023 6.08984C13.7461 5.94141 13.5742 5.87891 13.3945 5.87891C13.0039 5.87891 12.707 6.16016 12.707 6.55078C12.707 6.73828 12.7773 6.91797 12.8945 7.04297L14.6289 8.80859L17.2696 11.2227L15.3477 11.1055H9.95703C7.08985 11.1055 6.08203 9.92578 6.08203 7.02734C6.08203 6.65234 6.10547 6.40234 6.10547 6.12109C6.10547 5.71484 5.80859 5.43359 5.40234 5.43359Z" />
    </g>
    <defs>
      <clipPath id="clip0_3568_15181">
        <rect
          width="14.6641"
          height="13.1328"
          fill="white"
          transform="translate(4.66797 5.43359)"
        />
      </clipPath>
    </defs>
  </svg>
);
