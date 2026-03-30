import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/souls')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/souls"!</div>
}
