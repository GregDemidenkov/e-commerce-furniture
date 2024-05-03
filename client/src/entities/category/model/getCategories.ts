import CategoryService from "../api/CategoryService"
import { categorySerialize } from "./serializer";
import { Category } from "./types";

export default async () => {
  try {
    const res = await CategoryService.getCategories();

    return categorySerialize(res.data);
  } catch (error) {
    return [] as Category[]
  }
};
