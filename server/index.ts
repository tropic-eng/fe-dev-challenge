import express from "express";

import { IGetUserAuthInfoRequest, IPurchase } from "./definitions";

const app = express();

let purchases: IPurchase[] = [
  {
    id: "1pTsrFI29BEexmhOIh1USMxcLxR",
    name: "SalesLoft",
    renewalDate: "1/10/2022",
    value: 50000,
  },
  {
    id: "1pTswrX8ax9qRfCQ12JeFaUs8dk",
    name: "Datadog",
    renewalDate: "6/10/2021",
    value: 30000,
  },
  {
    id: "1pTswotqdFXl5aqM6QRQbTdkJVm",
    name: "Sentry.io",
    renewalDate: "5/7/2022",
    value: 10000,
  },
  {
    id: "1pT2wotqdFXl5aqM6QRQbTdkJVm",
    name: "Clearbit",
    renewalDate: "5/7/2022",
    value: 50000,
  },
  {
    id: "1pTswotcdFXl5aqM6QRQbTdkJVm",
    name: "Github",
    renewalDate: "9/7/2022",
    value: 20000,
  },
  {
    id: "1pTswotqdFQl5aqM6QRQbTdkJVm",
    name: "Figma",
    renewalDate: "5/19/2022",
    value: 123455,
  },
];

app.use((req: IGetUserAuthInfoRequest, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Origin", req.get("origin") || "");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE");

  next();
});

app.get("/healthcheck", (req, res) => {
  res.sendStatus(200);
});

app.get("/purchases", async (req: IGetUserAuthInfoRequest, res) => {
  const { q: query } = req.query;

  if (query) {
    const purchasesByQuery = purchases.filter((purchase) =>
      purchase.name.toLowerCase().includes(query.toLowerCase())
    );

    if (purchasesByQuery.length > 0) {
      return res.send({ data: purchasesByQuery, errors: [] });
    } else {
      return res.send({
        data: [],
        errors: [{ message: "No purchases found" }],
      });
    }
  }
  return res.send({ data: purchases, errors: [] });
});

app.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
});
