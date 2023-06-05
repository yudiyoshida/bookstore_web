import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SidebarComponent } from 'src/shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
