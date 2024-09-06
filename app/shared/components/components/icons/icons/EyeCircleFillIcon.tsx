'use client';

import { rem } from '@mantine/core';

interface EyeCircleFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const EyeCircleFillIcon = ({ size, style, ...others }: EyeCircleFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5772)">
      <path d="M12 19.9726C16.3594 19.9726 19.9688 16.3632 19.9688 12.0039C19.9688 7.65234 16.3516 4.03516 11.9922 4.03516C7.64063 4.03516 4.03125 7.65234 4.03125 12.0039C4.03125 16.3632 7.64844 19.9726 12 19.9726ZM12 15.3085C8.92969 15.3085 6.73437 12.793 6.73437 12.0117C6.73437 11.2227 8.90625 8.71484 12 8.71484C15.0938 8.71484 17.2578 11.2227 17.2578 12.0117C17.2578 12.793 15.1016 15.3085 12 15.3085ZM12 14.1679C13.1953 14.1679 14.1641 13.1836 14.1641 12.0117C14.1641 10.8086 13.1953 9.85546 12 9.85546C10.7969 9.85546 9.82813 10.8086 9.83594 12.0117C9.83594 13.1836 10.7969 14.1679 12 14.1679ZM12.0078 12.9648C11.4922 12.9648 11.0469 12.5117 11.0469 12.0117C11.0469 11.5039 11.4922 11.0586 12.0078 11.0586C12.5156 11.0586 12.9531 11.5039 12.9531 12.0117C12.9531 12.5117 12.5156 12.9648 12.0078 12.9648Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5772">
        <rect
          width="15.9375"
          height="15.9453"
          fill="white"
          transform="translate(4.03125 4.02734)"
        />
      </clipPath>
    </defs>
  </svg>
);
