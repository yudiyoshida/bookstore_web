import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryDto, CategoryPaginationDto } from 'src/shared/dtos/category';
import { CategoryService } from 'src/shared/services/category.service';
import { Observable, map } from 'rxjs';
import { BookService } from '../book.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm!: FormGroup;
  categories$!: Observable<CategoryDto[]>;

  constructor(
    private bookService: BookService,
    private categoryService: CategoryService,
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
      title: [' Título teste  ',  Validators.required],
      author: [' Autor teste angular',  Validators.required],
      categoryId: ['4', Validators.required],
      summaryEnglish: [' Resumo em ingles  ', Validators.required],
      summaryPortuguese: [' Resumo em portugues   ', Validators.required],
      audioSummaryEnglishUrl: [' http://audioeng.com  ', Validators.required],
      audioSummaryPortugueseUrl: [' http://audiopt.com ', Validators.required],
      imageUrl: ['']
    })
  }

  separateData(paginatedData: Observable<CategoryPaginationDto>) {
    return paginatedData.pipe(
      map((data) => data.data)
    )
  }

  getAllCategories() {
    const categoriesPaginated = this.categoryService.getAll();
    this.categories$ = this.separateData(categoriesPaginated);
  }

  onSubmit() {
    this.bookService.createBook(this.bookForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('Livro cadastrado com sucesso!');
        this.router.navigate(['/books']);

      },
      error: (err) => {
        this.toastr.error(err.error.error[0].message);

      }
    })
  }
}
