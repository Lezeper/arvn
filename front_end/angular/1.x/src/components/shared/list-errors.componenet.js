class ListErrorsCtrl {
  constructor() {}
}

export default {
  bindings: {
    errors: '='
  },
  transclude: true,
  controller: ListErrorsCtrl,
  templateUrl: 'components/shared/list-errors.html'
}