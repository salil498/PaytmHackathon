(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('gaugeChart', gaugeChart);

  /** @ngInject */
  function gaugeChart() {
    /* eslint-disable */
    var directive = {
      restrict: 'A',
      scope: {
        data: '=',
        options: '='
      },
      link: function($scope, $el) {
        var data = $scope.data,
            options = $scope.options,
            gauge = new Gauge($el[0]).setOptions(options);

        gauge.maxValue = data.maxValue;
        gauge.animationSpeed = data.animationSpeed;
        gauge.set(data.val);
      }
    };

    return directive;
    /* esling-enable */

  }

})();
