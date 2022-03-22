import classNames from 'classnames';

import { IMenuIconProps } from './interfaces';

export default function MenuIcon({ isHome, open, setIsOpen }: IMenuIconProps) {
  const color = isHome ? 'bg-white' : 'bg-sky-700';

  return (
    <div
      id="nav-icon"
      className={classNames({ open: open })}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className={color}></span>
      <span className={color}></span>
    </div>
  );
}
