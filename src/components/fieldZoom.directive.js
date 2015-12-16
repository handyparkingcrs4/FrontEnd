angular.module('app')
  .directive('fieldZoom', function () {
    return {
      restrict: 'E',
      scope   : {
        field: '='
      },
      require : ['^form'],
      template: '<div class="field-aria-container">' +
                '<div ng-if="field.$viewValue" class="field-aria">{{placeholder}}</div>' +
                '</div>',
      link: fz_link
    }

  });

var fz_link =  function (scope, el, attr, form) {
  scope.placeholder = attr.text;
};
