export default (User) => {
  'ngInject';

  return {
    scope: true,
    restrict: 'A',
    link: (scope, elem, attr) => {
      scope.User = User;

      scope.$watch('User.currentUser', function(val) {
        if(typeof scope.$ctrl.setCurrentUser === 'function') {
          scope.$ctrl.setCurrentUser(val);
        }
        
        if (val) {
          if (attr.showAuthed === 'true') {
            elem.css({ display: 'inherit'})
          } else {
            elem.css({ display: 'none'})
          }
        } else {
          if (attr.showAuthed === 'true') {
            elem.css({ display: 'none'})
          } else {
            elem.css({ display: 'inherit'})
          }
        }
      });
    }
  }
}