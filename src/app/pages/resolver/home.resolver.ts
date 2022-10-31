import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { userModel } from '../model/user-model';
import { HomeService } from '../service/home.service';

@Injectable()
export class HomeResolver implements Resolve<userModel[]> {
  constructor(private homeService: HomeService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<userModel[]> {
    return this.homeService.getUser()
  }
}
