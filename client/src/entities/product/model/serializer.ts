import { Product } from "./types";

export const productSerialize = (data: any): Product => {
  return {
    id: data._id,
    name: data.name,
    description: data.description,
    category: {
      id: data.category._id,
      categoryName: data.category.category_name
    },
    img: data.img,
    schemeImg: data.scheme_img,
    weight: data.weight,
    size: data.size,
    color: data.color,
    price: data.price,
    count: data.count
  } as Product;
};

export const productsSerialize = (data: any): Product[] => {
  return data.map((item: any) => productSerialize(item));
}