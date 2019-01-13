(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('ngMixitup', ngMixitup);

  /** @ngInject */
  function ngMixitup($timeout) {
    var directive = {
      restrict: 'EA',
      link: function(scope, element, attrs){
        /* eslint-disable */
        var options;
        if (attrs.ngMixitup) {
          options = scope.$eval(attrs.ngMixitup);
        }
        $timeout(function(){
          var mixer = mixitup(element, options);
        });
        /* eslint-enable */
      }
    };

    return directive;

  }

})();
