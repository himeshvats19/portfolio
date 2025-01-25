import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  ArrowDownOnSquareIcon,
  DocumentDuplicateIcon,
  TableCellsIcon
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { Container } from '@/components/Container'
import amway1 from '@/images/photos/amway1.png'
import amway2 from '@/images/photos/amway2.png'
import amway3 from '@/images/photos/amway3.png'
import amway4 from '@/images/photos/amway4.png'
import amway5 from '@/images/photos/amway5.png'
import amway6 from '@/images/photos/amway6.png'
import { BackgroundBeams } from '@/components/ui/background-beams'

const features = [
  {
    name: 'Integration - Ready',
    description: 'Since this tool was built using the concept of Web-Components, it was ready to be integrated with any website running on any Web Frameworks.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'One Tool to Do It All',
    description: 'This tool provided Line of Sponsorships Control for the users entire business.',
    icon: LockClosedIcon,
  },
  {
    name: 'Custom Reporting Capabilty',
    description: 'Users could create custom reports for their own Line Of Sponsorships and monitor their business in a TREE View',
    icon: ChartBarIcon,
  }
]

export default function Example() {
  return (
    <><Container className="mt-6">
      <div className="py-9 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              Amway MyBiz
            </p>
            <p>ICF Next : 2018-2019</p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Mybiz – The new way to monitor & manage your business.
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">My Role : Lead Software Engineer(Frontend)</p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <Image src={amway5} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
            Key Features
          </h3>
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-500" />
                  {feature.name}
                </dt>{' '}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
            Tech Stack
          </h3>
          <p>PolymerJS, D3JS, NodeJS, ExpressJS, Redux, HTML5, CSS3, WebComponents Webpack.</p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={amway2} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={amway3} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={amway4} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={amway5} alt="" className=" h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={amway6} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
      </div>
    </Container>
      <BackgroundBeams />
    </>
  )
}
