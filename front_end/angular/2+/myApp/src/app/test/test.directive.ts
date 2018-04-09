import { Directive, ElementRef } from '@angular/core';

@Directive({ 
  selector: '[ssn-format]',
  host: {
    "(focus)" : 'onFocus()',
    "(blur)" : 'onBlur()',
    "(input)" : 'onInputChange($event.target.value)'
  }
})
export class PhoneNumberDirective {
  origin: string = '';

  constructor(
    private elem: ElementRef,
  ) {}

  onInputChange(val) {
    let newVal = val;
    if(val !== null && val !== undefined) {
      if(val.length === 4 && val[3] !== '-') {
        newVal = (val.substring(0,3) + '-' + val[3]);
      }
      if(val.length === 7 && val[6] !== '-') {
        newVal = (val.substring(0,6) + '-' + val[6]);
      }
    }
    this.elem.nativeElement.value = newVal;
  }

  onFocus() {
    this.elem.nativeElement.value = this.origin;
  }
  // I think it is just changing the viewValue, that's why the modelValue didn't changed
  onBlur() {
    this.origin = this.elem.nativeElement.value;
    this.elem.nativeElement.value = this.elem.nativeElement.value.split('-').map(val=>'*'.repeat(val.length)).join('-');
  }
}