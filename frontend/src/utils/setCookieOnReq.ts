import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type MethodType =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "OPTIONS"
  | "HEAD";

export default function setCookieOnRequest(
  cookies: ReadonlyRequestCookies,
  method: MethodType = "GET"
) {
  const accessToken = cookies.get("accessToken");
  const refreshToken = cookies.get("refreshToken");

  const options = {
    method: method,
    credentials: "include",
    headers: {
      Cookie: `${accessToken?.name}=${accessToken?.value}; ${refreshToken?.name}=${refreshToken?.value}`,
    },
  };

  return options;
}
