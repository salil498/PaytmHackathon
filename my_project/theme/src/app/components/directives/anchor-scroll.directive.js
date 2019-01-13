(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('anchorScroll', anchorScroll);

  /** @ngInject */
  function anchorScroll($location, $anchorScroll) {
    var directive = {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function() {
          $location.hash(attr.anchorScroll);
          $anchorScroll();
        });
      }
    };

    return directive;

  }

})();
