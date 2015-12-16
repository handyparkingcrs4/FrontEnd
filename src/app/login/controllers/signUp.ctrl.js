angular.module('app')
  .controller('SignUp', function ($rootScope, $scope, $state, LoginFactory, AuthTokenFactory, $window, REDIRECT_TOAPP) {
    'use strict';

    $rootScope.displaySignup = false;

    var that = this;
    that.credentials = {};
    that.signup = signup;


    function signup() {

      that.alertMessage = false;
      resetCustomValidity();


      var username = $scope.form.username.$modelValue
        , password = $scope.form.password.$modelValue;


      if (!$scope.form.$valid) {
        console.log('sono in return');
        return true;

      }


      LoginFactory.signup(username, password)
        .then(function success(response) {

          redirectToMainApp();

          if (response.data.err == 1) {
            $scope.form.username.$setValidity("errSignup", false);
            return true;
          }

          if (response.data.err == 2) {
            $scope.form.username.$setValidity("errcredential", false);
            return true;
          }

          if (response.data.err == 3) {
            $scope.form.username.$setValidity("errGenerics", false);
            return true;
          }

          if (response.data.err == 4) {
            $scope.form.username.$setValidity("errUserExist", false);
            return true;
          }

          if (response.data.err == 5) {
            $scope.form.username.$setValidity("errGenerics", false);
            return true;
          }

          if (response.data.err == 6) {
            $scope.form.username.$setValidity("errEmailNotPres", false);
            return true;
          }


        }, handleError);

    }


    function resetCustomValidity() {
      $scope.form.username.$setValidity("errSignup", true);
      $scope.form.username.$setValidity("errcredential", true);
      $scope.form.username.$setValidity("errGenerics", true);
      $scope.form.username.$setValidity("errUserExist", true);
      $scope.form.username.$setValidity("errEmailNotPres", true);
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
