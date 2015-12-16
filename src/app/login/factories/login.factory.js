angular.module('app')

  .factory('LoginFactory', function LoginFactory($http, API_URL, URL_SIGNIN, AuthTokenFactory, $q) {
    'use strict';
    return {
      login        : login,
      logout       : logout,
      getUser      : getUser,
      resetPassword: resetPassword,
      changePsw    : changePsw,
      signup       : signup
    };

    /**
     * login factory
     *
     * @param username
     * @param password
     * @returns {*}
     */
    function login(username, password) {
      return $http.post(API_URL + URL_SIGNIN, {
        username: username,
        password: password
      }).then(function success(response) {
        AuthTokenFactory.setToken(response.data.token);
        return response;
      });
    }

    /**
     * signup
     *
     * @param username
     * @param password
     * @returns {*|webdriver.promise.Promise}
     */
    function signup(username, password) {
      return $http.post(API_URL + '/signup', {
        user: {
          email   : username,
          password: password,
          type    : 'parker'
        }

      }).then(function success(response) {
        AuthTokenFactory.setToken(response.data.token);
        return response;
      });
    }


    /**
     * Logout factory
     */
    function logout() {
      AuthTokenFactory.setToken();
    }

    /**
     * return user
     * @returns {*}
     */
    function getUser() {
      if (AuthTokenFactory.getToken()) {
        return $http.get(API_URL + '/me')
      } else {
        return $q.reject({data: 'client has not auth token'});
      }
    }

    /**
     * call reset password,
     * ws, send wemail with token to change it
     *
     * @param email
     * @returns {*|webdriver.promise.Promise}
     */
    function resetPassword(email) {
      return $http.post(API_URL + '/resetpassword', {
        email: email
      }).then(function success(response) {
        return response;
      });
    }

    /**
     * exec password change
     *
     * @param token
     * @returns {*|webdriver.promise.Promise}
     */
    function changePsw(token, password) {
      return $http.post(API_URL + '/changepsw', {
        token   : token,
        password: password
      }).then(function success(response) {
        return response;
      });
    }


  });
