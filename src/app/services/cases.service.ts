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

const httpOptionsLoggedIn = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': localStorage.getItem('authorization')
  })
};

@Injectable({
  providedIn: 'root'
})
export class CasesService {
  baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    const getCasesEP = `${this.baseUrl}/posts`;
    return this.http.get<Case[]>(getCasesEP);
  }

  createPost(postObj): Observable<any> { // determine if type will be any or Case
    const postEP = `${this.baseUrl}/posts`;
    console.log(postEP, postObj);
    return this.http.post<any>(postEP, postObj, httpOptionsLoggedIn);
  }
}
