(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('activateButton', activateButton);

  /** @ngInject */
  function activateButton($timeout) {
    var directive = {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var activatedClass = 'btn-activated';
        var status = attrs.activateButton;
        var activate = function() {
          element.addClass(activatedClass);
          $timeout(function() {
            element.removeClass(activatedClass);
          }, 1000 );
        };

        element.on('click', function() {
          if (!element.hasClass(activatedClass) && status === 'success') {
            element.addClass('btn-activated-success');
            $timeout(function() {
              element.removeClass('btn-activated-success');
            }, 1000 );
          } else if (!element.hasClass(activatedClass) && status === 'error') {
            element.addClass('btn-activated-error');
            $timeout(function() {
              element.removeClass('btn-activated-error');
            }, 1000 );
          } else if (!element.hasClass(activatedClass)) {
            activate();
          }
        });
      }
    };

    return directive;

  }

})();
