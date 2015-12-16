angular.module('app')
  .controller('LoginController', function ($rootScope, $scope, $window, LoginFactory, AuthTokenFactory, REDIRECT_TOAPP) {
    'use strict';

    var that = this;
    that.login = login;
    that.logout = logout;
    that.alertMessage = false;
    that.credentials = {};
    $rootScope.displaySignup = true;

    /**
     * if user is authenticated redirect to main app else continue
     */
    redirectToMainApp();

    /**
     *
     * @param form
     * @returns {boolean}
     */
    function login() {

      that.alertMessage = false;
      var form = $scope.loginForm;

      if (!form.$valid) {
        return true;
      }


      var username = form.username.$modelValue,
          password = form.password.$modelValue;

      LoginFactory.login(username, password)
        .then(function success(response) {

          if (!response.authorized) {
            that.alertMessage = "Incorrect user or password";
          }
          redirectToMainApp();

        }, handleError);

    }


    /**
     * check if user is authenticated and redirect to main index
     * else continue to login
     */
    function redirectToMainApp() {

      if (AuthTokenFactory.getToken()) {
        $window.location.href = REDIRECT_TOAPP;
      }

    }


    /**
     * logout function
     */
    function logout() {
      LoginFactory.logout();
      that.user = null;
    }

    /**
     * manage error on response
     *
     * @param response
     */
    function handleError(response) {
      // enable buttons loading
      $rootScope.progress = false;
      //send message
      that.alertMessage = "System in maintenance, please try later...";
      // alert('Error:' + response.data);
    }

  });
