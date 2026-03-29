import { useClient } from '#/api/client'
import type { Soul } from '#/api/queries/soulsQueries'
import { ErrorHandle } from '#/components/ErrorHandle'
import { SoulCard } from '#/components/SoulCard'
import { useQueryClient } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/character-list')({
  component: RouteComponent,
})

function RouteComponent() {
  const client = useClient()
  const queryClient = useQueryClient()

  const { isPending, isError, data, error } = client.queries.useAllSoulsQuery()
  const createSoulMutation = client.mutations.useCreateSoulMutation(queryClient)

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-start">
        <button
          type="button"
          onClick={() => createSoulMutation.mutate()}
          disabled={createSoulMutation.isPending}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 shadow-[0_0_28px_rgba(16,185,129,0.2)] transition hover:border-emerald-300/45 hover:bg-emerald-400/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/5 disabled:text-zinc-500"
        >
          <Plus className="h-4 w-4" />
          {createSoulMutation.isPending ? 'Creating...' : 'Create Soul'}
        </button>
      </div>

      {createSoulMutation.isError ? (
        <p className="text-sm font-medium text-red-300">
          Create failed: {createSoulMutation.error?.message}
        </p>
      ) : null}

      <ErrorHandle isPending={isPending} isError={isError} data={data} error={error}>
        {(souls: Soul[]) => (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {souls.map((soul: Soul) => (
              <SoulCard key={soul.id} {...soul} />
            ))}
          </div>
        )}
      </ErrorHandle>
    </section>
  )
}
