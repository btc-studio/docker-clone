import classNames from 'classnames';

import Image from 'next/image';
import Bitbucket from '../../public/bitbucket_full.png';
import { IToolsProps } from './interfaces';

export default function Tools({ imageRef, isEntered }: IToolsProps) {
  return (
    <div className="bg-gray-200 px-2 py-6" ref={imageRef}>
      <div>
        <div className="pt-6 pb-14 text-4xl md:text-5xl font-semibold text-center text-slate-800">
          Use your favorite tools and images
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 ">
            {Array.from(Array(13).keys()).map((item) => (
              <div
                key={item}
                className={classNames(
                  'w-40 md:w-52 m-2 mt-0',
                  { fade: isEntered },
                  {
                    'hidden md:block': item > 3,
                  }
                )}
              >
                <Image src={Bitbucket} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
