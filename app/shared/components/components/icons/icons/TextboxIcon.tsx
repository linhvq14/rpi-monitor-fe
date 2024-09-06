'use client';

import { rem } from '@mantine/core';

interface TextboxIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const TextboxIcon = ({ size, style, ...others }: TextboxIconProps) => (
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
    <g clipPath="url(#clip0_2007_5842)">
      <path d="M5.23828 19.1992H18.7617C20.4023 19.1992 21.2148 18.3867 21.2148 16.7774V14.4727C21.2148 14.0664 20.9882 13.8398 20.582 13.8398C20.1757 13.8398 19.957 14.0664 19.957 14.4727V16.7149C19.957 17.5274 19.5117 17.9414 18.7461 17.9414H5.26172C4.48046 17.9414 4.05078 17.5274 4.05078 16.7149V14.4727C4.05078 14.0664 3.8164 13.8398 3.41796 13.8398C3.01953 13.8398 2.79297 14.0664 2.79297 14.4727V16.7774C2.79297 18.3946 3.61328 19.1992 5.23828 19.1992ZM5.23828 4.81641C3.61328 4.81641 2.79297 5.62109 2.79297 7.23828V9.15234C2.79297 9.55859 3.01953 9.79297 3.41796 9.79297C3.8164 9.79297 4.05078 9.55859 4.05078 9.15234V7.30078C4.05078 6.48828 4.48046 6.07422 5.26172 6.07422H18.7461C19.5117 6.07422 19.957 6.48828 19.957 7.30078V9.15234C19.957 9.55859 20.1835 9.79297 20.582 9.79297C20.9961 9.79297 21.2148 9.55859 21.2148 9.15234V7.23828C21.2148 5.62891 20.4023 4.81641 18.7617 4.81641H5.23828ZM3.41796 12.8242C3.98046 12.8242 4.43359 12.3633 4.43359 11.8008C4.43359 11.2461 3.98046 10.793 3.41796 10.793C2.86328 10.793 2.40234 11.2461 2.40234 11.8008C2.40234 12.3633 2.86328 12.8242 3.41796 12.8242ZM20.582 12.8242C21.1367 12.8242 21.5976 12.3633 21.5976 11.8008C21.5976 11.2461 21.1367 10.793 20.582 10.793C20.0195 10.793 19.5664 11.2383 19.5664 11.8008C19.5664 12.3633 20.0195 12.8242 20.582 12.8242ZM9.4414 15.6758C9.72265 15.6758 9.91796 15.543 10.0352 15.1758L10.6055 13.5117H13.4023L13.9726 15.1758C14.0898 15.5352 14.2929 15.6758 14.5742 15.6758C14.9179 15.6758 15.1523 15.4492 15.1523 15.1367C15.1523 15.0117 15.1289 14.9024 15.0664 14.7305L12.8789 8.83203C12.7226 8.42578 12.4257 8.21484 11.9961 8.21484C11.5742 8.21484 11.2852 8.42578 11.1367 8.83203L8.9414 14.7305C8.88672 14.9024 8.85546 15.0117 8.85546 15.1289C8.85546 15.457 9.08984 15.6758 9.4414 15.6758ZM10.9258 12.5742L11.9648 9.55078H12.0508L13.0898 12.5742H10.9258Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5842">
        <rect
          width="19.1953"
          height="14.3984"
          fill="white"
          transform="translate(2.40234 4.80078)"
        />
      </clipPath>
    </defs>
  </svg>
);
