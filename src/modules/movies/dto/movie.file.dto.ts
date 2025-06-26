import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { VideoQuality } from "src/core/types/types";

export class MovieFileDto {
    @IsEnum(VideoQuality)
    quality: VideoQuality

    @IsString()
    @IsNotEmpty()
    language: string

    @IsUUID()
    movie_id: string
}