import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PagesModuleRoutingModule } from './pages-module-routing.module';
import { PagesComponoentComponent } from '../../component/pages-componoent/pages-componoent.component';
import { HomeService } from '../../service/home.service';

import { SharedModule } from 'src/app/shared/module/shared.module';
import { UserConnectionComponent } from '../../component/user-connection/user-connection.component';
import { HomeResolver } from '../../resolver/home.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/module/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PagesComponoentComponent,
    UserConnectionComponent
  ],
  imports: [
    CommonModule,
    PagesModuleRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    MatToolbarModule
  ]
  ,
  providers: [
    HomeService,
    HomeResolver

  ]
})
export class PagesModuleModule { }
