import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
  template: `
  <button (click)="signOut()">Sign Out</button>
`
})
export class SignOutComponent {
  constructor(private authService: AuthService, private router: Router) { }
  signOut() {
    // Xóa thông tin đăng nhập từ localStorage
    this.authService.clearAuthenticatedUser();

    // Chuyển hướng người dùng đến trang đăng nhập
    this.router.navigate(['/signin']);
  }
}
