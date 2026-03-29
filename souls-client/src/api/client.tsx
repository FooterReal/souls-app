import { useCreateSoulMutation } from "./mutations/soulsMutations"
import { useAllSoulsQuery } from "./queries/soulsQueries"

type ApiClient = {
    queries: Record<string, (...args: any[]) => any>
    mutations: Record<string, (...args: any[]) => any>
}

const client: ApiClient = {
    queries: {
        useAllSoulsQuery
    },
    mutations: {
        useCreateSoulMutation
    }
}

export function useClient() {
    return client
}
