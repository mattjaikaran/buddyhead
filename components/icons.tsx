/* eslint-disable @next/next/no-img-element */
import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  Instagram,
  type Icon as LucideIcon,
} from 'lucide-react';
import logo from '@/assets/images/logo-white.png';

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  instagram: Instagram,
  logo: (props: LucideProps) => (
    <img src={logo.src} width={100} alt="logo" {...props} />
  ),
};
