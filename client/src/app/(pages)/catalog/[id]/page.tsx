import { ProductPage } from "@/pages/productPage";
import { Product, productSerialize } from "@/entities/product";
import ProductService from "@/entities/product/api/ProductService";

export default async function CatalogElementPage({
  params
}: { 
  params: { id: string } 
}) {
  const data = await ProductService.getProductById(params.id);
  const serializedData: Product = productSerialize(data);

  return (
    <ProductPage data={serializedData}/>
  );
}