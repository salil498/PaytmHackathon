(function() {
  'use strict';

  angular
    .module('minotaur')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    //dashboard
      .state('dashboard', {
        url: '/app/dashboard',
        templateUrl: 'app/pages/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      })
      //app core pages (errors, login,signup)
      .state('pages', {
        url: '/app/pages',
        template: '<div ui-view></div>'
      })
      //login
      .state('pages.login', {
        url: '/login',
        templateUrl: 'app/pages/pages-login/pages-login.html',
        controller: 'LoginController',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      //register
      .state('pages.signup', {
        url: '/signup',
        templateUrl: 'app/pages/pages-signup/pages-signup.html',
        controller: 'SignupController',
        controllerAs: 'vm',
        parent: 'pages',
        specialClass: 'core'
      })
      //forgotpass
      .state('pages.forgotpass', {
        url: '/forgotpass',
        templateUrl: 'app/pages/pages-forgotpass/pages-forgotpass.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      //404
      .state('pages.page404', {
        url: '/page404',
        templateUrl: 'app/pages/pages-404/pages-404.html',
        controller: 'Page404Controller',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      //500
      .state('pages.page500', {
        url: '/page500',
        templateUrl: 'app/pages/pages-500/pages-500.html',
        controller: 'Page500Controller',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      //offline
      .state('pages.offline', {
        url: '/page-offline',
        templateUrl: 'app/pages/pages-offline/pages-offline.html',
        controller: 'PageOfflineController',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      //locked
      .state('pages.locked', {
        url: '/locked',
        templateUrl: 'app/pages/pages-locked/pages-locked.html',
        controller: 'LockedController',
        controllerAs: 'ctrl',
        parent: 'pages',
        specialClass: 'core'
      })
      ;

    $urlRouterProvider.otherwise('/app/pages/login');
  }
 // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin']=true;

})();
