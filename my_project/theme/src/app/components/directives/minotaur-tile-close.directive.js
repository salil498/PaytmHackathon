(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileClose', minotaurTileClose);

  /** @ngInject */
  function minotaurTileClose($log, alertify) {
    var directive = {
      restrict: 'E',
      template: '<button class="btn btn-transparent"><i class="fa fa-times"></i></button>',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.on('click', function(){
          alertify.confirm("Do you want remove this tile?", function () {
            tile.addClass('closed').fadeOut();
          }, function() {
            // user clicked "cancel"
          });
        });
      }
    };

    return directive;

  }

})();
