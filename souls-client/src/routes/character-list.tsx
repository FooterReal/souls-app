import { useClient } from '#/api/client'
import type { Soul } from '#/api/queries/soulsQueries'
import { ErrorHandle } from '#/components/ErrorHandle'
import { SoulCard } from '#/components/SoulCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character-list')({
  component: RouteComponent,
})

function RouteComponent() {
  const client = useClient()

  const { isPending, isError, data, error } = client.queries.useAllSoulsQuery()

  return (
    <ErrorHandle isPending={isPending} isError={isError} data={data} error={error}>
      {data.map((soul: Soul) => (
        <SoulCard key={soul.id} {...soul} />
      ))}
    </ErrorHandle>
  )
}
