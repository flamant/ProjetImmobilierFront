import { Component, OnInit, Inject, HostListener } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material';
import {UserDTO} from './../user-dto';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  providers: [
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'accent' }}
  ]
})
export class UserDialogComponent implements OnInit {


  public dialogFormGroup: FormGroup;
  public login = true;
  @HostListener('window:resize', ['$event'])
  onResize() {
    const browserWidth = document.body.offsetWidth;
    const left = (browserWidth - 470) / 2.;
    this.dialogRef.updatePosition({ top: '70px', left: (left + 'px')});
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    private service: RequestService) {
     }

  ngOnInit() {
    this.dialogFormGroup = this.formBuilder.group({
      gender: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: new FormControl('', Validators.required),
      email: ['', Validators.compose([Validators.email, Validators.required])],
          // tslint:disable-next-line: max-line-length
          password: ['', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])],
          confirmPassword: ['', []]
    });
    const confirmPasswordControl = this.dialogFormGroup.get('confirmPassword');
    // tslint:disable-next-line: max-line-length
    confirmPasswordControl.setValidators(Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), this.validateAreEqual.bind(this)]));
  }

  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.dialogFormGroup.get('password').value ? null : {
        NotEqual: true
    };
  }

  save() {
    if (this.login) {
      // tslint:disable-next-line: max-line-length
      const userDTO = new UserDTO(0, '', '', '', this.dialogFormGroup.get('email').value , this.dialogFormGroup.get('password').value, '', '', '', '', '', '', '', '', '', 0, 0, '', 0, 0, 0, 0, 0, 0, 0, '', '');
      this.service.login(userDTO);
    } else {
      // tslint:disable-next-line: max-line-length
      const userDTO = new UserDTO(0, this.dialogFormGroup.get('gender').value, this.dialogFormGroup.get('lastName').value, this.dialogFormGroup.get('firstName').value, this.dialogFormGroup.get('email').value, this.dialogFormGroup.get('password').value, this.dialogFormGroup.get('confirmPassword').value, '', '', '', '', '', '', '', '', 0, 0, '', 0, 0, 0, 0, 0, 0, 0, '', '');
      this.service.createUser(userDTO);
    }
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(true);
  }

}
