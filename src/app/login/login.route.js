angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/auth/sign-in");

    $stateProvider
      .state('sign-in', {
        url        : "/auth/sign-in",
        templateUrl: "app/login/tmpl/signin.tmpl.html",
        controller : "LoginController",
        controllerAs: "vm"
      })

      .state('sign-out', {
        url         : "/auth/sign-out",
        templateUrl : "app/login/tmpl/signout.tmpl.html",
        controller  : "SignOutController",
        controllerAs: "signOut"
      })

      .state('password-reset', {
        url         : "/auth/password-reset",
        templateUrl : "app/login/tmpl/passwordReset.tmpl.html",
        controller  : "ResetPassword",
        controllerAs: "resetp"
      })

      .state('password-reset-message', {
        url         : "/auth/password-reset-message/{email}",
        templateUrl : "app/login/tmpl/passwordResetMsg.tmpl.html",
        controller  : "PswResetMsg",
        controllerAs: "pswrsm"
      })

      .state('new-password', {
        url         : "/auth/new-password/{token}/{email}",
        templateUrl : "app/login/tmpl/newpassword.tmpl.html",
        controller  : "Newpsw",
        controllerAs: "npsw"
      })

      .state('password-done', {
        url         : "/auth/password-done/{email}",
        templateUrl : "app/login/tmpl/passworddone.tmpl.html"
      })

      .state('password-error', {
        url         : "/auth/password-error/{email}/{error}",
        templateUrl : "app/login/tmpl/passworderror.tmpl.html",
        controller  : "Pswerror",
        controllerAs: "perr"
      })

      .state('sign-up', {
        url         : "/auth/sign-up",
        templateUrl : "app/login/tmpl/sign-up.tmpl.html",
        controller  : "SignUp",
        controllerAs: "sup"
      })


  });
