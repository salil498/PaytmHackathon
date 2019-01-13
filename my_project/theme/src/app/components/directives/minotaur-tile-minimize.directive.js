(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileMinimize', minotaurTileMinimize);

  /** @ngInject */
  function minotaurTileMinimize() {
    var directive = {
      restrict: 'EA',
      template: '<i class="fa fa-angle-up"></i>Minimize',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.on('click', function(){

          if (tile.hasClass('collapsed')) {
            element[0].innerHTML = '<i class="fa fa-angle-up"></i>Minimize'
          } else {
            element[0].innerHTML = '<i class="fa fa-angle-down"></i>Expand'
          }

          tile.toggleClass('collapsed');
          tile.children().not('.tile-header').slideToggle(150);

        });
      }
    };

    return directive;

  }

})();
