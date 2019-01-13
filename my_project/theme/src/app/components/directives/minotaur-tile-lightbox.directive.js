(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileLightbox', minotaurTileLightbox);

  /** @ngInject */
  function minotaurTileLightbox() {
    var directive = {
      restrict: 'EA',
      template: '<i class="fa fa-magnet"></i>Open in Lightbox',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.magnificPopup({
          items: {
            src: tile[0],
            type: 'inline'
          },
          closeBtnInside: false
        });
      }
    };

    return directive;

  }

})();
