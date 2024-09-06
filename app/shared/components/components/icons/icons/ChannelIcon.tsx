'use client';

import { rem } from '@mantine/core';

interface ChannelIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const ChannelIcon = ({ size, style, ...others }: ChannelIconProps) => (
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
    <path d="M19.087 9.99293L12.791 3.69693C12.1401 3.04603 11.0809 3.04599 10.43 3.69693C9.84487 4.28203 9.79448 5.1744 10.2266 5.8116L10.2178 5.85543C9.7639 8.12522 8.65882 10.1901 7.02197 11.8269L4.13416 14.7148C3.4817 15.3672 3.48159 16.4232 4.13416 17.0757L5.70811 18.6497C6.36053 19.3021 7.41659 19.3022 8.06908 18.6497L8.46259 18.2562L11.2171 21.0106C11.8695 21.6631 12.9255 21.6632 13.578 21.0106C14.2289 20.3597 14.2289 19.3006 13.578 18.6497L12.3975 17.4692L12.791 17.0757C13.4435 16.4233 13.4435 15.3673 12.791 14.7148L12.5236 14.4473C13.8391 13.5263 15.3331 12.8851 16.9285 12.566L16.9729 12.5571C17.6243 12.9969 18.5146 12.9262 19.087 12.3538H19.087C19.7378 11.703 19.7378 10.6439 19.087 9.99293ZM7.2821 17.8627C7.06464 18.0801 6.71255 18.0802 6.49509 17.8627L4.92114 16.2887C4.70364 16.0712 4.70364 15.7192 4.92114 15.5017L7.67557 12.7473L10.0365 15.1082C9.76705 15.3777 7.55823 17.5865 7.2821 17.8627ZM12.791 19.4367C13.0079 19.6536 13.0079 20.0067 12.791 20.2236C12.574 20.4406 12.2209 20.4406 12.004 20.2236L9.24953 17.4692L10.0365 16.6822L12.791 19.4367ZM10.8235 15.8952C10.9908 15.7279 11.2412 15.4717 11.6364 15.1341L12.004 15.5017C12.2215 15.7192 12.2215 16.0712 12.004 16.2887L11.6105 16.6822L10.8235 15.8952ZM10.8472 14.3449L8.43884 11.9366C9.72946 10.4463 10.6537 8.68716 11.1482 6.77603L16.0077 11.6356C14.0966 12.13 12.3375 13.0543 10.8472 14.3449ZM18.2999 11.5668C18.0824 11.7843 17.7304 11.7843 17.5129 11.5668L11.217 5.27088C10.9995 5.05335 10.9995 4.7014 11.217 4.4839C11.4345 4.26641 11.7865 4.26641 12.004 4.4839L18.2999 10.7798C18.5168 10.9968 18.5168 11.3498 18.2999 11.5668Z" />
    <path d="M8.06897 14.7146C7.85169 14.4973 7.4993 14.4973 7.28199 14.7146L6.49502 15.5016C6.2777 15.7189 6.2777 16.0713 6.49502 16.2886C6.71229 16.5059 7.06472 16.5059 7.28199 16.2886L8.06897 15.5016C8.28628 15.2843 8.28628 14.9319 8.06897 14.7146Z" />
    <path d="M15.3468 2.5C15.0394 2.5 14.7903 2.74915 14.7903 3.05649V4.16947C14.7903 4.47681 15.0394 4.72596 15.3468 4.72596C15.6541 4.72596 15.9033 4.47681 15.9033 4.16947V3.05649C15.9033 2.74915 15.6541 2.5 15.3468 2.5Z" />
    <path d="M19.7989 6.9519H18.6859C18.3785 6.9519 18.1294 7.20106 18.1294 7.5084C18.1294 7.81573 18.3785 8.06489 18.6859 8.06489H19.7989C20.1062 8.06489 20.3554 7.81573 20.3554 7.5084C20.3554 7.20106 20.1062 6.9519 19.7989 6.9519Z" />
    <path d="M19.0793 3.7759C18.862 3.55859 18.5096 3.55859 18.2923 3.7759L17.1793 4.88888C16.962 5.10619 16.962 5.45855 17.1793 5.67586C17.3966 5.89317 17.749 5.89321 17.9663 5.67586L19.0793 4.56288C19.2966 4.34556 19.2966 3.99325 19.0793 3.7759Z" />
  </svg>
);
