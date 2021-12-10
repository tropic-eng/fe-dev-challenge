# Tropic 2.0

Help! Through an unfortunate accident in our Tropic lab, we've lost all of the Tropic code. We need your help to rebuild from scratch as quickly as possible!

The client app is written entirely in Typescript, using React, and Chakra ui as the component library. We've built an MVP template, but need your help implementing the main view for all our clients' purchases - _Purchases Table_

Please spend only up to two hours implementing the frontend for the purchases table feature. **Important** — when you're done:

- Remove the `node_modules` folder
- Remove `dist folder` from server folder
- Zip up this directory
- Edit the last section of this README file with a short blurb telling us what tradeoffs you made (if any) and how you might improve your solution and any other outstanding thoughts.
- Submit it back to us (nick@tropicapp.io)

## Task details

- Users should be able to see all of their purchases in a table format with key information called out in the columns. Please utilize Chakra's Table component
- Table design should match the figma design which can be found [here](https://www.figma.com/community/file/1050925511958549121/Tropic-Dev-Challenge)

- The search bar should utilize the search functionality provided by the api to filter out specific purchases
- At least one test should be written utilizing the react testing library
- Note: There is no need to touch the api code for this challenge

Bonus:

- On Table row click an alert box should popup with the purchase name that was clicked

No need for implmentation:

- Sorting for each column

## Running locally

- `npm i` — Installs dependencies
- `npm run start:frontend` — Starts the frontend code
- `npm run start:server` — Starts the server

You can run each of these commands in different terminals

## API Endpoints

- `localhost:8080/purchases` Returns all purchases
  Returns:
  ```
  {
      data: [
          {"id":"1pTswotqdFQl5aqM6QRQbTdkJVm","name":"Figma","renewalDate":"5/19/2022","value":123455},
          ... all purchases
      ],
      errors: []
  }
  ```
- `localhost:8080/purchases?q=S` Returns purchases matching a query string by name
  Returns:

  ```
  {
      data: [
        {
          id: "1pTsrFI29BEexmhOIh1USMxcLxR",
          name: "SalesLoft",
          renewalDate: "1/10/2022",
          value: 50000,
       },
       {
        id: "1pTswotqdFXl5aqM6QRQbTdkJVm",
        name: "Sentry.io",
        renewalDate: "5/7/2022",
        value: 10000,
        },
      ],
      errors: []
  }
  ```

  No data result:

  ```
  {
      data: [

      ],
      errors: [{
          message: 'No purchases found'
      }]
  }
  ```

## Tradeoffs and follow-ups

[ Add Your Notes Here ]
