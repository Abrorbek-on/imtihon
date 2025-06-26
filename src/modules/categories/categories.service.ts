import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from 'src/core/models/category.model/category.model';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel(Category) private categoryModel: typeof Category) {}

    async createCategory(payload: Required<CategoryDto>) {
        let newCategory = await this.categoryModel.create(payload)

        return {
            success: true,
            message: "New Category created",
            data: newCategory
        }
    }
}
