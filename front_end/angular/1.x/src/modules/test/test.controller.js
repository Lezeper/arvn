export default class TestCtrl {
  constructor($scope) {
    'ngInject';

    this.phoneNumberPattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    this.formData = null;
    this.formInvalidCtrl = {
      invalidPhoneNumber: false
    };
  }

  check(elem, invalidName) {
    if(elem.$dirty && elem.$invalid) {
      this.formInvalidCtrl[invalidName] = true;
    } else {
      this.formInvalidCtrl[invalidName] = false;
    }
  }
}