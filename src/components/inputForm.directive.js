angular.module('app')
  .directive('inputForm', function () {
    return {
      restrict: 'E',
      require : ['^form', 'ngModel'],
      scope   : {
        ngModel    : '=',
        ngRequired : '=',
        ngTrim     : '=',
        ngMinlength: '=',
        ngMaxlength: '=',
        ngParent   : '='
      },
      template: '<div class="field-aria-container">' +
      '<div ng-if="ngModel" class="field-aria">{{placeholder}}</div>' +
      '</div>' +
      '<input type="{{type}}"  name="{{name}}" ng-model="ngModel" class="{{css}}" id="{{id}}" placeholder="{{placeholder}}"' +
      'autocomplete="{{autocomplete}}" ng-trim="ngTrim"  ng-required="ngRequired" ng-Minlength="ngMinlength" ng-Maxlength="ngMaxlength"  />' +
      '<div class="help-block">' +
      '<div ng-messages="form[name].$error" ng-if="form[name][strategy] || form.$submitted" ng-messages-include="components/error-messages.html"></div>' +
      '</div>',
      link    : function (scope, el, attr, form) {
        scope.name = attr.ngName;
        scope.id = attr.ngId ? attr.ngId : 'id_' + scope.name;
        scope.css = attr.ngClass ? attr.ngClass : 'form-control';
        scope.type = attr.ngType ? attr.ngType : 'text';
        scope.placeholder = attr.ngPlaceholder ? attr.ngPlaceholder : '';
        scope.autocomplete = attr.ngAutocomplete ? attr.ngAutocomplete : 'on';
        scope.form = form[0];
        scope.strategy = attr.ngErrorstrategy ? attr.ngErrorstrategy : '$touched';


        if(attr.ngImatch) {

          scope.$watchGroup([
              function () {
                return $('#id_password').val();
              },
              function () {
                return $('#' + scope.id).val();
              }

            ],
            function (newVal) {

              if (newVal[0] === newVal[1]) {
               scope.form[scope.name].$setValidity('imatch', true);
              } else {
                scope.form[scope.name].$setValidity('imatch', false);
              }
            });
        }




      }
    }
  });

