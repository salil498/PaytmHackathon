(function() {
  'use strict';

  angular
    .module('minotaur')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    var unregister = $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      event.targetScope.$watch('$viewContentLoaded', function () {
        angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);
      });
      $rootScope.$state.current = toState;
      $rootScope.specialClass = toState.specialClass;
    });
    $rootScope.$on('$destroy', unregister);

    $log.debug('runBlock end');
  }

})();
