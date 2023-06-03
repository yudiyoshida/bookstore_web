import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BookListService } from 'src/app/book-list/book-list.service';
import { BookPaginationDto } from 'src/shared/dtos/book.dto';
import { TokenService } from 'src/shared/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() bookEmitter = new EventEmitter<Observable<BookPaginationDto>>

  constructor(
    private bookListService: BookListService,
    private tokenService: TokenService,
  ) {}

  filterBooks(search: string) {
    const books$ = this.bookListService.findAllBooks(1, 30, search);
    this.bookEmitter.emit(books$)
  }

  deleteToken() {
    this.tokenService.removeTokenFromLocalStorage();
  }
}
