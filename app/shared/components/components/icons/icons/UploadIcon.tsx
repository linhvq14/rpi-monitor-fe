'use client';

import { rem } from '@mantine/core';

interface UploadIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const UploadIcon = ({ size, style, ...others }: UploadIconProps) => (
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
    <g clipPath="url(#clip0_2007_5921)">
      <path d="M14.0781 15.4648V16.7226H17.9844C20.3828 16.7226 21.8203 15.2773 21.8203 13.3867C21.8203 11.8086 20.875 10.5117 19.3516 9.89453C19.3672 6.41015 16.8594 3.89453 13.6641 3.89453C11.5469 3.89453 10.0391 5.02734 9.10157 6.39453C7.32813 5.91796 5.08594 7.29296 5.04688 9.48828C3.28125 9.76172 2.17969 11.207 2.17969 13.0508C2.17969 15.082 3.70313 16.7226 6.26563 16.7226H9.99219V15.4648H6.25781C4.40625 15.4648 3.4375 14.3945 3.4375 13.0508C3.4375 11.5586 4.38281 10.4492 6.03907 10.4492C6.14844 10.4492 6.1875 10.3867 6.1875 10.2852C6.1875 7.88672 7.91407 7.22265 9.52344 7.6914C9.61719 7.72265 9.67188 7.70703 9.71875 7.62109C10.4766 6.26953 11.6406 5.15234 13.6641 5.15234C16.2266 5.15234 18 7.18359 18.1328 9.51172C18.1563 9.86328 18.1328 10.2852 18.1016 10.6523C18.0938 10.7539 18.1328 10.8164 18.2266 10.832C19.6485 11.1445 20.5625 12.0352 20.5625 13.3867C20.5625 14.5898 19.6875 15.4648 17.9766 15.4648H14.0781ZM12.0391 20.7226C12.375 20.7226 12.6563 20.4492 12.6563 20.1211V12.793L12.6094 11.3477L13.1328 11.9023L14.3203 13.082C14.4375 13.1992 14.5938 13.2695 14.7422 13.2695C15.0625 13.2695 15.3125 13.043 15.3125 12.7227C15.3125 12.5586 15.25 12.418 15.125 12.3086L12.4844 9.83984C12.3203 9.6914 12.1953 9.63672 12.0391 9.63672C11.875 9.63672 11.75 9.6914 11.5859 9.83984L8.94531 12.3086C8.82031 12.418 8.75781 12.5586 8.75781 12.7227C8.75781 13.043 8.99219 13.2695 9.32031 13.2695C9.46875 13.2695 9.63281 13.1992 9.75 13.082L10.9375 11.9023L11.4609 11.3477L11.4141 12.793V20.1211C11.4141 20.4492 11.7031 20.7226 12.0391 20.7226Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5921">
        <rect
          width="19.6406"
          height="17.4453"
          fill="white"
          transform="translate(2.17969 3.27734)"
        />
      </clipPath>
    </defs>
  </svg>
);
