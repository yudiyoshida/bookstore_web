import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { AuthenticationGuard } from 'src/shared/guards/authentication.guard';
import { SessionIsValidGuard } from 'src/shared/guards/session-is-valid.guard';

const routes: Routes = [
  {
    path: 'books',
    canMatch: [AuthenticationGuard],
    loadChildren: () => import('./modules/book/book.module').then((m) => m.BookModule)
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [SessionIsValidGuard],
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
