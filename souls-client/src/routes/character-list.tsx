import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/character-list"!</div>
}
