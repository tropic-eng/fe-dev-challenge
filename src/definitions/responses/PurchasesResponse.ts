import { IPurchase } from "../api/PurchaseBlueprint";

export interface IBaseResponse<Data> {
  data: Data;
  errors: { field: keyof Data | "base"; message: string }[];
}

export type IPurchasesResponse = IBaseResponse<IPurchase[]>;
