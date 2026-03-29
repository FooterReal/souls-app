import { useSliceQuery } from "../client";

export type Soul = {
    id: number,
    name: string,
    level: number,
}

export const useAllSoulsQuery = () => useSliceQuery(
    'souls', 
    ['souls']
)

export default { useAllSoulsQuery }