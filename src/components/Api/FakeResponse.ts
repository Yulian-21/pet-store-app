import { AxiosResponse } from "axios";
import { resolve } from "path";

export const responseHandler = <T>(data: T): AxiosResponse => {
  return {
    status: 200,
    statusText: "OK",
    data: data,
    headers: {},
    config: {},
    request: {},
  };
};

export const promisify = <T>(data: T): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(responseHandler(data));
    }, 1000);
  });
};
