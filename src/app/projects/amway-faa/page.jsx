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
import faa1 from '@/images/photos/faa1.png'
import faa2 from '@/images/photos/faa2.png'
import faa3 from '@/images/photos/faa3.png'
import faa4 from '@/images/photos/faa4.png'
import faa5 from '@/images/photos/faa5.png'
import { BackgroundBeams } from '@/components/ui/background-beams'


export default function Example() {
  return (
    <><Container className="mt-6">
      <div className="py-9 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              Amway FAA Simulator
            </p>
            <p>ICF Next : 2018-2019</p>
            <p className="mt-6 text-lg/8 text-gray-300">
              New FAA Program Educational Simulator
            </p>
            <p className="mt-6 text-lg/8 text-gray-300">My Role : Lead Software Engineer(Frontend)</p>
            <div className="m-5">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a href="http://newfaa.amwayglobal.com/" target="_blank">Live Preview</a>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <Image src={faa1} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <h3 className="text-lg md:text-2xl mb-4 text-black dark:text-white max-w-4xl">
            Tech Stack
          </h3>
          <p>HTML5, CSS3, Angular 2, Gulp</p>
        </div>
        <div className="mx-auto  max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={faa2} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image src={faa3} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={faa4} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={faa5} alt="" className=" h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
      </div>
    </Container>
    </>
  )
}
