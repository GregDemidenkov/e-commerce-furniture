import { axiosApi } from "@/shared/api/config/axios";


class CategoryService {

  categoryUrl = '/categories';


  getCategories() {
    return axiosApi.get(`${this.categoryUrl}/all`);
  };

};

export default new CategoryService();
