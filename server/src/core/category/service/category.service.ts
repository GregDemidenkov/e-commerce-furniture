import { Injectable } from "@nestjs/common"
import { IdDto } from "src/core/common/dto/id.dto"

import { CategoryDao } from "src/infra/db/dao/category.dao"
import { Category } from "src/infra/db/models/category.model"


@Injectable()
export class CategoryService {

    constructor(private readonly categoryDao: CategoryDao) {}


    async getAll(): Promise<Category[]> {
        return this.categoryDao.getAll()
    }

    async getById(dto: IdDto) {
        return this,this.categoryDao.findById(dto.id)
    }
    
}