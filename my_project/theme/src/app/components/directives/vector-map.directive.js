(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('vectorMap', vectorMap);

  /** @ngInject */
  function vectorMap() {
    var directive = {
      restrict: 'AE',
      scope: {
        options: '='
      },
      link: function postLink(scope, element) {
        var options = scope.options;
        element.vectorMap(options);
      }
    };

    return directive;

  }

})();
