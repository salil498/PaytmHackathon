(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurCustomize', minotaurCustomize);

  /** @ngInject */
  function minotaurCustomize() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/partials/customize/minotaur-customize.html',
      link: function (scope, element) {
        var toggle = element.find('.toggle');
        toggle.on('click', function(){
          element.toggleClass('open');
        });
      }
    };

    return directive;

  }

})();
