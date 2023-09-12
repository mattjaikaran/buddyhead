/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  Instagram,
  // @ts-ignore
  type Icon as LucideIcon,
} from 'lucide-react';
// import logo from '@/assets/images/logo-white.png';
// import logoPink from '@/assets/images/logo-pink.png';

const logo =
  'https://buddyhead-app-xvgeb.ondigitalocean.app/uploads/logo_white_29f0b0a051.PNG';
const logoPink =
  'https://buddyhead-app-xvgeb.ondigitalocean.app/uploads/logo_pink_ae3ebca285.PNG';
// const logo = 'https://buddyhead-app-xvgeb.ondigitalocean.app/uploads/';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  instagram: Instagram,
  logo: (props: LucideProps) => (
    <img src={logo} width={100} alt="logo" {...props} />
  ),
  logoPink: (props: LucideProps) => (
    <img src={logoPink} width={100} alt="logo" {...props} />
  ),
};
