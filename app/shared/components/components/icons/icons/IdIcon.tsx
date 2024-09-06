'use client';

import { rem } from '@mantine/core';

interface IdIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export const IdIcon = ({ size, style, ...others }: IdIconProps) => (
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
    <path d="M3.95837 6.86545H10.8241V8.71391H8.35946V15.2862H10.8241V17.1347H3.95837V15.2862H6.42298V8.71391H3.95837V6.86545Z" />
    <path d="M12.5596 6.86545H16.2859C17.5573 6.86545 18.5011 7.16374 19.1173 7.76034C19.7334 8.34715 20.0415 9.2616 20.0415 10.5037V13.4964C20.0415 14.7385 19.7334 15.6578 19.1173 16.2544C18.5011 16.8412 17.5573 17.1347 16.2859 17.1347H12.5596V15.2715H13.5279V8.71391H12.5596V6.86545ZM16.2859 15.2862C16.9607 15.2862 17.4302 15.1297 17.6942 14.8167C17.9681 14.494 18.105 13.9952 18.105 13.3204V10.5037C18.105 9.91687 17.9681 9.47187 17.6942 9.16868C17.4302 8.8655 16.9607 8.71391 16.2859 8.71391H15.4644V15.2862H16.2859Z" />
  </svg>
);
