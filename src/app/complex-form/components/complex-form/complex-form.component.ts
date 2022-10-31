import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { ComplexFormService } from '../../service/complex-form.service';


@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})


export class ComplexFormComponent implements OnInit {
  loading = false
  userName!: FormControl
  mobileNo!: FormControl
  emailId!: FormControl
  city!: FormControl
  password!: FormControl
  mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private complexFormService: ComplexFormService) { }
  ngOnInit(): void {
    this.initMainForm()
  }
  //la difffenrence entr une methode private et publique c'est les private ne peuvent pas etre appelé depuis le template private
  initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      userName: this.userName,
      mobileNo: this.mobileNo,
      emailId: this.emailId,
      city: this.city,
      password: this.password
    })

  }
  onSubmitForm() {
    this.loading = true;
    console.log(this.mainForm.value)
    this.complexFormService.saveUserInfo(this.mainForm.value).pipe(
      tap(saved => {
        this.loading = false;
        if (saved) {
          this.resetForm();
        } else {
          console.error('Echec de l\'enregistrement');
        }
      })
    ).subscribe();
  }


  private resetForm() {
    this.mainForm.reset();

  }

}