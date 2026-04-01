import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col min-h-dvh max-h-screen">
      <Header/>
      <div className='flex-1 flex flex-col pl-2 pr-2 min-h-0'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
