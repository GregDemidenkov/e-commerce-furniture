import { axiosApi } from "@/shared/api/config/axios";
import { serverApiFetch } from "@/shared/api/serverApiFetch";


class ProductService {

  productUrl = '/products';


  getProductById(id: string, isServer: boolean = false) {
    return serverApiFetch(`${this.productUrl}/${id}`);
  };

};

export default new ProductService();
