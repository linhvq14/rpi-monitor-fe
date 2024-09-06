'use client';

import { rem } from '@mantine/core';

interface CampaignSlashIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const CampaignSlashIcon = ({ size, style, ...others }: CampaignSlashIconProps) => (
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
    <g clipPath="url(#clip0_2007_5845)">
      <path d="M13.5977 20.5586C14.1602 20.5586 14.5586 20.0742 14.8476 19.3242L19.9648 5.95703C20.1055 5.59766 20.1836 5.27735 20.1836 5.01172C20.1836 4.50391 19.8711 4.19141 19.3633 4.19141C19.0976 4.19141 18.7773 4.26953 18.418 4.41016L4.98047 9.5586C4.32422 9.8086 3.81641 10.207 3.81641 10.7773C3.81641 11.4961 4.36328 11.7383 5.11329 11.9648L9.33203 13.2461C9.83203 13.4023 10.1133 13.3867 10.4492 13.0742L19.0195 5.06641C19.1211 4.97266 19.2383 4.98829 19.3164 5.0586C19.3945 5.13672 19.4023 5.25391 19.3086 5.35547L11.332 13.957C11.0273 14.2773 11.0039 14.543 11.1523 15.0664L12.3945 19.1914C12.6289 19.9805 12.8711 20.5586 13.5977 20.5586Z" />
      <path
        d="M6.39256 4.87949C5.9747 4.46163 5.29721 4.46163 4.87935 4.87949C4.46149 5.29735 4.46149 5.97484 4.87935 6.3927L17.6073 19.1206C18.0251 19.5385 18.7026 19.5385 19.1205 19.1206C19.5383 18.7028 19.5383 18.0253 19.1205 17.6074L6.39256 4.87949Z"
        stroke="white"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2007_5845">
        <rect
          width="16.3672"
          height="17.1172"
          fill="white"
          transform="translate(3.81641 3.44141)"
        />
      </clipPath>
    </defs>
  </svg>
);
