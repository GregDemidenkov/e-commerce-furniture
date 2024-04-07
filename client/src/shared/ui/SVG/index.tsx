import ProfileSVG from '@public/images/icons/profile.svg';
import CartSVG from '@public/images/icons/cart.svg';
import HeartSVG from '@public/images/icons/heart.svg';

export const SVG = ({ type }: { type: string }) => {
  switch (type) {
    case 'profile':
      return <ProfileSVG />;
    case 'cart':
      return <CartSVG />;
    case 'heart':
      return <HeartSVG />;
    default:
      return null;
  }
};
