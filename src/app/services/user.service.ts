import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  createUser(user): Observable<User> {
    console.log('this is creating user');
    const userEP = `${this.baseUrl}/users/register`;
    return this.http.post<User>(userEP, user, httpOptions);
  }

  userLogin(user): Observable<any> {
    console.log('this is logging in a user');
    const loginEP = `${this.baseUrl}/users/login`;
    return this.http.post<User>(loginEP, user, httpOptions);
  }
}
