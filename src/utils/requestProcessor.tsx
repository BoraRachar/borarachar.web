import { QueryKey, useMutation, useQuery, useQueryClient } from "react-query";

// Examplo de uso:

// QUERY
// const {
//    data: users,
//    isLoading,
//    isError,
// } = query("users", () => axiosClient.get("/users").then((res) => res.data), {
//    enabled: true,
// });

// MUTATION
// const { mutate: createUser } = mutate("createUser", (user: User) =>
//    axiosClient.post("/users", user).then((res) => res.data)
// );

// https://medium.com/@amavictor/how-to-use-react-query-axios-and-a-custom-request-processor-to-transform-your-data-2a9f0c9f5bf0

export const UseRequestProcessor = () => {
   const queryClient = useQueryClient();

   const useQueryFunction = (
      key: QueryKey,
      queryFunction: any,
      options = {}
   ) => {
      return useQuery({
         queryKey: key,
         queryFn: queryFunction,
         ...options,
      });
   };

   const useMutateFunction = (
      key: QueryKey,
      mutationFunction: any,
      options = {}
   ) => {
      return useMutation({
         mutationKey: key,
         mutationFn: mutationFunction,
         onSettled: () => queryClient.invalidateQueries(key),
         ...options,
      });
   };

   return { useQueryFunction, useMutateFunction };
};
