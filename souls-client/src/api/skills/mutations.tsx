import { useMutation } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"
import { api_address } from "../client"

const newSkillMutation = (queryClient : QueryClient) => useMutation({
    mutationKey: ["newSkill"],
    mutationFn: async () => {
        const response = await fetch(`${api_address}/skills`, {
            method: "PUT",
        })
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["skills"] })
    }
})

const removeSkillMutation = (queryClient : QueryClient) => useMutation({
    mutationKey: ["removeSkill"],
    mutationFn: async (id: number) => {
        const response = await fetch(`${api_address}/skills/${id}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return id
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["skills"] })
    }
})

export const skillsMutations = {
    newSkillMutation,
    removeSkillMutation
}