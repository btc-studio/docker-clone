import Footer from './Footer';
import Navbar from './Navbar';

import { ILayoutProps } from './interfaces';

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
