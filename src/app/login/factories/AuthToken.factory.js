angular.module('app')
  .factory('AuthTokenFactory', function AuthTokenFactory($window, SIGN_IN) {
    'use strict';
    var store = $window.localStorage;
    var key = 'auth-token';

    return {
      getToken: getToken,
      setToken: setToken,
      checkAuth: checkAuth
    };

    function getToken() {
      return store.getItem(key);
    }

    function setToken(token) {
      if (token) {
        store.setItem(key, token);
      } else {
        store.removeItem(key);
      }
    }


    /**
     * check token and redirect if not present
     * this fuction must be called inside app main controller
     * @returns {string}
     */
    function checkAuth() {
      if (!getToken()) {
        return $window.location.href = SIGN_IN;
      }
    }

  });
