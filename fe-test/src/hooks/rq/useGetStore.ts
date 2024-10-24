import { useQuery } from "@tanstack/react-query";
import { fetchBookStores } from "../../services/fetchBookStores";
import { normalizeBookStores } from "../../utility/helpers";

export const useBookStores = () => {
  return useQuery({
    queryKey: ["stores"],
    queryFn: fetchBookStores,
    select: (data) => {
      return normalizeBookStores(data);
    },
  });
};
