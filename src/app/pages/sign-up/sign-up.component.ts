import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  formSignup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  }, { Validators: this.checkPassword })

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  // checkPassword(form: FormGroup) {
  //   const password = form.get('password')?.value;
  //   const confirmPassword = form.get('confirmPassword')?.value;
  //   if (password != confirmPassword) return { notMatch: true }
  //   return null
  // }
  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { notMatch: true }
    } else {
      return null
    }
  }
  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.authService.signup(this.formSignup.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      })
    }
  }
}