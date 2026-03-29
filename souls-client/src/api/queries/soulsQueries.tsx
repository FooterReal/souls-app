import { useSliceQuery } from "../client";

export const useAllSoulsQuery = () => useSliceQuery(
    'souls', 
    ['souls']
)

export default { useAllSoulsQuery }