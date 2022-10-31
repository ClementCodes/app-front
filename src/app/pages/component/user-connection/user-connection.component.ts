import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { userModel } from '../../model/user-model';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-user-connection',
  templateUrl: './user-connection.component.html',
  styleUrls: ['./user-connection.component.scss']
})
export class UserConnectionComponent implements OnInit {


  @Input() userColet!: userModel;


  constructor(


  ) { }

  ngOnInit(): void {


  }

}
