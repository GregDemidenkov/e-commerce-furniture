import Cookies from "js-cookie";

export const getCookie = (cookieName: string) => {
  return Cookies.get(cookieName)
};

export const setCookie = (
  cookiename: string,
  usrin: any,
  domain = process.env.NEXT_PUBLIC_API_CLIENT_DOMAIN
  ) => {
  console.log(cookiename, usrin, domain)
  Cookies.set(cookiename, usrin, {
    expires: 366, //day
    secure: true,
    sameSite: "strict",
    path: "/",
    domain: domain,
  });
};

export const removeCookie = (
  cookiename: string,
  domain = process.env.NEXT_PUBLIC_API_CLIENT_DOMAIN
  ) => {
  return Cookies.remove(cookiename, { path: "/", domain: domain });
};
