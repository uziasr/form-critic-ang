import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Case } from '../models/Case';
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
export class CasesService {
  baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    const getCasesEP = `${this.baseUrl}/posts`
    return this.http.get<Case[]>(getCasesEP);
  }
  createUser(user): Observable<User> {
    const userEP = `${this.baseUrl}/users/register`;
    return this.http.post<User>(userEP, user, httpOptions);
  }
}
