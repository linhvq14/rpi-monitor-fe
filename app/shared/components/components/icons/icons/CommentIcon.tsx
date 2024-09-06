'use client';

import { rem } from '@mantine/core';

interface CommentIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CommentIcon = ({ size, style, ...others }: CommentIconProps) => (
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
    <g clipPath="url(#clip0_2007_5858)">
      <path d="M6.05469 20.0742C6.46875 20.0742 6.75 19.9336 7.25 19.4961L10.5312 16.5586L9.625 15.6836L6.375 18.6836V16.4492C6.375 16.0039 6.10937 15.8008 5.76563 15.8008H4.24219C2.85937 15.8008 2.03906 15.043 2.03906 13.5899V6.47266C2.03906 5.01953 2.85937 4.2539 4.24219 4.2539H15.2656C16.6484 4.2539 17.4688 5.01953 17.4688 6.47266V7.5664H18.7265V6.42578C18.7265 4.30859 17.4688 3.07422 15.3438 3.07422H4.16406C2.125 3.07422 0.78125 4.30859 0.78125 6.42578V13.6211C0.78125 15.7461 2.125 16.9727 4.16406 16.9727H5.19531V19.1133C5.19531 19.7149 5.5 20.0742 6.05469 20.0742ZM18.7812 20.9492C19.3204 20.9492 19.625 20.5664 19.625 19.9727V18.0977H19.9531C21.914 18.0977 23.2188 16.9102 23.2188 14.8711V10.2539C23.2188 8.20703 21.914 7.01953 19.9531 7.01953H12.3672C10.3203 7.01953 9.10937 8.20703 9.10937 10.2539V14.8711C9.10937 16.918 10.3203 18.0977 12.3672 18.0977H15.0625L17.6719 20.332C18.1485 20.7383 18.4062 20.9492 18.7812 20.9492ZM18.4531 19.5352L15.9453 17.2852C15.6328 17.0117 15.4453 16.918 15.0156 16.918H12.4453C11.1406 16.918 10.3594 16.2149 10.3594 14.832L10.3672 10.293C10.3672 8.91797 11.1406 8.19922 12.4453 8.19922H19.8829C21.1797 8.19922 21.961 8.91797 21.961 10.293V14.832C21.961 16.2149 21.1797 16.918 19.8829 16.918H19.0546C18.7188 16.918 18.4531 17.1211 18.4531 17.5586V19.5352Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5858">
        <rect
          width="22.4375"
          height="17.8984"
          fill="white"
          transform="translate(0.78125 3.05078)"
        />
      </clipPath>
    </defs>
  </svg>
);
