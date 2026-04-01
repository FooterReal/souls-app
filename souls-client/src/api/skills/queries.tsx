import { useQuery } from "@tanstack/react-query"
import { api_address } from "../client"

const allSkillsQuery = () => useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
        const response = await fetch(`${api_address}/skills`)

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        
        return response.json()
    }
})


export const skillsQueries = {
    allSkillsQuery
}