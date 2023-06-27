import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookDto } from 'src/shared/dtos/book.dto';
import { BookService } from '../book.service';
import { NgxSpinnerService } from "ngx-spinner"

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$!: Observable<BookDto>;
  
  constructor(
    private bookService: BookService,
    private router: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const bookId = Number(routeParams.get('id'));

    this.spinner.show();
    setTimeout(() => {
      this.getBookById(bookId);
      this.spinner.hide();
    }, 1000)
  }

  getBookById(id: number) {
    this.book$ = this.bookService.findBookById(+id);
  }
}
