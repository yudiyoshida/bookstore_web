import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryDto } from 'src/shared/dtos/category';
import { CategoryService } from 'src/shared/services/category.service';
import { Observable, map } from 'rxjs';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/shared/services/upload-file.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm!: FormGroup;
  categories$!: Observable<CategoryDto[]>;
  imageUrl!: string;

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
    private uploadFileService: UploadFileService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.createFormBook();
  }

  createFormBook() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      categoryId: ['', Validators.required],
      summaryEnglish: ['', Validators.required],
      summaryPortuguese: ['', Validators.required],
      audioSummaryEnglishUrl: ['', Validators.required],
      audioSummaryPortugueseUrl: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  getAllCategories() {
    this.categories$ = this.categoryService.getAll().pipe(
      map((data) => data.data)
    )
  }

  onFileSelect(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const form = new FormData();
      form.append('file', file);

      this.uploadFileService.uploadFile(form).subscribe({
        next: (res) => {
          this.bookForm.get('imageUrl')?.patchValue(res.url);
          this.imageUrl = res.url;
        },
        error: (err) => {
          this.toastr.error(err.error.error);
        }
      })
    }
  }

  onSubmit() {
    this.bookService.createBook(this.bookForm.value).subscribe({
      next: () => {
        this.toastr.success('Livro cadastrado com sucesso!');
        this.router.navigate(['/books']);
      },
      error: (err) => {
        this.toastr.error(err.error.error[0].message);
      }
    })
  }
}
