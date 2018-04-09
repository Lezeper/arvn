export default () => {
  'ngInject';

  return {
    restrict: 'A',
    require: 'ngModel',
    link: (scope, elem, attr, ctrl) => {
      ctrl.$parsers.push((val) => {
        if(val.length === 3 || val.length === 7) {
          let newVal = val + '-';
          ctrl.$viewValue = newVal;
          ctrl.$render();
          return newVal;
        } else {
          return val;
        }
      });
    }
  }
}