import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoryService: CategoriesService) {}

    @Post()
    createCategory(@Body() payload: CategoryDto) {
        return this.categoryService.createCategory(payload)
    }
}
