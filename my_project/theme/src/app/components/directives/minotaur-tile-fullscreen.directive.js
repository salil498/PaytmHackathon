(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileFullscreen', minotaurTileFullscreen);

  /** @ngInject */
  function minotaurTileFullscreen($log, Fullscreen) {
    var directive = {
      restrict: 'EA',
      template: '<i class="fa fa-expand"></i>Fullscreen',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.on('click', function(){
          if (Fullscreen.isEnabled()) {
            Fullscreen.cancel();
          }
          else {
            Fullscreen.enable(tile[0]);
          }
        });
        Fullscreen.$on('FBFullscreen.change', function(evt, isFullscreenEnabled){
          if (isFullscreenEnabled) {
            tile.addClass('isInFullScreen');
          } else {
            tile.removeClass('isInFullScreen');
          }
        });
      }
    };

    return directive;

  }

})();
