(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurLoading', minotaurLoading);

  /** @ngInject */
  function minotaurLoading($window, $timeout, cfpLoadingBar) {
    var directive = {
      restrict: 'E',
      controller: MinotaurLoadingController,
      controllerAs: 'loading',
      bindToController: true,
      link: function (scope, element) {
        if (!element.hasClass('hide')){
          element.addClass('animate');
        }
        scope.$on('$stateChangeStart', function(event, toState) {
          if (element.hasClass('hide') && toState.specialClass === 'core'){
            element.removeClass('hide');
          }
          cfpLoadingBar.start();
        });
        scope.$on('$stateChangeSuccess', function (event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout(function () {
              cfpLoadingBar.complete();
              element.addClass('hide');
            }, 1000);
          });
        });
      }
    };

    return directive;

    /** @ngInject */
    function MinotaurLoadingController() {

    }
  }

})();
