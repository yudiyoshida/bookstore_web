import { Component, EventEmitter, Output } from '@angular/core';
import { TokenService } from 'src/shared/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() bookEmitter = new EventEmitter<string>

  constructor(
    private tokenService: TokenService,
  ) {}

  filterBooks(search: string) {
    this.bookEmitter.emit(search)
  }

  deleteToken() {
    this.tokenService.removeTokenFromLocalStorage();
  }
}
