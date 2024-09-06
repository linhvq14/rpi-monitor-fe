import { Lora } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const lora = Lora({
  subsets: ['vietnamese', 'latin'],
  display: 'swap',
});
