import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookDto, BookPaginationDto } from 'src/shared/dtos/book.dto';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  constructor(private http: HttpClient) {}

  findAllBooks(page: number, limit: number, search: string) {
    const params =  new HttpParams({ fromObject: { page, limit, search }});
    return this.http.get<BookPaginationDto>('http://127.0.0.1:3000/books', { params })
  }

  findBookById(id: number) {
    return this.http.get<BookDto>(`http://127.0.0.1:3000/books/${id}`)
  }
}
