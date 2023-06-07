import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UploadFileDto } from '../dtos/file';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }

  uploadFile(form: FormData) {
    return this.http.post<UploadFileDto>(`${environment.api}/upload-file`, form)
  }
}
