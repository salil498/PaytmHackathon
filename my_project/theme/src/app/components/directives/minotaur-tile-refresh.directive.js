(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileRefresh', minotaurTileRefresh);

  /** @ngInject */
  function minotaurTileRefresh($timeout, cfpLoadingBar) {
    var directive = {
      restrict: 'EA',
      template: '<i class="fa fa-refresh"></i>Refresh',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.on('click', function(){
          tile.addClass('loading');
          cfpLoadingBar.start();

          $timeout(function(){
            tile.removeClass('loading');
            cfpLoadingBar.complete();
          },3000)
        });
      }
    };

    return directive;

  }

})();
