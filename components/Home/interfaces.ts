import { RefObject } from 'react';

export interface IPartnersProps {
  isEntered: boolean;
}

export interface IToolsProps extends IPartnersProps {
  imageRef: RefObject<HTMLDivElement>;
}
