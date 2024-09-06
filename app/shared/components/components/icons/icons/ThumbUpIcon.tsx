'use client';

import { rem } from '@mantine/core';

interface ThumbUpIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ThumbUpIcon = ({ size, style, ...others }: ThumbUpIconProps) => (
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
    <g clipPath="url(#clip0_2007_5769)">
      <path d="M4.04297 14.7851C4.04297 17.3085 5.69141 19.4335 7.68359 19.4335H10.1758C11.168 19.957 12.3711 20.2617 13.7148 20.2617H14.7618C15.6992 20.2617 16.5118 20.207 17.0508 20.0742C18.0977 19.8164 18.7539 19.0898 18.7539 18.1679C18.7539 17.9726 18.7227 17.8007 18.6758 17.6289C19.1914 17.2382 19.4805 16.6679 19.4805 16.0429C19.4805 15.7382 19.418 15.4335 19.3086 15.1914C19.6602 14.832 19.8555 14.3085 19.8555 13.7617C19.8555 13.4101 19.7696 13.0352 19.6211 12.7617C19.8321 12.457 19.9571 12.0273 19.9571 11.5742C19.9571 10.4492 19.0742 9.55859 17.9492 9.55859H15.0977C14.9258 9.55859 14.8164 9.48046 14.8164 9.33203C14.8164 8.51953 16.0977 6.61328 16.0977 5.08203C16.0977 4.02734 15.3633 3.27734 14.3555 3.27734C13.6133 3.27734 13.1133 3.66016 12.6211 4.59765C11.707 6.35546 10.6133 7.93359 8.83203 10.1055H7.40235C5.54297 10.1055 4.04297 12.207 4.04297 14.7851ZM8.44141 14.7461C8.44141 13.1133 8.80859 12.0742 9.82422 10.707C10.957 9.1914 12.5273 7.3789 13.6602 5.1289C13.9414 4.55859 14.1289 4.43359 14.4024 4.43359C14.7227 4.43359 14.9414 4.66015 14.9414 5.08203C14.9414 6.30078 13.6602 8.14453 13.6602 9.33203C13.6602 10.1914 14.3633 10.7148 15.2618 10.7148H17.9492C18.4336 10.7148 18.8008 11.082 18.8008 11.5742C18.8008 11.9336 18.6836 12.1602 18.3946 12.457C18.2539 12.582 18.2383 12.7383 18.3555 12.8867C18.5977 13.2461 18.6992 13.4648 18.6992 13.7617C18.6992 14.1132 18.5352 14.4179 18.1914 14.6757C18.0039 14.8242 17.9258 15.0195 18.0352 15.2539C18.2305 15.6054 18.3242 15.7695 18.3242 16.0429C18.3242 16.4414 18.0664 16.7461 17.5196 17.0273C17.3477 17.1289 17.3086 17.2695 17.3789 17.4335C17.5664 17.9023 17.5899 17.9726 17.5899 18.1679C17.5899 18.5273 17.3242 18.8164 16.7774 18.957C16.3321 19.0664 15.6211 19.1132 14.7696 19.1132H13.8008C10.582 19.1132 8.44141 17.2851 8.44141 14.7461ZM5.19922 14.7851C5.19922 12.8398 6.24609 11.2617 7.40235 11.2617C7.62891 11.2617 7.85547 11.2617 8.08203 11.2617C7.52735 12.3086 7.28516 13.4023 7.28516 14.7226C7.28516 16.1211 7.78516 17.3398 8.68359 18.2695C8.34766 18.2695 8.01953 18.2695 7.68359 18.2695C6.36328 18.2695 5.19922 16.6757 5.19922 14.7851Z" />
    </g>
    <defs>
      <clipPath id="clip0_2007_5769">
        <rect
          width="15.9141"
          height="17.4453"
          fill="white"
          transform="translate(4.04297 3.27734)"
        />
      </clipPath>
    </defs>
  </svg>
);
