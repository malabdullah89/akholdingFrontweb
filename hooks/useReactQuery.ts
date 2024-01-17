import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "react-query"; // Update import
import axios, { Method } from "axios";
import Cookies from "js-cookie";
import { useQueryClient } from "react-query";

interface QueryObject {
  [key: string]: boolean | string | number | undefined;
}

const filterQueryObject = (obj?: QueryObject): QueryObject => {
  const newObject: QueryObject = {};
  if (obj) {
    Object.keys(obj).map((key) => {
      if (obj[key] === false) newObject[key] = obj[key];
      if (obj[key]) newObject[key] = obj[key];
    });
  }

  return newObject;
};

interface UseReactQueryOptions {
  key?: string;
  url: string;
  page?: number | undefined;
  query?: QueryObject;
  onSuccess?: (data: any) => void;
  onError?: (error: unknown) => void;
  method?: Method;
  enabled?: boolean;
}
const useReactQuery = <T = any>({
  key,
  url,
  page = undefined,
  query = {},
  onSuccess,
  onError,
  method = "GET",
  enabled = true,
}: UseReactQueryOptions) => {
  const token = Cookies.get("ak-token");
  const fetcher = async (data: any, query: QueryObject) => {
    const res = await axios.request({
      baseURL: "http://139.59.13.210:3001/api/v1/",
      url: data?.requestUrl ?? url,
      method,
      data: data,
      params: filterQueryObject(query),
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.data;
  };

  return method === "GET"
    ? (useQuery<T>({
        queryKey: page ? [key, page, query] : [key, query],
        queryFn: (props) => fetcher(undefined, { page, ...query }),
        onError,
        onSuccess,
        enabled,
      }) as UseMutationResult<T> & UseQueryResult<T>)
    : (useMutation<T>(
        page ? [key, page] : [key],
        (data) => fetcher(data, { page, ...query }),
        {
          onError,
          onSuccess,
        }
      ) as UseMutationResult<T> & UseQueryResult<T>);
};

export default useReactQuery;
