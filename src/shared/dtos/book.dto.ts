export interface BookDto {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  summaryEnglish: string;
  summaryPortuguese: string;
  audioSummaryEnglishUrl: string;
  audioSummaryPortugueseUrl: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}

export interface BookPaginationDto {
  data: BookDto[];
  itemsPerPage : number;
  page: number;
  totalItems : number;
  totalPages: number;
}