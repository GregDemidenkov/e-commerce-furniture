import { CatalogPage } from "@/pages/catalogPage";
import { Product, productsSerialize } from "@/entities/product";
import ProductService from "@/entities/product/api/ProductService";
import CategoryService from "@/entities/category/api/CategoryService";
import { Category, categoryElSerialize } from "@/entities/category";

export default async function Catalog({
  searchParams
}: {
  searchParams: { category?: string }
}) {
  let dataCategory: null | Category = null;

  const data = await ProductService.getProducts({
    category: searchParams.category,
    sort: undefined
  }, true);

  if (searchParams.category) {
    dataCategory = await CategoryService.getCategoryById(searchParams.category);
    dataCategory = categoryElSerialize(dataCategory);
  }

  const serializedData: Product[] = productsSerialize(data);

  return (
    <CatalogPage
      category={dataCategory}
      initialProducts={serializedData}
    />
  );
}