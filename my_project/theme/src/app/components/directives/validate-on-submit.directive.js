(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('validateOnSubmit', validateOnSubmit);

  /** @ngInject */
  function validateOnSubmit() {
    var directive = {
      require: 'form',
      restrict: 'A',
      link: function( scope , element , attributes ){
        var $element = angular.element(element);
        $element.on('submit', function() {
          $element.find('.ng-pristine').removeClass('ng-pristine').addClass('ng-dirty');
          var form = scope[ attributes.name ];
          angular.forEach( form , function ( formElement , fieldName ) {
            if ( fieldName[0] === '$' ) {return;}
            formElement.$pristine = false;
            formElement.$dirty = true;
          },this);
          form.$setDirty();
          scope.$apply();
        });
      }
    };

    return directive;

  }

})();
