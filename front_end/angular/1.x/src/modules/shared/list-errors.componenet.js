class ListErrorsCtrl {
  constructor() {}
}

export default {
  bindings: {
    errors: '='
  },
  transclude: true,
  controller: ListErrorsCtrl,
  templateUrl: 'modules/shared/list-errors.html'
}