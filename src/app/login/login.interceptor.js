angular.module('app')
  .config(function ($httpProvider) {
    /**
     * inject token
     */

    $httpProvider.interceptors.push('AuthInterceptor');

  });
