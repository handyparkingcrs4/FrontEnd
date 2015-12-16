angular.module('app')
  .controller('PswResetMsg', function ($stateParams) {

    this.email = $stateParams.email;

  });
