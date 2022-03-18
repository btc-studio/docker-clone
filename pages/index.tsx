import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useOnScreen from '../hooks';
import AllHands from '../public/all-hands-community.png';
import Aws from '../public/aws_sm_logo.png';
import Bitbucket from '../public/bitbucket_full.png';
import Build from '../public/Docker-build.png';
import Run from '../public/Moby-run.png';
import Share from '../public/Moby-share.png';
import Netflix from '../public/netflix_full.png';
import Pricing from '../public/pricing_fullhand.png';

const countryList = [
  'Select Country',
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
const Home: NextPage = () => {
  const [isEntered, setIsEntered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(imageRef);
  const fadeIn = isEntered ? 'fade' : '';

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
            <div className="mx-10 mb-4">
              <div className="text-5xl font-bold text-gray-800 ">
                13 million +
              </div>
              <div className="text-xl text-gray-700 font-normal">
                developers
              </div>
            </div>
            <div className="mx-10 mb-3">
              <div className="text-5xl font-bold text-gray-800">
                7 million +
              </div>
              <div className="text-xl text-gray-700 font-normal">
                applications
              </div>
            </div>
            <div className="mx-10 mb-3">
              <div className="text-5xl font-bold text-gray-800">
                13 billion +
              </div>
              <div className="text-xl text-gray-700 font-normal">
                monthly image downloads
              </div>
            </div>
          </div>
          <button className="  mx-auto mb-24 text-lg py-3 rounded font-semibold bg-blue-600 text-white px-14 ">
            Get Started
          </button>
        </div>
      </div>

      <div className="mx-2 my-14">
        <div className="text-center max-w-screen-md mx-auto">
          <div className="text-5xl font-semibold text-gray-800 mb-3">
            Docker makes development efficient and predictable
          </div>
          <div className="text-xl md:text-2xl text-gray-700">
            Docker takes away repetitive, mundane configuration tasks and is
            used throughout the development lifecycle for fast, easy and
            portable application development - desktop and cloud. Docker’s
            comprehensive end to end platform includes UIs, CLIs, APIs and
            security that are engineered to work together across the entire
            application delivery lifecycle.
          </div>
        </div>
        <div className="my-28 ">
          <div className="md:max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 md:flex md:flex-row-reverse md:items-center md:gap-4">
            <div className="md:basis-1/2 ">
              <Image src={Build} alt="brand" />
            </div>
            <div className="mx-3 md:m-0 md:basis-1/2">
              <div className="text-5xl font-semibold my-6">Build</div>
              <ul className="list-disc mx-5 list-outside text-slate-500 text-lg">
                <li>
                  Get a head start on your coding by leveraging Docker images to
                  efficiently develop your own unique applications on Windows
                  and Mac. Create your multi-container application using Docker
                  Compose.
                </li>
                <li className="my-4">
                  Integrate with your favorite tools throughout your development
                  pipeline - Docker works with all development tools you use
                  including VS Code, CircleCI and GitHub.
                </li>
                <li>
                  Package applications as portable container images to run in
                  any environment consistently from on-premises Kubernetes to
                  AWS ECS, Azure ACI, Google GKE and more.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 md:flex md:flex-row md:items-center md:gap-4 ">
            <div className="md:basis-1/2 ">
              <Image src={Share} alt="brand" />
            </div>
            <div className="mx-3 md:m-0 md:basis-1/2">
              <div className="text-5xl font-semibold my-6">Share</div>
              <ul className="list-disc mx-5 list-outside text-slate-500 text-lg">
                <li>
                  Leverage Docker Trusted Content, including Docker Official
                  Images and images from Docker Verified Publishers from the
                  Docker Hub repository.
                </li>
                <li className="my-4">
                  Innovate by collaborating with team members and other
                  developers and by easily publishing images to Docker Hub.
                </li>
                <li>
                  Personalize developer access to images with roles based access
                  control and get insights into activity history with Docker Hub
                  Audit Logs.
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-screen-xl xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 md:flex md:flex-row-reverse md:items-center md:gap-4 ">
            <div className="md:basis-1/2 ">
              <Image src={Run} alt="brand" />
            </div>
            <div className="mx-3 md:m-0 md:basis-1/2">
              <div className="text-5xl font-semibold my-6">Run</div>
              <ul className="list-disc mx-5 list-outside text-slate-500 text-lg">
                <li>
                  Deliver multiple applications hassle free and have them run
                  the same way on all your environments including design,
                  testing, staging and production - desktop or cloud-native.
                </li>
                <li className="my-4">
                  Deploy your applications in separate containers independently
                  and in different languages. Reduce the risk of conflict
                  between languages, libraries or frameworks.
                </li>
                <li>
                  Speed development with the simplicity of Docker Compose CLI
                  and with one command, launch your applications locally and on
                  the cloud with AWS ECS and Azure ACI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

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
                  className={
                    item > 3
                      ? `${fadeIn} w-40 md:w-52 m-2 mt-0 hidden md:block`
                      : `${fadeIn} w-40 md:w-52 m-2 mt-0`
                  }
                >
                  <Image src={Bitbucket} alt="brand" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mb-16 xl:mx-auto xl:px-16 md:mx-6 lg:mx-16 md:flex md:flex-row md:items-center ">
        {/* <div className="h-48 md:ml-20 md:basis-1/2 md:h-80 w-full bg-[url('../public/pricing_fullhand.png')] bg-cover bg-no-repeat bg-center"></div> */}
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
                  className={
                    item > 3
                      ? `${fadeIn} w-40 md:w-52 m-2 mt-0 hidden md:block`
                      : `${fadeIn} w-40 md:w-52 m-2 mt-0`
                  }
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
                    Simplify the development of your multi-container
                    applications from Docker CLI to Amazon ECS on AWS Fargate.
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
                <option key={idx} value="volvo">
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
