import { PROFILE_ROUTES } from "@/shared/routes";

export default [
  {
    href: PROFILE_ROUTES.settings,
    title: 'Настройки',
    icon: 'settings'
  },
  {
    href: PROFILE_ROUTES.favorite,
    title: 'Избранное',
    icon: 'heart'
  },
  {
    href: PROFILE_ROUTES.orderHistory,
    title: 'История заказов',
    icon: 'orderHistory'
  },
]; 