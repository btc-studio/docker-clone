import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import AllHands from '../public/all-hands-community.png';

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
  return (
    <>
      <Head>
        <title>Empowering App Development for Developers | Docker </title>
      </Head>

      <div className="px-2 w-full pt-14 pb-48 md:py-56  text-white bg-[url('../public/cover.png')] bg-cover bg-no-repeat bg-center">
        <div className="md:max-w-screen-md md:mx-auto">
          <div className="text-5xl md:text-6xl font-semibold text-center md:text-left">
            Developers Love Docker. Businesses Trust It.
          </div>
          <div className="text-cyan-100 text-3xl mt-6 text-center md:text-left">
            Build safer, share wider, run faster: New updates to our product
            subscriptions.
          </div>
          <button className=" transition duration-300 ease-linear bg-blue-900 text-white px-14 py-4 mt-14 rounded font-semibold  hover:bg-slate-200 hover:text-sky-500">
            Learn more
          </button>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="bg-white p-8 rounded-lg mx-3 negative md:flex lg:max-w-screen-lg lg:mx-auto">
          <div className="md:mr-16 h-48 w-full bg-[url('../public/whatsnew.png')] bg-cover bg-no-repeat bg-center"></div>
          <div>
            <div className="text-sky-500 uppercase font-semibold mt-8 mb-2 text-lg">
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
            <div className="mt-6">
              <div className="inline group text-sky-500 text-xl">
                <Link href="/about">
                  <span className="cursor-pointer">
                    <span>
                      &#8594; <span> </span>
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
          <div className="mb-10 mt-16 flex flex-col items-center justify-center md:flex-row md:gap-20 md:flex-wrap">
            <div>
              <div className="text-5xl font-bold text-gray-800">
                13 million +
              </div>
              <div className="text-lg text-gray-700 font-normal">
                developers
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-800">
                7 million +
              </div>
              <div className="text-lg text-gray-700 font-normal">
                applications
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gray-800">
                13 billion +
              </div>
              <div className="text-lg text-gray-700 font-normal">
                monthly image downloads
              </div>
            </div>
          </div>
          <button className="mx-auto mb-24 text-lg py-3 rounded font-semibold bg-blue-600 text-white px-14 ">
            Get Started
          </button>
        </div>
      </div>

      <div className="text-center bg-blue-900 text-white">
        <div className="max-w-screen-lg mx-auto py-16 md:pb-5">
          <div className="text-5xl font-semibold">New to containers?</div>
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
        <div className="flex flex-col  justify-between items-center md:flex-row-reverse md:max-w-screen-lg md:mx-auto ">
          <div className="md:ml-24  md:basis-1/2">
            <div className="h-80 w-80  bg-[url('../public/all-hands-community.png')] bg-cover bg-no-repeat bg-center"></div>
          </div>

          <div className="md:basis-1/2 mx-6 md:ml-16 md:mr-0">
            <div className="text-5xl font-semibold ">
              A Community like No Other
            </div>
            <div className="text-2xl my-4">
              Community is at the heart of what Docker does. From our Docker
              Captains sharing their insight and expertise, to hundreds of
              MeetUps around the world, to our Slack and Discourse forums for
              peer-to-peer support, there’s someone else out there who has been
              there, done that, and is eager to help.
            </div>
            <button className="transition duration-300 ease-linear bg-blue-900 text-white px-20 py-4 mt-12 rounded font-semibold  hover:bg-slate-200 hover:text-sky-500">
              Join in
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-300">hello</div>

      <div className="px-2 py-20 flex flex-col items-center max-w-screen-lg mx-auto">
        <div className=" font-semibold text-4xl text-gray-800 text-center px-12">
          Your path to accelerated application development starts here
        </div>

        <div className="my-6 flex flex-col gap-8 ">
          <div className="flex">
            <div className="bg-sky-500 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div className="text-3xl ml-8">
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
            <div className="bg-sky-500 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div className="text-3xl ml-8">
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
            <div className="bg-sky-500 p-5 rounded-full w-1 h-1 flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div className="text-3xl ml-8">
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

        <button className="transition duration-300 ease-linear bg-blue-900 text-white px-6 py-4 rounded font-semibold my-6 hover:bg-slate-200 hover:text-sky-500">
          Get started for free
        </button>
      </div>

      <div className="bg-slate-100 px-8 py-20">
        <div className="max-w-screen-lg mx-auto">
          <div className=" font-semibold text-2xl text-gray-800 text-center">
            Subscribe to our newsletter to get the latest updates and news from
            Docker delivered to your inbox monthly.
          </div>
          <div className="flex flex-col justify-center items-center mt-6 md:flex-row">
            <input
              className="border-solid border border-sky-600 rounded px-2 py-1 w-10/12 h-9 md:w-auto"
              placeholder="Email Adress"
              type="text"
            />
            <select
              className="border-solid border border-sky-600 mt-4 rounded px-2 py-1 w-10/12 h-9 md:m-0 md:w-auto"
              placeholder="Select your language"
            >
              {countryList.map((country, idx) => (
                <option key={idx} value="volvo">
                  {country}
                </option>
              ))}
            </select>
            <button className="py-1.5 rounded font-semibold bg-blue-600 text-white px-12 mt-40  md:m-0 md:ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-sky-600 font-semibold text-white  text-center text-6xl py-20 px-2 md:text-5xl ">
        <div className="max-w-screen-lg mx-auto">
          Accelerate your application development today.
        </div>
      </div>
    </>
  );
};

export default Home;
