import { useMutation } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"
import { backendUrl } from "../config"

export const useCreateSoulMutation = (queryClient: QueryClient) => useMutation({
    mutationKey: ['createSoul'],
    mutationFn: async () => {
        const response = await fetch(`${backendUrl}/souls`, {
            method: 'PUT',
        })

        if (!response.ok) {
            throw new Error('Failed to create soul')
        }

        return response.json() as Promise<number>
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['souls'] })
    }
})

export const useDeleteSoulMutation = (queryClient: QueryClient) => useMutation({
    mutationKey: ['deleteSoul'],
    mutationFn: async (soulId: number) => {
        const response = await fetch(`${backendUrl}/souls/${soulId}`, {
            method: 'DELETE',
        })
        
        if (!response.ok) {
            throw new Error('Failed to delete soul')
        }

        return
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['souls'] })
    }
})

export default { useCreateSoulMutation, useDeleteSoulMutation }