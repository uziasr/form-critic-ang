import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Case } from '../models/Case';
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

  constructor(private http: HttpClient) { }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>('http://localhost:8080/api/posts/');
  }
}
