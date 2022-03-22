import { SetStateAction } from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

export interface IMenuIconProps {
  open: boolean;
  isHome: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}
