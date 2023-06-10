import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/User';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
  private API_Url = `http://localhost:8080/api`;
  signup(user: any): Observable<any> {
    return this.http.post(`${this.API_Url}/signup`, user)
  }
  loggin(user: any): Observable<any> {
    return this.http.post(`${this.API_Url}/signin`, user)
  }
}
