import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_DEVELOPMENT_BASE_URL;
const http = (
  url: string,
  type: "get" | "post" | "delete" | "patch",
  body: any | null,
  token: string | null
): Promise<AxiosResponse> => {
  return new Promise((resolve, reject) => {
    axios[type](
      `${baseURL}${url}`,
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : body
    )
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
};
export default http;
