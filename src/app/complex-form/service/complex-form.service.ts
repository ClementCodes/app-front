import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, delay, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

import { ComplexFormValue } from '../model/complex-form-value';

@Injectable()
export class ComplexFormService {

  constructor(private http: HttpClient) { }

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/save`, formValue).pipe(
      map(value => true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }
}