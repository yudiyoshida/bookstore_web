import { Component, OnInit } from '@angular/core';
import { BookListService } from './book-list.service';
import { BookDto, BookPaginationDto } from 'src/shared/dtos/book.dto';
import { Observable, catchError, map, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$!: Observable<BookDto[]>

  constructor(
    private bookListService: BookListService,
    private toastr: ToastrService,
  ) {}
  
  ngOnInit(): void {
    this.getAllBooks();    
  }

  separateData(paginatedData: Observable<BookPaginationDto>) {
    return paginatedData.pipe(
      map((data) => data.data)
    )
  }

  getAllBooks() {
    this.bookListService.findAllBooks(1, 30, '').pipe(
      map((response: any) => {
        this.books$ = this.separateData(response)
      }),
      catchError((err) => {
        this.toastr.error(err.error.error, 'Erro!')
        return of([])
      })
    )
  }

  filterBooks($event: Observable<BookPaginationDto>) {
    this.books$ = this.separateData($event);
  }
}
