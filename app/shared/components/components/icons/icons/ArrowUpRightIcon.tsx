'use client';

import { rem } from '@mantine/core';

interface ArrowUpRightIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ArrowUpRightIcon = ({ size, style, ...others }: ArrowUpRightIconProps) => (
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
    <g clipPath="url(#clip0_2007_5857)">
      <path d="M17.7696 14.8633L17.7617 7.00391C17.7617 6.55859 17.4727 6.24609 17.0039 6.24609H9.14453C8.70703 6.24609 8.41016 6.58203 8.41016 6.95703C8.41016 7.33204 8.74609 7.65235 9.11328 7.65235H11.832L15.6445 7.52735L14.1914 8.80078L6.44922 16.5586C6.30859 16.6993 6.23047 16.8789 6.23047 17.0508C6.23047 17.4258 6.56641 17.7774 6.95703 17.7774C7.13672 17.7774 7.30859 17.7149 7.44922 17.5665L15.207 9.81641L16.4961 8.35547L16.3555 12.0039V14.8945C16.3555 15.2617 16.6758 15.6055 17.0586 15.6055C17.4336 15.6055 17.7696 15.2852 17.7696 14.8633Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5857">
        <rect
          width="11.5391"
          height="11.5547"
          fill="white"
          transform="translate(6.23047 6.22266)"
        />
      </clipPath>
    </defs>
  </svg>
);
