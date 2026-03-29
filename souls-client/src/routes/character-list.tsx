import { useClient } from '#/api/client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character-list')({
  component: RouteComponent,
})

function RouteComponent() {
  const client = useClient()

  const { isPending, isError, data, error } = client.queries.useAllSoulsQuery()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  if (data.length === 0) {
    return <div>No souls...</div>
  }

  return <div>{data}</div>
}
