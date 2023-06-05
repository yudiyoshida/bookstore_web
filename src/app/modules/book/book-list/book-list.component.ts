import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookDto, BookPaginationDto } from 'src/shared/dtos/book.dto';
import { Observable, map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$!: Observable<BookDto[]>

  constructor(
    private bookService: BookService,
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
    const result = this.bookService.findAllBooks(1, 30, '');
    this.books$ = this.separateData(result)
  }

  filterBooks($event: Observable<BookPaginationDto>) {
    this.books$ = this.separateData($event);
  }
}
