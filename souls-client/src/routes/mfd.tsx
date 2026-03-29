import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mfd')({
  component: Mfd,
})

function Mfd() {
  return <div>Hello "/mfd"!</div>
}
