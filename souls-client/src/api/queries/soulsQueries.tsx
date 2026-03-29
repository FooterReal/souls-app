import { useQuery } from "@tanstack/react-query";
import { backendUrl } from "../config";

export type Soul = {
    id: number,
    name: string,
    level: number,
}

export const useAllSoulsQuery = () => useQuery({
    queryKey: ['souls'],
    queryFn: async () => {
        const response = await fetch(`${backendUrl}/souls`)
        if (!response.ok) {
            throw new Error('Failed to fetch souls')
        }
        return response.json() as Promise<Soul[]>
    }
})

export default { useAllSoulsQuery }