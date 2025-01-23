import HTMLLogo from '@/images/logos/htmllogo.png'
import ReactLogo from '@/images/logos/reactlogo.png'
import NextLogo from '@/images/logos/nextjsLogo.png'
import JavaScriptLogo from '@/images/logos/js.png'
import NodeJSLogo from '@/images/logos/nodejs.png'
import TypeScriptLogo from '@/images/logos/typescript.png'
import DockerLogo from '@/images/logos/docker.png'
import TailwindLogo from '@/images/logos/tailwind.png'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={HTMLLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={JavaScriptLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={TypeScriptLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={ReactLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={NextLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>

          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={NodeJSLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>
          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={TailwindLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>

          <div className="bg-gray-800 p-8 sm:p-10">
            <Image
              src={DockerLogo} alt="" unoptimized
              className="max-h-20 w-full object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  )
}