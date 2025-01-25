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
import insights1 from '@/images/photos/insights1.png'
import insights2 from '@/images/photos/insights2.png'
import { BackgroundBeams } from '@/components/ui/background-beams'

const features = [
  {
    name: 'Report Builder',
    description: 'Users can generate custom reports with meaningful Insights by selecting a single or multiple Data Sources.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Role Based Sharing',
    description: 'Users can add other users/groups to edit or view the reports.',
    icon: LockClosedIcon,
  },
  {
    name: 'Charting Library',
    description: 'Users can choose multiple charts from an extensive library of visualizations while creating reports.',
    icon: ChartBarIcon,
  },
  {
    name: 'Download Reports',
    description: 'Users can also export data in CSV/Excel.',
    icon: ArrowDownOnSquareIcon,
  },
  {
    name: 'Multiple Versions.',
    description: 'Users can have multiple version of the same reports as Draft & Published.',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Custom Grid Layout',
    description: 'Users can create custom Grids by resizing the containers based on their needs.',
    icon: TableCellsIcon,
  },
]

export default function Example() {
  return (
    <><Container className="mt-6">
      <div className="py-9 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              Insights Ally
            </p>
            <p>Walmart Global Tech</p>
            <p className="mt-6 text-lg/8 text-gray-300">
              Insights Ally is a self-serve data visualization and analytics tool for individuals and organizations used to unlock powerful insights to drive effective decisions that improve associate, customer and user experience.
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">My Role : Lead Software Engineer(Frontend)</p>
            <div className="m-5">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a href="https://vimeo.com/902003285/36f078d8f3?share=copy" target="_blank">Demo Video</a>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image src={insights1} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
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
          <p>NodeJS, ExpressJS, React, Redux, Material UI V4, CSS3, AmCharts, React DND, Webpack, Jest.</p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={insights2} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
      </div>
    </Container>
      <BackgroundBeams />
    </>
  )
}
