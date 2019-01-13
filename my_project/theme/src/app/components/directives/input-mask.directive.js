(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('inputMask', inputMask);

  /** @ngInject */
  function inputMask() {
    var directive = {
      restrict:'A',
      scope: true,
      link: function (scope, element, attrs) {
        var options;
        if (attrs.inputMask) {
          options = scope.$eval(attrs.inputMask);
        } else if (attrs.maskOptions) {
          options = scope.$eval(attrs.maskOptions);
        }
        angular.element(element).inputmask(options);
      }
    };

    return directive;

  }

})();
