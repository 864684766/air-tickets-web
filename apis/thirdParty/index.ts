import queryString from "query-string";

const appKey = "6145c6add9e4ec77f80624bb0809fec9";
export const getAddress = async (params: any) => {
  params.key = appKey;
  return fetch(`https://restapi.amap.com/v3/ip?${queryString.stringify(params)}`);
};
