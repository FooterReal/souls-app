import { useQueryClient } from "@tanstack/react-query"
import { skillsQueries } from "./skills/queries"
import { skillsMutations } from "./skills/mutations"

export const api_address = "https://localhost:7180/api"

export const useRequests = () => {
    const requests = {
        api_address,
        client: useQueryClient(),
        queries: {
            skillsQueries
        },
        mutations: {
            skillsMutations
        }
    }

    return requests
}

