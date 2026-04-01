import { MFDHeader } from '#/components/mfd/MFDHeader'
import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/mfd')({
  component: RouteComponent,
})

function RouteComponent() {
  const mfdHeaders = [
    { title: "Skill", to: '/mfd/skills' },
    { title: "Test", to: '/mfd/test' }
  ]

  const { href } = useLocation()

  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)

  useEffect(() => {
    const currentHeader = mfdHeaders.find(header => header.to === href)
    setSelectedMenuItem(currentHeader?.title ?? null)
  }, [href])

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex justify-start gap-1">
        {mfdHeaders.map((header) => (
          <Link to={header.to} key={header.title}>
            <MFDHeader title={header.title} isSelected={selectedMenuItem === header.title} />
          </Link>
        ))}
        
      </div>

      <div className="flex brd-theme border-2 flex-1 min-h-0">
        <Outlet />
      </div>
    </div>
  )
}
