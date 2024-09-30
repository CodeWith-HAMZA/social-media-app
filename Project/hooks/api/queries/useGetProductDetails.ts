 
import { useQuery } from "@tanstack/react-query";

import { getProductDetails, getProducts } from "@/services";

export const useGetProductDetails = (productId: string | number) => {
 return useQuery<any>({
   queryKey: ['products', productId],
   queryFn: () => getProductDetails(productId),
 });
}; 
 