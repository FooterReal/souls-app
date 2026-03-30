import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mfd')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mfd"!</div>
}
