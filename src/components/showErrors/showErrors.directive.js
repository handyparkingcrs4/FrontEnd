angular.module('app')
  .directive('showErrors', function () {
    return {
      restrict: 'A',
      require:  '^form',
      link: function(scope, el, attrs, formCtrl) {

        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[name]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box so we know the property to check
        // on the form controller
        var inputName = inputNgEl.attr('name');

//console.log(inputNgEl.$viewValue);

        scope.$watch(inputNgEl.$viewValue, function (v) {
  //        console.log('value changed, new value is: ' + v);
        });

        // only apply the has-error class after the user leaves the text box
      //  inputNgEl.bind('blur', function() {
       //   el.toggleClass('has-error', formCtrl[inputName].$invalid);
        //})


      }
    }
  });

