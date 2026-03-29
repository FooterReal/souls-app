import { useQuery } from "@tanstack/react-query"
import { useAllSoulsQuery } from "./queries/soulsQueries"

const backendUrl = 'https://localhost:7180/api'

const client = {
    queries: {
        useAllSoulsQuery
    },
    mutations: {

    }
}

export function useClient() {
    return client
}

export function useSliceQuery(apiEndpoint: string, queryKey: [string]) {
    return useQuery({
        queryKey,
        queryFn: async () => {
            const response = await fetch(`${backendUrl}/${apiEndpoint}`)
            if (!response.ok) {
                throw new Error(`Error fetching: ${backendUrl}/${apiEndpoint} - ${response.statusText}`)
            }
            return response.json()
        }
    })
}
