(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('activeToggle', activeToggle);

  /** @ngInject */
  function activeToggle() {
    var directive = {
      restrict: 'A',
      link: function postLink(scope, element, attr) {

        element.on('click', function(){

          var target = angular.element(attr.target) || Array(element);

          if (element.hasClass('active')) {
            element.removeClass('active');
            target.removeClass('show');
          } else {
            element.addClass('active');
            target.addClass('show');
          }

        });

      }
    };

    return directive;

  }

})();
