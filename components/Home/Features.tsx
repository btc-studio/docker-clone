import Image from 'next/image';

import Build from '../../public/Docker-build.png';
import Run from '../../public/Moby-run.png';
import Share from '../../public/Moby-share.png';

export default function Features() {
  return (
    <div className="mx-2 my-14">
      <div className="text-center max-w-screen-md mx-auto">
        <div className="text-5xl font-semibold text-gray-800 mb-3">
          Docker makes development efficient and predictable
        </div>
        <div className="text-xl md:text-2xl text-gray-700">
          Docker takes away repetitive, mundane configuration tasks and is used
          throughout the development lifecycle for fast, easy and portable
          application development - desktop and cloud. Docker’s comprehensive
          end to end platform includes UIs, CLIs, APIs and security that are
          engineered to work together across the entire application delivery
          lifecycle.
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
                efficiently develop your own unique applications on Windows and
                Mac. Create your multi-container application using Docker
                Compose.
              </li>
              <li className="my-4">
                Integrate with your favorite tools throughout your development
                pipeline - Docker works with all development tools you use
                including VS Code, CircleCI and GitHub.
              </li>
              <li>
                Package applications as portable container images to run in any
                environment consistently from on-premises Kubernetes to AWS ECS,
                Azure ACI, Google GKE and more.
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
                Innovate by collaborating with team members and other developers
                and by easily publishing images to Docker Hub.
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
                Deliver multiple applications hassle free and have them run the
                same way on all your environments including design, testing,
                staging and production - desktop or cloud-native.
              </li>
              <li className="my-4">
                Deploy your applications in separate containers independently
                and in different languages. Reduce the risk of conflict between
                languages, libraries or frameworks.
              </li>
              <li>
                Speed development with the simplicity of Docker Compose CLI and
                with one command, launch your applications locally and on the
                cloud with AWS ECS and Azure ACI.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
