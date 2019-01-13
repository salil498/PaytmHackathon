(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('magnificPopup', magnificPopup);

  /** @ngInject */
  function magnificPopup() {
    var directive = {
      restrict:'A',
      scope: true,
      link: function (scope, element, attrs) {
        var options;
        if (attrs.magnificPopup) {
          options = scope.$eval(attrs.magnificPopup);
        }
        element.magnificPopup(options);
      }
    };

    return directive;

  }

})();
