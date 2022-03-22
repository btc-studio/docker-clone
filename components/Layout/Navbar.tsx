import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MenuIcon from './MenuIcon';
import { ImPlus } from 'react-icons/im';
import Logo from '../../public/newLogo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const isHome = router.pathname === '/';
  const bgColor = isHome
    ? 'text-white mdm:bg-transparent'
    : 'text-slate-600 mdm:bg-white';

  const color = isHome ? 'text-white ' : 'text-white mdm:text-slate-600';

  const navbar = [
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'Products',
      hasSub: true,
      showSubmenus: () => setShow1((prev) => !prev),
      isShowSub: show1,
      submenus: [
        {
          href: '/about',
          title: 'Product Offerrings',
          menus: [
            {
              href: '/about',
              title: 'Docker Personal',
            },
            {
              href: '/about',
              title: ' Docker Pro',
            },
            {
              href: '/about',
              title: 'Docker Team',
            },
            {
              href: '/about',
              title: 'Docker Business',
            },
            {
              href: '/about',
              title: 'Desktop vs Docker Engine',
            },
          ],
        },
        {
          href: '/about',
          title: 'Features',
          menus: [
            {
              href: '/about',
              title: 'Secure Software Supply Chain',
            },
            {
              href: '/about',
              title: ' Container Runtime',
            },
            {
              href: '/about',
              title: 'Developer Tools',
            },
            {
              href: '/about',
              title: 'Trusted Content',
            },
            {
              href: '/about',
              title: 'Docker Desktop',
            },
            {
              href: '/about',
              title: 'Docker Hub',
            },
            {
              href: '/about',
              title: 'Docker Product Roadmap',
            },
            {
              href: '/about',
              title: 'Support',
            },
          ],
        },
      ],
    },
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'Developers',
      showSubmenus: () => setShow2((prev) => !prev),
      isShowSub: show2,
      submenus: [
        {
          href: '/about',
          title: 'Docs',
        },
        {
          href: '/about',
          title: 'Getting started',
        },
        {
          href: '/about',
          title: 'Community',
        },
        {
          href: '/about',
          title: 'Open Source',
        },
        {
          href: '/about',
          title: 'Previre Program',
        },
      ],
    },
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'Pricing',
      submenus: [],
    },
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'Blog',
      submenus: [],
    },
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'About us',
      showSubmenus: () => setShow3((prev) => !prev),
      isShowSub: show3,
      submenus: [
        {
          href: '/about',
          title: 'Why Docker',
        },
        {
          href: '/about',
          title: 'Virtual Events',
        },
        {
          href: '/about',
          title: 'Swag Store',
        },
        {
          href: '/about',
          title: 'Careers',
        },
      ],
    },
    {
      onClick: () => setIsOpen(false),
      href: '/about',
      title: 'Partners',
      submenus: [],
    },
  ];

  const handleShowSearchBox = () => setSearch((prev) => !prev);

  useEffect(() => {
    search && inputRef.current?.focus();
  }, [search]);

  return (
    <div className="absolute top-0 w-full">
      <nav
        className={`relative mx-2 px-2 mdm:m-0 py-4 mdm:px-10 mdm:py-6 mdm:flex mdm:items-center ${bgColor}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/">
            <div>
              <Image
                src={Logo}
                width={160}
                height={42}
                className={
                  isHome ? 'cursor-pointer' : 'cursor-pointer bluefill'
                }
              />
            </div>
          </Link>
          <div className="block mdm:hidden">
            <MenuIcon open={isOpen} isHome={isHome} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div
          className={
            isOpen
              ? ` bg-sky-600 mdm:bg-transparent mt-6 mdm:mt-0 px-4 mdm:px-0 mdm:grow mdm:flex mdm:justify-between mdm:ml-6 mdm:h-11 absolute mdm:relative on ${color}`
              : `bg-sky-600 px-4 mdm:px-0 mt-6 mdm:mt-0 mdm:grow mdm:flex mdm:justify-between mdm:ml-6 mdm:h-11 absolute mdm:relative off ${color}`
          }
        >
          <div className="relative my-7 mdm:hidden">
            <input
              className="w-full py-1.5 px-4 bg-blue-400 rounded"
              type="text"
            />
            <FiSearch className="absolute top-1/4 right-3" />
          </div>

          {navbar.map((item, idx) => (
            <ul
              key={idx}
              className={
                search
                  ? 'mdm:items-center mdm:hidden'
                  : 'mdm:flex mdm:items-center  '
              }
            >
              <li className="font-medium py-2 px-1.5  lg:px-3 xl:px-6 relative group">
                <div className="flex items-center justify-between">
                  <div
                    onClick={item.onClick}
                    className="hover:underline hover:decoration-1"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </div>
                  {item.submenus.length ? (
                    <ImPlus
                      size={10}
                      className="mdm:hidden cursor-pointer p-3 box-content"
                      onClick={item.showSubmenus}
                    />
                  ) : null}
                </div>

                {item.submenus.length ? (
                  <div className=" mdm:absolute  mdm:group-hover:block mdm:hidden mdm:wrapper">
                    <div className="mdm:bg-white mdm:arrow mdm:mt-4 mdm:text-slate-700 mdm:rounded">
                      <div
                        className={
                          item.hasSub
                            ? 'ml-6 mdm:ml-0 mdm:flex mdm:w-max mdm:min-w-300 mdm:py-6 mdm:px-5 mdm:gap-8'
                            : 'ml-6 mdm:ml-0 mdm:min-w-300 mdm:w-max mdm:py-6 mdm:px-5 mdm:gap-8'
                        }
                      >
                        {item.hasSub ? (
                          item.submenus.map((sub, idx) => (
                            <div
                              key={idx}
                              className={
                                item.isShowSub ? 'block' : 'hidden mdm:block'
                              }
                            >
                              <div className="text-slate-500">{sub.title}</div>
                              <ul className="ml-6 mdm:ml-0">
                                {sub.menus.map((menu, idx) => (
                                  <li
                                    key={idx}
                                    className="my-3 hover:underline hover:decoration-1"
                                  >
                                    <Link href={menu.href}>{menu.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))
                        ) : (
                          <div
                            key={idx}
                            className={
                              item.isShowSub ? 'block' : 'hidden mdm:block'
                            }
                          >
                            <ul>
                              {item.submenus.map((sub, idx) => (
                                <li
                                  key={idx}
                                  className="my-3 hover:underline hover:decoration-1"
                                >
                                  <Link href={sub.href}>{sub.title}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          ))}

          <div className="md:flex md:items-center md:ml-auto">
            <input
              ref={inputRef}
              className={
                search
                  ? 'hidden md:block py-2 px-10 pl-6 bg-sky-500 rounded-sm border-b outline-none '
                  : 'hidden'
              }
              autoFocus
              type="text"
            />
            <FiSearch
              className="hidden mdm:inline md:cursor-pointer md:ml-2 "
              onClick={handleShowSearchBox}
            />
            <div className="hidden font-medium mdm:block md:hover:underline md:mr-6 lg:mr-8 xl:mr-10 md:ml-2">
              Sign In
            </div>
            <button className="my-8 w-full mdm:my-0 mdm:px-6 text-white  py-2 rounded font-semibold bg-blue-900 mdm:w-auto mdm:transition mdm:duration-200 mdm:hover:bg-slate-200 mdm:hover:text-sky-600">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
