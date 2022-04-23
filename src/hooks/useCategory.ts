import { useAPI } from "./useAPI";

export const useCatergory = () => {
  const { data } = useAPI<{ categories: Category[] }>("categories");
  return data?.categories || [];
};
