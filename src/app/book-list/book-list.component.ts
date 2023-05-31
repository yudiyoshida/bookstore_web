import { Component, OnInit } from '@angular/core';
import { BookListService } from './book-list.service';
import { BookDto } from 'src/shared/dtos/book.dto';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  books$!: Observable<BookDto[]>

  constructor(private bookListService: BookListService) {}
  
  ngOnInit(): void {
    this.getAllBooks('');    
  }

  getAllBooks(search: string) {
    this.books$ = this.bookListService.findAllBooks(1, 30, search).pipe(
      map((data) =>  data.data)
    )
  }
}
