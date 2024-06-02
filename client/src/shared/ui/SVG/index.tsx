import ProfileSVG from '@public/images/icons/profile.svg';
import CartSVG from '@public/images/icons/cart.svg';
import HeartSVG from '@public/images/icons/heart.svg';
import OrderHistorySVG from '@public/images/icons/order-history.svg';
import SettingsSVG from '@public/images/icons/settings.svg';
import CatalogSVG from '@public/images/icons/catalog.svg';
import DeleteSVG from '@public/images/icons/delete.svg';
import MinusSVG from '@public/images/icons/minus.svg';
import PlusSVG from '@public/images/icons/plus.svg';
import LogoutSVG from '@public/images/icons/logout.svg';

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
    case 'catalog':
      return <CatalogSVG />;
    case 'delete':
      return <DeleteSVG />;
    case 'minus':
      return <MinusSVG />;
    case 'plus':
      return <PlusSVG />;
    case 'logout':
      return <LogoutSVG />;
    default:
      return null;
  }
};
