export interface Product {
  id: string,
  name: string,
  description: string,
  category: {
    id: string,
    categoryName: string
  },
  img: string,
  schemeImg: string | null,
  weight: number,
  size: string,
  color: string,
  price: number,
  count: number
};

export interface SortParams {
  category?: string,
  sort?: string
};
