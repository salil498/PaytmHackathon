(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('sparkline', sparkline);

  /** @ngInject */
  function sparkline($timeout) {
    var directive = {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function($scope, $el) {
        var data = $scope.data,
            options = $scope.options,
            chartResize,
            chartRedraw = function() {
              return $el.sparkline(data, options);
            };

        angular.element(window).resize(function() {
          clearTimeout(chartResize);
          chartResize = $timeout(chartRedraw, 200);
        });

        return chartRedraw();
      }
    };

    return directive;

  }

})();
