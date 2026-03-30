import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'
import { Header } from '#/components/Header'
import { Footer } from '#/components/Footer'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header/>
      <div className='flex-1 pl-4 pr-4'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
