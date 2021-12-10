import { useQuery } from "react-query";

import { genericFetch } from "../utils";
import { IPurchase } from "../definitions/api/PurchaseBlueprint";
import { IPurchasesResponse } from "../definitions/responses/PurchasesResponse";
import { DefinedQueryResults } from "../queries/base";

const BASE_PURCHASES_QUERY_KEY = "purchases";

const useFetchPurchases = (): DefinedQueryResults<IPurchase[]> => {
  const query = useQuery<IPurchasesResponse>(
    BASE_PURCHASES_QUERY_KEY,
    async () => {
      const res = await genericFetch<IPurchasesResponse>(
        "http://localhost:8080/purchases"
      );
      return res;
    },
    { keepPreviousData: true }
  );

  return { ...query, data: query.data || [] } as DefinedQueryResults<
    IPurchase[]
  >;
};

export default useFetchPurchases;
