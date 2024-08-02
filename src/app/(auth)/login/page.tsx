'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import ChatLogo from '@/assets/chat-logo.svg'
const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='w-full flex flex-col items-center max-w-md space-y-8'>
          <div className='flex flex-col items-center gap-8'>
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><style>.cls-1.cls-2.cls-3.cls-4.cls-5.cls-6.cls-7</style></defs><title>conversation job seeker employee unemployee work</title><path className="cls-1" d="M198.85,170.32h0a28.38,28.38,0,1,0-5.92,0Z"/><path className="cls-1" d="M203.52,174.32H188.26a43.53,43.53,0,0,0-43.48,43.48v13.26H247V217.8A43.53,43.53,0,0,0,203.52,174.32Z"/><path className="cls-1" d="M37.74,142.11a28.31,28.31,0,0,0,25.44,28.21h5.92a28.37,28.37,0,1,0-31.36-28.21Z"/><path className="cls-1" d="M117.22,217.8a43.53,43.53,0,0,0-43.48-43.48H58.48A43.53,43.53,0,0,0,15,217.8v13.26H117.22Z"/><path className="cls-2" d="M66.11,113.74a28.46,28.46,0,0,0-4,.29,28.36,28.36,0,0,1,0,56.16l1.05.14h5.92a28.37,28.37,0,0,0-3-56.58Z"/><path className="cls-2" d="M73.74,174.32h-8a43.53,43.53,0,0,1,43.48,43.48v13.26h8V217.8A43.53,43.53,0,0,0,73.74,174.32Z"/><path className="cls-2" d="M195.89,113.74a28.46,28.46,0,0,0-4,.29,28.36,28.36,0,0,1,0,56.16l1.05.14h5.92a28.37,28.37,0,0,0-3-56.58Z"/><path className="cls-2" d="M203.52,174.32h-8A43.53,43.53,0,0,1,239,217.8v13.26h8V217.8A43.53,43.53,0,0,0,203.52,174.32Z"/><path className="cls-3" d="M25,84.63H40.38a2,2,0,0,1,2,2v20.55l22-22a2,2,0,0,1,1.41-.59H142c4.41,0,6-3.59,6-8v-.69H124c-6.62,0-14-5.38-14-12V37.63H25a8,8,0,0,0-8,8v31A8,8,0,0,0,25,84.63Zm-5-20.5H89a2,2,0,0,1,0,4H20a2,2,0,0,1,0-4Zm0-10H99a2,2,0,1,1,0,4H20a2,2,0,1,1,0-4Z"/><path className="cls-4" d="M239,24.94H122a8,8,0,0,0-8,8v31a8,8,0,0,0,8,8h76.28a2,2,0,0,1,1.42.59l22,22V73.94a2,2,0,0,1,2-2H239a8,8,0,0,0,8-8v-31A8,8,0,0,0,239,24.94Z"/><path className="cls-5" d="M117,75.94h7c-6.62,0-14-5.38-14-12V37.63h-7V63.94C103,70.56,110.35,75.94,117,75.94Z"/><path className="cls-6" d="M239,24.94h-7a8,8,0,0,1,8,8v31a8,8,0,0,1-8,8h7a8,8,0,0,0,8-8v-31A8,8,0,0,0,239,24.94Z"/><path className="cls-7" d="M10,235.56H116.22a2.5,2.5,0,0,0,2.5-2.5V217.8a48,48,0,0,0-39.29-47.18,32.87,32.87,0,1,0-32.63,0A48,48,0,0,0,7.5,217.8v15.26A2.5,2.5,0,0,0,10,235.56Zm25.24-93.46A27.87,27.87,0,1,1,66,169.82H60.18A27.91,27.91,0,0,1,35.24,142.11ZM12.5,217.8a43,43,0,0,1,43-43H70.74a43,43,0,0,1,43,43v12.76H12.5Z"/><path className="cls-7" d="M209.21,170.62a32.87,32.87,0,1,0-32.63,0,48,48,0,0,0-39.29,47.18v15.26a2.5,2.5,0,0,0,2.5,2.5H246a2.5,2.5,0,0,0,2.5-2.5V217.8A48,48,0,0,0,209.21,170.62ZM165,142.11a27.87,27.87,0,1,1,30.8,27.71H190A27.91,27.91,0,0,1,165,142.11Zm78.48,88.46H142.28V217.8a43,43,0,0,1,43-43h15.26a43,43,0,0,1,43,43Z"/><path className="cls-7" d="M236,20.44H119a12.51,12.51,0,0,0-12.5,12.5v.19H20A12.51,12.51,0,0,0,7.5,45.63v31A12.51,12.51,0,0,0,20,89.13H32.88V112a2.5,2.5,0,0,0,4.27,1.77L61.79,89.13H137a12.51,12.51,0,0,0,12.5-12.5v-.19h44.68l24.64,24.65a2.5,2.5,0,0,0,4.27-1.77V76.44H236a12.51,12.51,0,0,0,12.5-12.5v-31A12.51,12.51,0,0,0,236,20.44ZM144.53,76.63a7.51,7.51,0,0,1-7.5,7.5H60.75a2.5,2.5,0,0,0-1.77.73L37.88,106V86.63a2.5,2.5,0,0,0-2.5-2.5H20a7.51,7.51,0,0,1-7.5-7.5v-31a7.51,7.51,0,0,1,7.5-7.5h86.47V63.94A12.51,12.51,0,0,0,119,76.44h25.56Zm99-12.69a7.51,7.51,0,0,1-7.5,7.5H220.62a2.5,2.5,0,0,0-2.5,2.5V93.28L197,72.17a2.5,2.5,0,0,0-1.77-.73H119a7.51,7.51,0,0,1-7.5-7.5v-31a7.51,7.51,0,0,1,7.5-7.5H236a7.51,7.51,0,0,1,7.5,7.5Z"/><path className="cls-7" d="M236,40.94H119a2.5,2.5,0,0,0,0,5H236a2.5,2.5,0,0,0,0-5Z"/><path className="cls-7" d="M226,50.94H119a2.5,2.5,0,0,0,0,5H226a2.5,2.5,0,0,0,0-5Z"/><path className="cls-7" d="M99,53.63H20a2.5,2.5,0,1,0,0,5H99a2.5,2.5,0,1,0,0-5Z"/><path className="cls-7" d="M89,63.63H20a2.5,2.5,0,0,0,0,5H89a2.5,2.5,0,1,0,0-5Z"/><path className="cls-3" d="M28.5,20.49h-4v-4a1,1,0,1,0-2,0v4h-4a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0v-4h4a1,1,0,0,0,0-2Z"/><path className="cls-3" d="M17.5,161.5a6,6,0,1,1,6-6A6,6,0,0,1,17.5,161.5Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,17.5,151.5Z"/><path className="cls-4" d="M82.5,26a6,6,0,1,1,6-6A6,6,0,0,1,82.5,26Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,82.5,16Z"/><path className="cls-3" d="M121,124a6,6,0,1,1,6-6A6,6,0,0,1,121,124Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,121,114Z"/><path className="cls-3" d="M253.5,167h-2.59l1.83-1.83a1,1,0,0,0-1.41-1.41l-1.83,1.83V163a1,1,0,0,0-2,0v2.59l-1.83-1.83a1,1,0,0,0-1.41,1.41l1.83,1.83H243.5a1,1,0,0,0,0,2h2.59l-1.83,1.83a1,1,0,0,0,1.41,1.41l1.83-1.83V173a1,1,0,0,0,2,0v-2.59l1.83,1.83a1,1,0,0,0,1.41-1.41L250.91,169h2.59a1,1,0,0,0,0-2Z"/></svg>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <Button
            isLoading={isLoading}
            type='button'
            className='max-w-sm mx-auto w-full'
            onClick={loginWithGoogle}>
            {isLoading ? null : (
              <svg
                className='mr-2 h-4 w-4'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
                <path d='M1 1h22v22H1z' fill='none' />
              </svg>
            )}
            Google
          </Button>
        </div>
      </div>
    </>
  )
}

export default Page
