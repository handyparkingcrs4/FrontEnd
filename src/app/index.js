'use strict';

angular.module('app', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMessages',
  'ui.gravatar',
  'angular-loading-bar'
])
  .run(function ($rootScope, $http) {

    $http.defaults.transformRequest.push(function (data) {
      $rootScope.progress = true;
      return data;
    });

    $http.defaults.transformResponse.push(function (data) {
      $rootScope.progress = false;
      return data;
    });

  });
