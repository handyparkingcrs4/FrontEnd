angular.module('app')
  .constant('API_URL', 'http://localhost:3000/auth')
  .constant('URL_SIGNIN','/signin')
  .constant('URL_RESETPASSWORD','//resetPassword')
  .constant('SIGN_IN', 'index.html#/sign-in')
  .constant('SIGN_OUT', 'index.html#/sign-out')
  .constant('REDIRECT_TOAPP', '/main.html')
  .constant('APP_NAME','flux')
  .config(function (gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
      size     : 100,
      "default": 'mm'
    };
    gravatarServiceProvider.secure = true;
  });

