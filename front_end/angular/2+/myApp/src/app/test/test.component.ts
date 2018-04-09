import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  
  myForm: FormGroup;
  formData = {
    phoneNumber: null
  };
  otherForm = {
    ssn: ''
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      'phoneNumber': ['', Validators.required]
    });

    this.myForm.get('phoneNumber').valueChanges.subscribe(val => {
      if(val !== null && val !== undefined) {
        if(val.length === 4 && val[3] !== '-') {
          this.myForm.get('phoneNumber').setValue(val.substring(0,3) + '-' + val[3]);
        }
        if(val.length === 8 && val[7] !== '-') {
          this.myForm.get('phoneNumber').setValue(val.substring(0,7) + '-' + val[7]);
        }
      }
    });
  }

  onBlur() {
    let elem = this.myForm.get('phoneNumber');
    if(elem.value !== null && elem.value !== undefined) {
      this.formData.phoneNumber = this.myForm.get('phoneNumber').value;
      elem.setValue(elem.value.split('-').map(elem => '*'.repeat(elem.length)).join('-'));
    }
  }

  onFocus() {
    this.myForm.get('phoneNumber').setValue(this.formData.phoneNumber);
  }

  submitForm() {
  }

  submitOther() {
    console.log(this.otherForm)
  }

  formatSSN(val) {
    console.log(val)
  }
  
  ngOnInit() {

  }
}