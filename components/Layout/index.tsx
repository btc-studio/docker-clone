import Footer from './Footer';
import { ILayoutProps } from './interfaces';
import Navbar from './Navbar';

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
