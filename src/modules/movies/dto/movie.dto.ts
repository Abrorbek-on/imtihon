import { IsNotEmpty, IsString, IsUUID } from "class-validator"

export class MovieDto {
    @IsNotEmpty()
    @IsString()
    title:string
    
    @IsNotEmpty()
    @IsString()
    slug: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    release_year: string

    @IsNotEmpty()
    @IsString()
    duration_minutes: string

    @IsNotEmpty()
    @IsString()
    rating: string

    @IsNotEmpty()
    @IsUUID()
    category_id: string
}
