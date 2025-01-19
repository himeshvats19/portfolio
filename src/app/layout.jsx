import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Himesh Vats',
    default:
      'Himesh Vats - Software Engineer, Designer, and Music Producer',
  },
  description:
    'I’m Himesh Vats, a software engineer and musician based in Bengaluru, India. I’m currently building amazing products for Walmart Global Tech, where we develop technologies that empower people to explore Walmart Stores and Services easily.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
