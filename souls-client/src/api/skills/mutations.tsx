import { useMutation } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"
import { api_address } from "../client"
import { getFrom } from "#/common/getset"

const newSkillMutation = (queryClient : QueryClient) => useMutation({
    mutationKey: ["newSkill"],
    mutationFn: async () => {
        const response = await fetch(`${api_address}/skills`, {
            method: "POST",
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

const updateSkillMutation = (queryClient : QueryClient) => useMutation({
    mutationKey: ["updateSkill"],
    mutationFn: async (updatedSkill: Record<string, unknown>) => {
        const response = await fetch(`${api_address}/skills/${getFrom(updatedSkill, 'id')}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedSkill),
        })

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
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
    },
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["skills"] })
    }
})

export const skillsMutations = {
    newSkillMutation,
    updateSkillMutation,
    removeSkillMutation
}