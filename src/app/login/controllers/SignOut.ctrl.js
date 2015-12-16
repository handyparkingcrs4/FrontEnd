angular.module('app')
  .controller('SignOutController', function (LoginFactory, APP_NAME) {
    LoginFactory.logout();
  });
