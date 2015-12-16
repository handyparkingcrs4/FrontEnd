angular.module('app')
  .controller('ResetPassword', function ($rootScope,$scope, $state, LoginFactory) {

    var that = this;
    that.alertMessage = false;
    that.resetPassword = resetPassword;
    that.credentials = {};
    $rootScope.displaySignup = false;


    /**
     * request reset password;
     * @param form
     * @returns {boolean}
     */
    function resetPassword() {

      that.alertMessage = false;
      var form = $scope.loginForm;

      if (!form.$valid) {
        return true;
      }

      // get form param
      var email = form.email.$modelValue;

      //call factory
      LoginFactory.resetPassword(email)
        .then(function success(response) {

          if (response.data.success) {
            return $state.go('password-reset-message',{email:email});
          }
          that.alertMessage = "Utente non riconosciuto";
        }, handleError);
    }

    function handleError(response) {
      that.alertMessage = "System in maintenance, please try later....";
      // alert('Error:' + response.data);
    }


  });
