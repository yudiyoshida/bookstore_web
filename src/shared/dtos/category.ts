export interface CategoryDto {
  id: number;
  title: string;
  imageUrl: string;
}

export interface CategoryPaginationDto {
  data: CategoryDto[];
  itemsPerPage : number;
  page: number;
  totalItems : number;
  totalPages: number;
}