import { axiosApi } from "@/shared/api/config/axios";
import { serverApiFetch } from "@/shared/api/serverApiFetch";


class CategoryService {

  categoryUrl = '/categories';


  getCategories() {
    return axiosApi.get(`${this.categoryUrl}/all`);
  };

  getCategoryById(id: string) {
    return serverApiFetch(`${this.categoryUrl}/${id}`)
  }

};

export default new CategoryService();
