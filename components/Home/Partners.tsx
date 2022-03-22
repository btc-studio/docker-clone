import Image from 'next/image';
import classNames from 'classnames';

import Netflix from '../../public/netflix_full.png';
import Aws from '../../public/aws_sm_logo.png';
import Link from 'next/link';
import { IPartnersProps } from './interfaces';

export default function Partners({ isEntered }: IPartnersProps) {
  return (
    <div className="bg-gray-200 px-2 py-6">
      <div>
        <div className="pt-6 pb-14 text-4xl md:text-5xl font-semibold text-center text-slate-800">
          See who uses Docker
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 ">
            {Array.from(Array(22).keys()).map((item) => (
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
                <Image src={Netflix} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 mb-10">
        <div className="md:px-8 text-center max-w-screen-lg mx-auto text-4xl md:text-5xl font-semibold  text-slate-800">
          Go from code to cloud securely with partners that you trust
        </div>
        <div className="md:px-8 text-xl text-zinc-500 text-center mt-3 md:text-2xl max-w-screen-lg mx-auto">
          Trust that your development pipeline workflow will work in any
          environment – locally and in the cloud.
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto mt-20">
        <div className="mx-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
            {Array.from(Array(4).keys()).map((item) => (
              <div
                key={item}
                className="md:col-span-1 bg-white rounded-lg px-8 py-14"
              >
                <Image src={Aws} alt="bitbucket" />
                <div className="text-lg text-slate-800 my-14 md:mt-3">
                  Simplify the development of your multi-container applications
                  from Docker CLI to Amazon ECS on AWS Fargate.
                </div>
                <div className="mt-6">
                  <div className="inline text-blue-600 text-xl">
                    <Link href="/about">
                      <span className="cursor-pointer">
                        <span>&#x2794;</span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span>Learn more</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="mx-auto mb-10 mt-24 md:mt-40 text-lg py-3 rounded font-semibold bg-blue-600 text-white px-12 focus:outline focus:outline-3 focus:outline-sky-400 transition-all duration-200 ease-linear">
          Learn more
        </button>
      </div>
    </div>
  );
}
