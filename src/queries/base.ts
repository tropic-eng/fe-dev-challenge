import { UseQueryResult } from "react-query";

// Second type arg is error shape
export type BaseQueryResult<T> = UseQueryResult<T, unknown>;

// Returns all react-query args and an optional separate key for the data
export type QueryResults<Return, Key = {}> = BaseQueryResult<Return> &
  Partial<Key>;

// Asserts that data will be defined
export type DefinedQueryResults<Return, Key = {}> = QueryResults<
  Return,
  Key
> & { data: Return };
