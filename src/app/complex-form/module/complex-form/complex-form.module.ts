import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/module/shared.module';
import { ComplexFormComponent } from '../../components/complex-form/complex-form.component';
import { ComplexFormRoutingModule } from '../../routing/complex-form-routing.module';
import { MaterialModule } from 'src/app/shared/module/material/material.module';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ComplexFormService } from '../../service/complex-form.service';







@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComplexFormRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule




  ],
  providers: [
    ComplexFormService
  ]
})
export class ComplexFormModule { }
