import ProfileSVG from '@public/images/icons/profile.svg';
import CartSVG from '@public/images/icons/cart.svg';
import HeartSVG from '@public/images/icons/heart.svg';
import OrderHistorySVG from '@public/images/icons/order-history.svg';
import SettingsSVG from '@public/images/icons/settings.svg';

export const SVG = ({ type }: { type: string }) => {
  switch (type) {
    case 'profile':
      return <ProfileSVG />;
    case 'cart':
      return <CartSVG />;
    case 'heart':
      return <HeartSVG />;
    case 'orderHistory':
      return <OrderHistorySVG />;
    case 'settings':
      return <SettingsSVG />;
    default:
      return null;
  }
};
