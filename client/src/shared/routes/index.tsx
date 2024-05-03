export const MAIN_PATH = '/';
export const AUTH_ROOT_PATH = 'auth';
export const PROFILE_ROOT_PATH = 'profile';
export const CATALOG_ROOT_PATH = 'catalog';

export const AUTH_ROUTES = {
  signIn: `/${AUTH_ROOT_PATH}/sign-in`,
  signUp: `/${AUTH_ROOT_PATH}/sign-up`
}

export const PROFILE_ROUTES = {
  main: `/${PROFILE_ROOT_PATH}`,
  settings: `/${PROFILE_ROOT_PATH}/settings`,
  favorite: `/${PROFILE_ROOT_PATH}/favorite`,
  orderHistory: `/${PROFILE_ROOT_PATH}/order-history`
}

export const CATALOG_ROUTES = {
  main: `/${CATALOG_ROOT_PATH}`,
  catalogCategory: function (id: string) {
    return `${this?.main}?category=${id}`
  },
  product: function (id: string) {
    return `${this?.main}/${id}`
  }
}