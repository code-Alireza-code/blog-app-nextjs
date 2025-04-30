import { signUpformDataType } from "app/(auth)/signup/page";
import http from "./httpService";

export async function signUpApi(data: signUpformDataType) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}
