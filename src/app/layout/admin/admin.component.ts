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
  
    this.authService.clearAuthenticatedUser();

    
    this.router.navigate(['/signin']);
  }
}

