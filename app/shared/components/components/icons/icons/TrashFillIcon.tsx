'use client';

import { rem } from '@mantine/core';

interface TrashFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const TrashFillIcon = ({ size, style, ...others }: TrashFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5773)">
      <path d="M8.48828 5.87109H9.90234V4.50391C9.90234 4.11328 10.1758 3.84765 10.5977 3.84765H13.3945C13.8164 3.84765 14.0898 4.11328 14.0898 4.50391V5.87109H15.4961V4.42578C15.4961 3.24609 14.7227 2.51953 13.4727 2.51953H10.5117C9.26171 2.51953 8.48828 3.24609 8.48828 4.42578V5.87109ZM5.01953 6.80078H18.9805C19.3008 6.80078 19.5664 6.52734 19.5664 6.20703C19.5664 5.88672 19.3008 5.62109 18.9805 5.62109H5.01953C4.70703 5.62109 4.43359 5.88672 4.43359 6.20703C4.43359 6.53515 4.70703 6.80078 5.01953 6.80078ZM17.8164 6.63672H6.1914L6.69921 18.2148C6.73828 19.1836 7.32421 19.7226 8.28515 19.7226H15.7148C16.6836 19.7226 17.2695 19.1836 17.3086 18.2148L17.8164 6.63672ZM9.52734 17.4883C9.24609 17.4883 9.05078 17.3086 9.04297 17.0273L8.80078 8.51953C8.79297 8.24609 8.98828 8.05859 9.29297 8.05859C9.5664 8.05859 9.76953 8.23828 9.77734 8.51172L10.0117 17.0273C10.0195 17.3007 9.82421 17.4883 9.52734 17.4883ZM12.0039 17.4883C11.707 17.4883 11.4961 17.3007 11.4961 17.0273V8.51953C11.4961 8.24609 11.707 8.05859 12.0039 8.05859C12.3008 8.05859 12.5039 8.24609 12.5039 8.51953V17.0273C12.5039 17.3007 12.3008 17.4883 12.0039 17.4883ZM14.4727 17.4883C14.1758 17.4883 13.9805 17.3007 13.9883 17.0273L14.2227 8.51953C14.2305 8.23828 14.4336 8.05859 14.707 8.05859C15.0039 8.05859 15.207 8.24609 15.1992 8.51953L14.957 17.0273C14.9492 17.3086 14.7539 17.4883 14.4727 17.4883Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5773">
        <rect
          width="15.1328"
          height="18.9609"
          fill="white"
          transform="translate(4.43359 2.51953)"
        />
      </clipPath>
    </defs>
  </svg>
);
