import { useEffect, useRef, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Features from '../components/Home/Features';
import Partners from '../components/Home/Partners';
import Tools from '../components/Home/Tools';

import AllHands from '../public/all-hands-community.png';
import Pricing from '../public/pricing_fullhand.png';

import { countryList, statistic } from '../staticData';
import useOnScreen from '../hooks';

const Home: NextPage = () => {
  const [isEntered, setIsEntered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(imageRef);

  useEffect(() => {
    isVisible && setIsEntered(true);
  }, [isVisible]);

  return (
    <>
      <Head>
        <title>Empowering App Development for Developers | Docker </title>
      </Head>
      <div className="px-2 w-full pt-24 pb-48 md:py-56  text-white bg-[url('../public/cover.png')] bg-cover bg-no-repeat bg-center">
        <div className="md:max-w-screen-md md:mx-auto">
          <div className="md:leading-tight leading-none text-5xl md:text-6xl font-semibold text-center md:text-left">
            Developers Love Docker. Businesses Trust It.
          </div>
          <div className="text-cyan-100 text-3xl mt-6 text-center md:text-left">
            Build safer, share wider, run faster: New updates to our product
            subscriptions.
          </div>
          <button className="py-3 text-xl transition duration-300 ease-linear bg-blue-900 text-white md:px-14 px-10 mb-15 mt-14 rounded font-medium  hover:bg-slate-200 hover:text-sky-500">
            Learn more
          </button>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="bg-white p-8 pt-5 rounded-lg mx-3 negative md:flex max-w-screen-xl xl:mx-auto">
          <div className="md:mr-16 h-56 w-full bg-[url('../public/whatsnew.png')] bg-cover bg-no-repeat bg-center"></div>
          <div>
            <div className="text-sky-500 uppercase font-semibold mt-9 mb-2 md:mt-2 md:mb-2 text-lg">
              What&apos;s new
            </div>
            <div className="text-2xl text-gray-800 font-semibold">
              Key Trends to Watch in 2022
            </div>
            <div className="text-slate-500 text-lg mt-2">
              What are the six major trends impacting development teams and
              ultimately the way organizations operate and consume applications
              today? Read this report to learn how development teams can
              minimize disruption by modernizing the way they build, share, and
              run their applications with Docker.
            </div>
            <div className="md:mt-6 md:mb-0 my-6">
              <div className="inline group text-sky-500 text-lg ">
                <Link href="/about">
                  <span className="cursor-pointer">
                    <span>
                      &#x2794; <span> </span>
                      <span className="group-hover:underline group-hover:decoration-1">
                        Read Now!
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-screen-md font-semibold text-5xl text-slate-800 px-3 text-center">
            Accelerate how you build, share, and run modern applications.
          </div>
          <div className="mb-10 mt-16 flex flex-col items-center justify-center md:flex-row  md:flex-wrap">
            {statistic.map(({ title, unit }, idx) => (
              <div key={idx} className="mx-10 mb-4">
                <div className="text-5xl font-bold text-gray-800 ">{unit}</div>
                <div className="text-xl text-gray-700 font-normal">{title}</div>
              </div>
            ))}
          </div>

          <button className="  mx-auto mb-24 text-lg py-3 rounded font-semibold bg-blue-600 text-white px-14 ">
            Get Started
          </button>
        </div>
      </div>

      <Features />

      <div className="text-center bg-blue-900 text-white">
        <div className="max-w-screen-lg mx-auto py-16 md:pb-5">
          <div className="text-5xl md:text-6xl font-semibold">
            New to containers?
          </div>
          <div className="text-2xl mt-4 px-4 md:max-w-screen-md mx-auto">
            Today, all major cloud providers and leading open source serverless
            frameworks use our platform, and many are leveraging Docker for
            their container-native IaaS offerings.
          </div>
        </div>
        <div className="py-14 pb-28 mx-8">
          <div className="inline group">
            <Link href="/about">
              <span className="cursor-pointer text-2xl">
                <span>
                  &#8594; <span> </span>
                  <span className="group-hover:underline group-hover:decoration-1">
                    Learn more about containers.
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="flex flex-col  justify-between items-center md:flex-row-reverse max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 ">
          <div className="md:basis-1/2 md:pl-12">
            <Image src={AllHands} alt="brand" />
          </div>

          <div className="md:basis-1/2 mx-6 md:m-0 md:pl-12">
            <div className="text-5xl font-semibold text-slate-800 ">
              A Community like No Other
            </div>
            <div className="text-2xl my-4">
              Community is at the heart of what Docker does. From our Docker
              Captains sharing their insight and expertise, to hundreds of
              MeetUps around the world, to our Slack and Discourse forums for
              peer-to-peer support, there’s someone else out there who has been
              there, done that, and is eager to help.
            </div>
            <button className="text-lg transition duration-300 ease-linear bg-blue-900 text-white px-20 py-3 mt-2 md:mt-12 rounded font-semibold  hover:bg-slate-200 hover:text-sky-500">
              Join in
            </button>
          </div>
        </div>
      </div>

      <Tools isEntered={isEntered} imageRef={imageRef} />

      <div className="max-w-screen-xl mb-16 xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 md:flex md:flex-row md:items-center ">
        <div className="md:basis-1/2">
          <Image src={Pricing} alt="brand" />
        </div>
        <div className="md:m-0 md:basis-1/2 mx-6">
          <div className="text-5xl font-semibold my-6 text-slate-700">
            Choose a subscription that is right for you
          </div>

          <div className="text-xl md:text-2xl text-slate-900">
            Benefit from more collaboration, increased security, without
            limits... all enabled with a Docker subscription. Check out our
            <span> </span>
            <Link href="/about">
              <span className="cursor-pointer text-sky-500 hover:text-blue-600 hover:underline hover:decoration-2">
                pricing
              </span>
            </Link>
            <span>.</span>
          </div>
        </div>
      </div>

      <Partners isEntered={isEntered} />

      <div className="px-2 py-20 flex flex-col items-center max-w-screen-xl mx-auto">
        <div className=" font-semibold text-5xl text-gray-800 text-center px-12">
          Your path to accelerated application development starts here
        </div>

        <div className="my-6 flex flex-col gap-8 ">
          <div className="flex">
            <div className="bg-sky-500 p-6 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div className="text-4xl ml-8">
              Learn more about
              <span> </span>
              <Link href="/about">
                <span className="cursor-pointer text-sky-500 hover:text-blue-600 hover:underline hover:decoration-2">
                  containers
                </span>
              </Link>
              <span>.</span>
            </div>
          </div>
          <div className="flex">
            <div className="bg-sky-500 p-6 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div className="text-4xl ml-8">
              <Link href="/about">
                <span className="cursor-pointer text-sky-500 hover:text-blue-600 hover:underline hover:decoration-2">
                  Containerize
                </span>
              </Link>
              <span> </span>
              your first app.
            </div>
          </div>
          <div className="flex">
            <div className="bg-sky-500 p-6 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div className="text-4xl ml-8">
              <Link href="/about">
                <span className="cursor-pointer text-sky-500 hover:text-blue-600 hover:underline hover:decoration-2">
                  Publish
                </span>
              </Link>
              <span> </span>
              Publish your image on
              <span> </span>
              <Link href="/about">
                <span className="cursor-pointer text-sky-500 hover:text-blue-600 hover:underline hover:decoration-2">
                  Docker Hub
                </span>
              </Link>
              <span>.</span>
            </div>
          </div>
        </div>

        <button className="text-lg transition duration-300 ease-linear bg-blue-900 text-white px-6 py-3 rounded font-semibold my-6 hover:bg-slate-200 hover:text-sky-500">
          Get started for free
        </button>
      </div>

      <div className="bg-slate-100 px-8 py-20">
        <div className="max-w-screen-xl xl:mx-auto xl:px-12 md:mx-6 lg:mx-16">
          <div className=" font-semibold text-3xl text-gray-800 text-center">
            Subscribe to our newsletter to get the latest updates and news from
            Docker delivered to your inbox monthly.
          </div>
          <div className="flex flex-col justify-center items-center mt-6 md:flex-row">
            <input
              className="border-solid border border-sky-600 rounded px-2 py-1 w-10/12 h-9 md:w-72"
              placeholder="Email Adress"
              type="text"
            />
            <select
              className="md:w-72 border-solid border border-sky-600 mt-4 rounded px-2 py-1 w-10/12 h-9 md:m-0 "
              placeholder="Select your language"
            >
              {countryList.map((country, idx) => (
                <option key={idx} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <button className="py-1.5 rounded font-semibold bg-blue-600 text-white px-14 mt-40  md:m-0 md:ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-sky-600 font-semibold text-white  text-center text-6xl py-20 px-2  ">
        <div className="max-w-screen-xl xl:mx-auto xl:px-24 md:mx-6 lg:mx-16">
          Accelerate your application development today.
        </div>
      </div>
    </>
  );
};

export default Home;
