(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('nativeTabs', nativeTabs);

  /** @ngInject */
  function nativeTabs() {
    var directive = {
      restrict: 'EA',
      link: function(scope, element){
        var $element = angular.element(element);
        $element.on('click', function(e) {
          e.preventDefault();
          $element.tab('show');
        });
      }
    };

    return directive;

  }

})();
