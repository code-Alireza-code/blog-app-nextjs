import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { AxiosRequestConfig, Method } from "axios";

export default function setCookieOnRequestAxios(
  cookies: ReadonlyRequestCookies,
  method: Method = "GET"
): AxiosRequestConfig {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const cookieHeader = [
    accessToken ? `${accessToken.name}=${accessToken.value}` : null,
    refreshToken ? `${refreshToken.name}=${refreshToken.value}` : null,
  ]
    .filter(Boolean)
    .join("; ");

  const options: AxiosRequestConfig = {
    method: method,
    withCredentials: true,
    headers: {
      ...(cookieHeader && { Cookie: cookieHeader }),
    },
  };

  return options;
}
