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
import buyblue1 from '@/images/photos/buyblue1.png'
import buyblue2 from '@/images/photos/buyblue2.png'
import { BackgroundBeams } from '@/components/ui/background-beams'


export default function Example() {
  return (
    <><Container className="mt-6">
      <div className="py-9 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
              BuyBlue
            </p>
            <p>12 Hr Hackathon Project</p>
            <p className="mt-6 text-lg/8 text-gray-300">
              E-commerce Paltform Theme for SHOPIFY.
            </p>
            <div className="m-5">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <a href="https://buyblue-99595.firebaseapp.com/" target="_blank">Live Demo</a>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image src={buyblue1} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <Image src={buyblue2} alt="" className="h-full w-full mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" unoptimized />
        </div>
      </div>
    </Container>
    </>
  )
}
