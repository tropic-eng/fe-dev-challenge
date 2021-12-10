import { Request } from "express";

export interface IGetUserAuthInfoRequest extends Request {
  query: {
    q?: string;
  };
}

export interface IPurchase {
  id: string;
  name: string;
  renewalDate: string;
  value: number;
}
