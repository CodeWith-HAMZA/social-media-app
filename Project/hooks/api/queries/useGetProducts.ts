 
import { useQuery } from "@tanstack/react-query";

 import { getProducts } from "@/services";
 
export const useGetProducts = () => {
  return useQuery<any>({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
};
// export const useAllApplications = (searchQuery?: string) => {
//   return useQuery<any>({
//     queryKey: [QueryKeys.AllApplications, searchQuery],
//     queryFn: () => getApplications(searchQuery),
//   });
// };

// export const useApplications = (searchQuery?: string) => {
//   return useQuery<Application[]>({
//     queryKey: [QueryKeys.AllApplications, searchQuery], // The searchQuery is part of the query key for caching purposes
//     queryFn: () => fetchApplications(searchQuery),
//     enabled: true, // If searchQuery can be undefined, you can add conditional logic here
//   });
// };