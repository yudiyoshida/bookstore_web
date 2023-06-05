import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDto } from 'src/shared/dtos/book.dto';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$!: Observable<BookDto>;
  
  constructor(
    private bookService: BookService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const bookId = Number(routeParams.get('id'));

    this.getBookById(bookId);
  }

  getBookById(id: number) {
    this.book$ = this.bookService.findBookById(+id);
  }
}
