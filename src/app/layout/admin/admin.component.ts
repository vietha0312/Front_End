import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private authService: AuthService, private router: Router) { }
  signOut() {
    // Xóa thông tin đăng nhập từ localStorage
    this.authService.clearAuthenticatedUser();

    // Chuyển hướng người dùng đến trang đăng nhập
    this.router.navigate(['/signin']);
  }
}

