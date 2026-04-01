import { useRequests } from '#/api/client'
import { ErrorHandler } from '#/components/ErrorHandler'
import { MFDTable } from '#/components/mfd/MFDTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mfd/skills')({
  component: RouteComponent,
})

function RouteComponent() {
  const requests = useRequests()

  const { isPending, isError, data, error } = requests.queries.skillsQueries.allSkillsQuery()
  const addMutation = requests.mutations.skillsMutations.newSkillMutation(requests.client)
  const removeMutation = requests.mutations.skillsMutations.removeSkillMutation(requests.client)

  return (
    <ErrorHandler isPending={isPending} isError={isError} data={data} error={error}>
      {data == undefined ? 
        <></> : 
        <MFDTable 
          data={data.skills}
          fieldTypes={data.fieldTypes}
          addMutation={addMutation}
          removeMutation={removeMutation}
        />
      }
    </ErrorHandler>
  )
}
