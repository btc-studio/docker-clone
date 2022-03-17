import { useEffect, useRef, useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navbar = [
  {
    href: '/about',
    title: 'Products',
    hasSub: true,
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
    href: '/about',
    title: 'Developers',
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
    href: '/about',
    title: 'Pricing',
    submenus: [],
  },
  {
    href: '/about',
    title: 'Blog',
    submenus: [],
  },
  {
    href: '/about',
    title: 'About us',
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
    href: '/about',
    title: 'Partners',
    submenus: [],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const isHome = router.pathname === '/';
  const bgColor = isHome
    ? 'text-white md:bg-transparent'
    : 'text-slate-600 md:bg-white';

  const handleOpenMenu = () => setIsOpen((prev) => !prev);
  const handleShowSearchBox = () => setSearch((prev) => !prev);

  useEffect(() => {
    search && inputRef.current?.focus();
  }, [search]);

  return (
    <nav
      className={
        isOpen
          ? `transition-all duration-200  absolute top-0 w-full p-4 md:px-10 md:py-6  h-max md:transition-none md:duration-0 md:h-auto bg-sky-600 ${bgColor} md:flex md:items-center`
          : `transition-all duration-200  absolute top-0 w-full p-4 md:px-10 md:py-6 h-0 md:transition-none md:duration-0 md:h-auto ${bgColor} md:flex`
      }
    >
      <div className="flex justify-between">
        <div className="cursor-pointer">
          <Link href="/">
            <svg
              width="160"
              viewBox="0 0 324.36 82.46"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              overflow="hidden"
            >
              <path
                d="M503 522.91C503.01 521.535 502.734 520.173 502.19 518.91 501.666 517.685 500.916 516.569 499.98 515.62 499.036 514.67 497.92 513.91 496.69 513.38 494.099 512.279 491.171 512.279 488.58 513.38 486.111 514.437 484.149 516.413 483.11 518.89 482.034 521.448 482.034 524.332 483.11 526.89 484.149 529.367 486.111 531.343 488.58 532.4 491.171 533.501 494.099 533.501 496.69 532.4 497.92 531.87 499.036 531.11 499.98 530.16 500.916 529.211 501.666 528.095 502.19 526.87 502.728 525.619 503.004 524.272 503 522.91ZM492.64 506.4C496.41 506.342 500.079 507.617 503 510L503 495.31C502.961 493.654 504.272 492.279 505.928 492.24 505.976 492.239 506.023 492.239 506.07 492.24 506.892 492.216 507.687 492.531 508.27 493.11 508.867 493.683 509.194 494.482 509.17 495.31L509.17 522.91C509.255 527.308 507.501 531.541 504.33 534.59 497.879 541.034 487.426 541.029 480.981 534.579 474.537 528.128 474.542 517.674 480.993 511.23 484.086 508.14 488.278 506.403 492.65 506.4ZM545.64 522.91C545.725 527.308 543.971 531.541 540.8 534.59 534.355 540.946 523.977 540.873 517.622 534.428 511.266 527.983 511.338 517.606 517.783 511.25 524.229 504.894 534.606 504.966 540.962 511.412 542.431 512.902 543.602 514.659 544.41 516.59 545.232 518.596 545.664 520.742 545.68 522.91ZM529.13 512.56C527.73 512.549 526.344 512.831 525.06 513.39 522.591 514.447 520.629 516.423 519.59 518.9 518.514 521.458 518.514 524.342 519.59 526.9 520.629 529.377 522.591 531.353 525.06 532.41 527.651 533.511 530.579 533.511 533.17 532.41 534.4 531.88 535.516 531.12 536.46 530.17 537.396 529.221 538.146 528.105 538.67 526.88 539.754 524.323 539.754 521.437 538.67 518.88 538.146 517.655 537.396 516.539 536.46 515.59 535.516 514.64 534.4 513.88 533.17 513.35 531.905 512.815 530.543 512.546 529.17 512.56ZM574.27 530.07C575.926 530.031 577.301 531.342 577.34 532.998 577.341 533.046 577.341 533.093 577.34 533.14 577.336 534.003 576.974 534.825 576.34 535.41 569.436 541.367 559.011 540.599 553.054 533.696 547.098 526.792 547.865 516.367 554.769 510.41 560.965 505.063 570.143 505.063 576.34 510.41 577.024 510.989 577.412 511.844 577.4 512.74 577.426 513.565 577.112 514.364 576.53 514.95 575.948 515.533 575.153 515.851 574.33 515.83 573.601 515.834 572.893 515.583 572.33 515.12 571.392 514.312 570.328 513.664 569.18 513.2 568.032 512.758 566.81 512.538 565.58 512.55 564.206 512.546 562.844 512.821 561.58 513.36 560.35 513.882 559.231 514.632 558.28 515.57 557.33 516.511 556.573 517.629 556.05 518.86 554.969 521.445 554.969 524.355 556.05 526.94 556.573 528.171 557.33 529.289 558.28 530.23 559.231 531.168 560.351 531.918 561.58 532.44 562.844 532.979 564.206 533.255 565.58 533.25 566.809 533.263 568.029 533.049 569.18 532.62 570.325 532.172 571.384 531.529 572.31 530.72 572.888 530.291 573.59 530.063 574.31 530.07ZM580.91 536.32 580.91 495.32C580.893 493.625 582.254 492.237 583.95 492.22 583.97 492.22 583.99 492.22 584.01 492.22 584.826 492.213 585.609 492.537 586.18 493.12 586.77 493.698 587.096 494.494 587.08 495.32L587.08 518.32 604.71 506.85C605.203 506.536 605.776 506.373 606.36 506.38 606.775 506.378 607.187 506.459 607.57 506.62 607.946 506.768 608.286 506.993 608.57 507.28 608.847 507.572 609.071 507.91 609.23 508.28 609.396 508.651 609.482 509.053 609.48 509.46 609.546 510.428 609.098 511.359 608.3 511.91L595.95 519.91 608.63 534.18C609.182 534.76 609.49 535.53 609.49 536.33 609.492 536.737 609.406 537.139 609.24 537.51 609.081 537.88 608.857 538.218 608.58 538.51 608.296 538.797 607.956 539.022 607.58 539.17 607.197 539.331 606.785 539.412 606.37 539.41 605.604 539.43 604.862 539.142 604.31 538.61L590.69 523.31 587.09 525.67 587.09 536.31C587.1 537.129 586.775 537.917 586.19 538.49 585.626 539.083 584.839 539.413 584.02 539.4 583.193 539.413 582.396 539.084 581.82 538.49 581.248 537.914 580.935 537.131 580.95 536.32ZM639.23 519.84C638.908 518.763 638.404 517.748 637.74 516.84 636.447 515.067 634.632 513.742 632.55 513.05 631.5 512.697 630.398 512.518 629.29 512.52 628.178 512.519 627.074 512.698 626.02 513.05 624.976 513.395 623.992 513.897 623.1 514.54 622.215 515.179 621.439 515.955 620.8 516.84 620.148 517.748 619.661 518.763 619.36 519.84ZM637.9 530.13C639.556 530.074 640.943 531.372 640.999 533.027 641.001 533.085 641.001 533.143 641 533.2 641.017 534.025 640.699 534.822 640.12 535.41 633.222 541.373 622.796 540.615 616.833 533.717 610.87 526.819 611.628 516.393 618.526 510.43 621.527 507.835 625.363 506.408 629.33 506.41 635.997 506.452 642.005 510.442 644.63 516.57 645.448 518.586 645.859 520.744 645.84 522.92 645.864 523.748 645.537 524.547 644.94 525.12 644.357 525.699 643.562 526.014 642.74 525.99L619.4 525.99C619.72 527.065 620.217 528.079 620.87 528.99 621.508 529.872 622.28 530.648 623.16 531.29 624.041 531.932 625.016 532.435 626.05 532.78 627.11 533.135 628.222 533.314 629.34 533.31 630.555 533.324 631.764 533.124 632.91 532.72 634.008 532.314 635.024 531.715 635.91 530.95 636.47 530.448 637.188 530.158 637.94 530.13ZM655.36 509.46 655.36 510.05C656.804 508.889 658.429 507.974 660.17 507.34 661.947 506.704 663.822 506.386 665.71 506.4 666.643 506.405 667.574 506.465 668.5 506.58 669.435 506.684 670.354 506.895 671.24 507.21 672.013 507.476 672.722 507.902 673.32 508.46 673.875 508.999 674.176 509.747 674.15 510.52 674.154 510.936 674.068 511.349 673.9 511.73 673.741 512.1 673.517 512.438 673.24 512.73 672.956 513.017 672.616 513.242 672.24 513.39 671.857 513.551 671.445 513.632 671.03 513.63 670.579 513.613 670.137 513.504 669.73 513.31 668.455 512.813 667.098 512.562 665.73 512.57 664.355 512.565 662.994 512.841 661.73 513.38 659.249 514.425 657.275 516.399 656.23 518.88 655.691 520.144 655.416 521.505 655.42 522.88L655.42 536.32C655.42 538.016 654.045 539.39 652.35 539.39 651.524 539.406 650.728 539.08 650.15 538.49 649.567 537.919 649.242 537.136 649.25 536.32L649.25 509.46C649.243 508.644 649.568 507.861 650.15 507.29 650.728 506.7 651.524 506.374 652.35 506.39 654.046 506.39 655.42 507.764 655.42 509.46Z"
                stroke="#000000"
                strokeWidth="1.33333"
                fill={isHome || isOpen ? '#FFFFFF' : '#2496ed'}
                transform="translate(-349.82 -470.77)"
              />
              <path
                d="M461.73 502.24C459.16 500.45 453.26 499.79 448.65 500.68 448.11 496.22 445.65 492.31 441.36 488.85L438.89 487.06 437.17 489.63C434.936 493.397 433.926 497.765 434.28 502.13 434.465 504.549 435.237 506.887 436.53 508.94 433.852 510.329 430.866 511.017 427.85 510.94L350.34 510.94 350.13 511.83C349.38 516.29 349.38 530.24 358.13 540.95 364.78 549.1 374.64 553.22 387.61 553.22 415.7 553.22 436.5 539.72 446.25 515.28 450.11 515.39 458.36 515.28 462.55 506.91 462.66 506.69 462.87 506.24 463.62 504.57L464.05 503.68 461.69 502.23ZM412.3 470.77 400.51 470.77 400.51 481.93 412.3 481.93 412.3 470.77ZM412.3 484.16 400.51 484.16 400.51 495.32 412.3 495.32 412.3 484.16ZM398.36 484.16 386.57 484.16 386.57 495.32 398.36 495.32 398.36 484.16ZM384.42 484.16 372.64 484.16 372.64 495.32 384.43 495.32 384.43 484.16ZM370.48 497.55 358.7 497.55 358.7 508.71 370.49 508.71 370.49 497.55ZM384.42 497.55 372.64 497.55 372.64 508.71 384.43 508.71 384.43 497.55ZM398.36 497.55 386.57 497.55 386.57 508.71 398.36 508.71 398.36 497.55ZM412.3 497.55 400.51 497.55 400.51 508.71 412.3 508.71 412.3 497.55ZM426.24 497.55 414.45 497.55 414.45 508.71 426.24 508.71 426.24 497.55Z"
                stroke="#000000"
                strokeWidth="1.33333"
                fill={isHome || isOpen ? '#FFFFFF' : '#2496ed'}
                transform="translate(-349.82 -470.77)"
              />
            </svg>
          </Link>
        </div>
        <div
          className="cursor-pointer block md:hidden"
          onClick={handleOpenMenu}
        >
          {isOpen ? <CgClose size={40} /> : <HiMenuAlt4 size={40} />}
        </div>
      </div>

      <div
        className={
          isOpen
            ? 'transition-all duration-200 ease-linear overflow-hidden md:overflow-visible max-h-max  md:grow md:flex md:justify-between md:ml-6 md:h-11 '
            : 'transition-all duration-200 ease-linear overflow-hidden md:overflow-visible max-h-0 md:grow md:max-h-fit  md:flex md:justify-between md:ml-6 md:h-11 '
        }
      >
        <div className="relative my-7  md:hidden">
          <input
            className="w-full py-1.5 px-4  bg-blue-400 rounded"
            type="text"
          />
          <FiSearch className="absolute top-1/4 right-3" />
        </div>

        {navbar.map((item, idx) => (
          <ul
            key={idx}
            className={
              search
                ? 'md:items-center md:hidden'
                : 'md:flex md:items-center md:gap-2 '
            }
          >
            <li className="font-medium py-2 px-6 hover:underline hover:decoration-1  relative group">
              <Link href={item.href}>{item.title}</Link>
              {item.submenus.length ? (
                <div className="hidden absolute md:group-hover:block  wrapper">
                  <div className="bg-white arrow mt-4 text-slate-700  rounded">
                    <div
                      className={
                        item.hasSub
                          ? 'flex w-max min-w-300 py-6 px-5 gap-8'
                          : ' min-w-300 w-max py-6 px-5 gap-8'
                      }
                    >
                      {item.hasSub ? (
                        item.submenus.map((sub, idx) => (
                          <div key={idx}>
                            <div className="text-slate-500">{sub.title}</div>
                            <ul>
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
                        <div key={idx}>
                          {/* <div className="text-slate-500">{sub.title}</div> */}
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
            className="hidden md:inline md:cursor-pointer md:ml-2 "
            onClick={handleShowSearchBox}
          />
          <div className="hidden font-medium md:block md:hover:underline md:mr-10 md:ml-2">
            Sign In
          </div>
          <button className="w-full my-8 md:px-6 text-white  py-2 rounded font-semibold bg-blue-900 md:w-auto md:transition md:duration-200 md:hover:bg-slate-200 md:hover:text-sky-600">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
