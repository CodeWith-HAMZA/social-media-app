import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services";
export const useGetCategories = () => 
{
 return useQuery<any>({
   queryKey: ['categories'],
   queryFn: () => getCategories(),
 });
}; 



const {data, error, isFetched, isRefetching,isStale} = useGetCategories()
 