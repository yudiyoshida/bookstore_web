import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private tokenService: TokenService,
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    // this.loginForm = new FormGroup({
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // });

    this.loginForm = this.formBuilder.group({
      credential: ['user@getnada.com', [Validators.required, Validators.email]],
      password: ['123456789', [Validators.required]],
    });
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        this.toastr.success(response.account.name, 'OK!');

        // armazenar token no localStorage
        this.tokenService.saveTokenInLocalStorage(response.token);
        this.router.navigate(['/books']);

      },
      error: (err) => {
        this.toastr.error(err.error.error);
        // this.loginForm.patchValue({ password: '' });

      }
    })
  }
}
