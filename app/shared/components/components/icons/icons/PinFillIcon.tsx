'use client';

import { rem } from '@mantine/core';

interface PinFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const PinFillIcon = ({ size, style, ...others }: PinFillIconProps) => (
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
    <g clipPath="url(#clip0_2007_5851)">
      <path d="M5.54127 11.054C5.20922 11.6292 5.37612 12.2307 5.98504 12.5823L9.64535 14.6956L7.82115 17.8552C7.2235 18.8903 7.16042 19.9996 7.32956 20.0972C7.49194 20.191 8.42105 19.5817 9.0187 18.5466L10.8429 15.387L14.5032 17.5003C15.1121 17.8518 15.7165 17.6956 16.0486 17.1204C16.8728 15.6929 16.6005 13.5239 15.0977 11.7362L16.6674 8.50175C17.9794 8.5105 19.1585 8.34326 19.7721 8.09309C20.0808 7.96461 20.3015 7.78533 20.4187 7.58235C20.657 7.16963 20.5148 6.68157 20.0412 6.40817L12.8288 2.24409C12.3485 1.96675 11.8615 2.09153 11.6232 2.50424C11.506 2.70722 11.4544 2.98413 11.4975 3.31572C11.5876 3.97216 12.0323 5.0769 12.6959 6.20878L10.6796 9.18538C8.37999 8.77784 6.36547 9.62649 5.54127 11.054Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5851">
        <rect
          width="12.1328"
          height="18.6953"
          fill="white"
          transform="translate(11.4202 0.87149) rotate(30)"
        />
      </clipPath>
    </defs>
  </svg>
);
