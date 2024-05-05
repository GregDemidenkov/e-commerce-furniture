import { Controller, Get, Param } from "@nestjs/common"

import { CategoryService } from "src/core/category/service/category.service"
import { IdDto } from "src/core/common/dto/id.dto"
import { Category } from "src/infra/db/models/category.model"


@Controller('categories')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}


    @Get('all/')
    getAll(): Promise<Category[]> {
        return this.categoryService.getAll()
    }

    @Get(':id')
    getCategoryById(@Param() dto: IdDto): Promise<Category> {
        return this.categoryService.getById(dto)
    }

}