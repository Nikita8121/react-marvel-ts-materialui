interface IApiResponse {
  total: number;
  offset: number;
  limit: number;
  results: any[];
}

interface ITransformedApiResponse {}
const transformApiResponse = (
  response: IApiResponse[] | undefined,
): ITransformedApiResponse | undefined => {
  return response?.map((el) => el.results).flat();
};

export default transformApiResponse;
