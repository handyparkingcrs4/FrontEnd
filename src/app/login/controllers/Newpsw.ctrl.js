angular.module('app')
  .controller('Newpsw', function ($scope, $state, $stateParams, LoginFactory) {

    var that = this;
    that.email = $stateParams.email;
    that.token = $stateParams.token;
    that.alertMessage = false;
    that.changePassword = changePassword;
    that.credentials = {};





    /**
     * exec change password
     *
     * @returns {boolean}
     */
    function changePassword() {
      that.alertMessage = false;
      var form = $scope.form;

      if (that.credentials.password != that.credentials.passwordrepeat) {
        form.passwordrepeat.$setValidity('imatch', false);
      } else {
        form.passwordrepeat.$setValidity('imatch', true);
      }

      if (!form.$valid || !$stateParams.token) {
        return true;
      }


      var email = $stateParams.email;
      /**
       * call factory data
       */
      console.log(form.password.$modelValue);
      console.log($stateParams.token);

      LoginFactory.changePsw($stateParams.token, form.password.$modelValue)
        .then(function success(response) {


          if (!response.data.success) {

            if (!response.data.err) {
              return $state.go('password-error', {email: email, error: 0});
            }

            if (response.data.err) {
              return $state.go('password-error', {email: email, error: response.data.err});
            }

            that.alertMessage = "La password non rispetta i criteri di sicure";
          }


          return $state.go('password-done', {email: email});


        }, handleError);
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

//p16jtio8oh248o8xsc
