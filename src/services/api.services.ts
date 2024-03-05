import { AxiosError, AxiosResponse } from "axios";
import http from "./request";

export function requestDemo(body: IRequestDemo): Promise<AxiosResponse> {
  return new Promise((resolve, reject) => {
    http("/demoRequest/create", "post", body, null)
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}

export function getAllPackages(): Promise<AxiosResponse> {
  return new Promise((resolve, reject) => {
    http("/package", "get", null, null)
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}

export function startFreeTrial(body: ISignUp): Promise<AxiosResponse> {
  return new Promise((resolve, reject) => {
    http("/user/create-free-trial-user", "post", body, null)
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}
