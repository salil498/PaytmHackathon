(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('keypressEscape', keypressEscape);

  /** @ngInject */
  function keypressEscape() {
    var ESCAPE_KEY = 27;

    var directive = {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.bind('keydown', function (event) {
          if (event.keyCode === ESCAPE_KEY) {
            scope.$apply(attrs.keypressEscape);
          }
        });
      }
    };

    return directive;

  }

})();
