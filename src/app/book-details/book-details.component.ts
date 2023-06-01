import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDto } from 'src/shared/dtos/book.dto';
import { BookListService } from '../book-list/book-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$!: Observable<BookDto>;
  
  constructor(
    private bookListService: BookListService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const bookId = Number(routeParams.get('bookId'));

    this.getBookById(bookId);
  }

  getBookById(id: number) {
    this.book$ = this.bookListService.findBookById(+id);
  }
}
