'use client';

import { rem } from '@mantine/core';

interface DesktopIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const DesktopIcon = ({ size, style, ...others }: DesktopIconProps) => (
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
    <g clipPath="url(#clip0_2007_5805)">
      <path d="M4.48438 17.3711H19.5078C20.6328 17.3711 21.3125 16.6914 21.3125 15.5664V6.19922C21.3125 5.07422 20.6328 4.40234 19.5078 4.40234H4.48438C3.36719 4.40234 2.6875 5.07422 2.6875 6.19922V15.5664C2.6875 16.6914 3.36719 17.3711 4.48438 17.3711ZM4.28125 13.9258C4.04688 13.9258 3.94531 13.8398 3.94531 13.5898V6.22266C3.94531 5.87109 4.16406 5.66016 4.50781 5.66016H19.4922C19.8359 5.66016 20.0547 5.87109 20.0547 6.22266V13.5898C20.0547 13.8398 19.9453 13.9258 19.7109 13.9258H4.28125ZM9.53125 19.2305H14.4687V17.2696H9.53125V19.2305ZM9.48438 20.1446H14.5156C14.8594 20.1446 15.1406 19.8633 15.1406 19.5117C15.1406 19.1602 14.8594 18.8789 14.5156 18.8789H9.48438C9.14062 18.8789 8.85156 19.1602 8.85156 19.5117C8.85156 19.8633 9.14062 20.1446 9.48438 20.1446Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5805">
        <rect width="18.625" height="16.2891" fill="white" transform="translate(2.6875 3.85547)" />
      </clipPath>
    </defs>
  </svg>
);
