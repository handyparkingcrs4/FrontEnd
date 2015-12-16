angular.module('app')
  .controller('Pswerror', function ($scope, $state, $stateParams) {

    var that = this;
    that.showErrorMessage = showErrorMessage;

    that.email = $stateParams.email;

    function showErrorMessage(err) {
      return err == $stateParams.error;
    }


  });
