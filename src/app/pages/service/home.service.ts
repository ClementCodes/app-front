import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


import { userModel } from '../model/user-model';



//rien ici dans le injectable car c 'est uh nb enfant qui ne doit pas etre echarge avec app routing mais ici avec pagemodulerouting
@Injectable()
export class HomeService {



  constructor(private http: HttpClient) { }



  getUser(): Observable<userModel[]> {

    let hello = this.http.get<userModel[]>(`${environment.apiUrl}/users`)



    return hello
  }
}
