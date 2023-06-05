import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDto, BookPaginationDto } from 'src/shared/dtos/book.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(
    private http: HttpClient,
  ) {}

  findAllBooks(page: number, limit: number, search: string) {
    const params =  new HttpParams({ fromObject: { page, limit, search }});
    return this.http.get<BookPaginationDto>(`${environment.api}/books`, { params })
  }

  findBookById(id: number) {
    return this.http.get<BookDto>(`${environment.api}/books/${id}`)
  }
}
