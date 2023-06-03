import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReqBody, LoginResBody } from 'src/shared/dtos/login.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(data: LoginReqBody) {
    return this.http.post<LoginResBody>(`${environment.api}/auth/login`, data);
  }
}
