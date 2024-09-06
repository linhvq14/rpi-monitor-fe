'use client';

import { rem } from '@mantine/core';

interface TagIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const TagIcon = ({ size, style, ...others }: TagIconProps) => (
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
    <g clipPath="url(#clip0_2007_5830)">
      <path d="M12.4854 20.2774L20.1026 12.6445C20.6885 12.0586 20.7276 11.7227 20.7276 10.9023V7.93359C20.7276 7.10547 20.5323 6.84766 19.9385 6.25391L18.1417 4.45703C17.5557 3.87109 17.2979 3.66797 16.4698 3.66797H13.4932C12.6729 3.66797 12.3447 3.70703 11.7588 4.29297L4.11817 11.918C3.00099 13.0352 2.97755 14.1914 4.12599 15.3321L9.0713 20.2696C10.2197 21.4102 11.3682 21.3946 12.4854 20.2774ZM11.6416 19.3321C11.0791 19.8946 10.4854 19.9024 9.91505 19.3242L5.06349 14.4805C4.49317 13.9102 4.50099 13.3086 5.05567 12.7539L12.6416 5.18359C12.7979 5.02734 12.9619 4.92578 13.2276 4.92578H16.5167C16.7588 4.92578 16.9229 5.01953 17.087 5.18359L19.2198 7.30859C19.3838 7.47266 19.4698 7.63672 19.4698 7.87891V11.1758C19.4698 11.4336 19.376 11.5977 19.2198 11.7539L11.6416 19.3321ZM15.5557 9.91797C16.1651 9.91797 16.626 9.44141 16.626 8.84766C16.626 8.24609 16.1651 7.77734 15.5557 7.77734C14.9385 7.77734 14.4854 8.24609 14.4854 8.84766C14.4854 9.44141 14.9385 9.91797 15.5557 9.91797Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5830">
        <rect
          width="17.4551"
          height="18.2402"
          fill="white"
          transform="translate(3.27246 2.87988)"
        />
      </clipPath>
    </defs>
  </svg>
);
