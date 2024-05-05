import { axiosApi } from "@/shared/api/config/axios";
import { serverApiFetch } from "@/shared/api/serverApiFetch";
import { SortParams } from "../model/types";


class ProductService {

  productUrl = '/products';

  private buildQueryString(params: SortParams): string {
    const queryStringParams: string[] = [];
  
    if (params.category !== undefined) {
      queryStringParams.push(`category=${encodeURIComponent(params.category)}`);
    }
  
    if (params.sort !== undefined) {
      queryStringParams.push(`sort=${encodeURIComponent(params.sort)}`);
    }
  
    const queryString = queryStringParams.join('&');

    if(queryString) return `?${queryString}`;
    return "";
  }

  getProductById(id: string, isServer: boolean = false) {
    return serverApiFetch(`${this.productUrl}/${id}`);
  };

  getProducts(queries: SortParams, isServer: boolean = false) {
    const queryString = this.buildQueryString(queries);

    if (isServer) {
      return serverApiFetch(`${this.productUrl}/all${queryString}`);
    }
    console.log(`${this.productUrl}/all${queryString}`)
    return axiosApi.get(`${this.productUrl}/all${queryString}`);
  }

};

export default new ProductService();
