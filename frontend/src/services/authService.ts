import { signUpformDataType } from "app/(auth)/signup/page";
import http from "./httpService";
import { signinFormDataType } from "app/(auth)/signin/page";

export async function signUpApi(data: signUpformDataType) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signInApi(data: signinFormDataType) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
