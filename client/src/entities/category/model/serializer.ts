import { Category } from "./types";

export const categorySerialize = (data: any): Category[] => {
  return data.map((item: any) => ({
    id: item._id,
    categoryName: item.category_name
  })) as Category[];
}