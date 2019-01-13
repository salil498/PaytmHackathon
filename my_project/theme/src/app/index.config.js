(function() {
  'use strict';

  angular
    .module('minotaur')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // angular-language
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/languages/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);

    // remove ! hash prefix
    $locationProvider.hashPrefix('');

  }

})();
