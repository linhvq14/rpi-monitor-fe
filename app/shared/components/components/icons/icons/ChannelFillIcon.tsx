'use client';

import { rem } from '@mantine/core';

interface ChannelFillIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChannelFillIcon = ({ size, style, ...others }: ChannelFillIconProps) => (
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
    <path d="M19.8327 10.3886L12.4224 2.97721C11.9854 2.54125 11.2784 2.5464 10.8471 2.97665C10.4133 3.41154 10.4133 4.11766 10.8471 4.55199L18.2584 11.9629C18.6926 12.397 19.3985 12.397 19.8327 11.9629C20.2681 11.5275 20.2681 10.8239 19.8327 10.3886Z" />
    <path d="M10.2972 5.57654L10.2414 5.85612C9.84857 7.82136 8.89374 9.68838 7.60229 11.2016L11.6341 15.2334C13.1472 13.9422 14.9884 12.9618 16.9538 12.5684L17.2339 12.5126L10.2972 5.57654Z" />
    <path d="M6.86323 12.0367L4.10774 14.7917C3.45665 15.4428 3.45394 16.4998 4.10774 17.1536L5.682 18.7278C6.33308 19.3789 7.39011 19.3816 8.0439 18.7278L10.7991 15.9726L6.86323 12.0367ZM7.25681 16.3665C7.03939 16.5839 6.68711 16.5839 6.46968 16.3665C6.25226 16.1491 6.25226 15.7968 6.46968 15.5794L7.25681 14.7922C7.47423 14.5748 7.82651 14.5748 8.04394 14.7922C8.26136 15.0097 8.26136 15.3619 8.04394 15.5794L7.25681 16.3665Z" />
    <path d="M13.1233 19.024L13.8805 18.2668C14.5343 17.6131 14.5322 16.5561 13.8805 15.9055L13.3181 15.3427C13.0072 15.5515 12.7103 15.7784 12.4217 16.0205L13.0934 16.6931C13.3103 16.9089 13.3118 17.2601 13.0934 17.4797L12.3237 18.2494L11.1925 17.1535L9.61816 18.7278L12.1437 21.1751C12.5747 21.6072 13.2824 21.6096 13.7174 21.1745C14.1518 20.7402 14.1518 20.0341 13.7174 19.5997L13.1233 19.024Z" />
    <path d="M15.3718 2.5C15.0642 2.5 14.8152 2.74897 14.8152 3.05664V4.16993C14.8152 4.4776 15.0642 4.72657 15.3718 4.72657C15.6795 4.72657 15.9285 4.4776 15.9285 4.16993V3.05664C15.9285 2.74897 15.6795 2.5 15.3718 2.5Z" />
    <path d="M19.825 6.95312H18.7117C18.404 6.95312 18.155 7.20209 18.155 7.50977C18.155 7.81744 18.404 8.06641 18.7117 8.06641H19.825C20.1326 8.06641 20.3816 7.81744 20.3816 7.50977C20.3816 7.20209 20.1326 6.95312 19.825 6.95312Z" />
    <path d="M19.1052 3.77635C18.8878 3.55893 18.5355 3.55893 18.3181 3.77635L17.2048 4.88963C16.9874 5.10706 16.9874 5.45934 17.2048 5.67676C17.4222 5.89419 17.7745 5.89422 17.9919 5.67676L19.1052 4.56348C19.3227 4.34605 19.3227 3.99377 19.1052 3.77635Z" />
  </svg>
);
