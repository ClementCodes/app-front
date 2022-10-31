import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { userModel } from '../../model/user-model';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-pages-componoent',
  templateUrl: './pages-componoent.component.html',
  styleUrls: ['./pages-componoent.component.scss']
})
export class PagesComponoentComponent implements OnInit {




  userConnection$!: Observable<userModel[]>
  // @Input() user!: userModel;

  constructor(private userHomeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit(): void {


    // this.userConnection$ = this.userHomeService.getUser()


    // console.log(this.userConnection$)

    this.userConnection$ = this.route.data.pipe(

      map(data => data["user"])
    )

  }

}
