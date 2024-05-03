import { CatalogPage } from "@/pages/catalogPage";
import { Product, productsSerialize } from "@/entities/product";
import ProductService from "@/entities/product/api/ProductService";

export default async function Catalog({
  searchParams
}: {
  searchParams: { category?: string }
}) {
  const data = await ProductService.getProducts({
    category: searchParams.category,
    sort: undefined
  }, true);

  const serializedData: Product[] = productsSerialize(data);
  const categoryName = searchParams.category ? serializedData[0]?.category?.categoryName : "";
  console.log(serializedData);
  return (
    <CatalogPage
      category={categoryName}
      products={serializedData}
    />
  );
}