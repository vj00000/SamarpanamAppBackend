import { TechniqueSummaryDto } from '../../techniques/dto/technique.dto';
export declare class CategoryDto {
    id: string;
    title: string;
    icon: string;
    color: string;
}
export declare class CategoryDetailDto extends CategoryDto {
    description: string;
    image: string;
    techniques: TechniqueSummaryDto[];
}
