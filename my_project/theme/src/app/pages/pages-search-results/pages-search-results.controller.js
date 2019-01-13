(function() {
  'use strict';

  angular
    .module('minotaur')
    .controller('PagesSearchResultsController', PagesSearchResultsController);

  /** @ngInject */
  function PagesSearchResultsController($scope, $timeout) {
    var vm = this;

    vm.refreshSlider = function(){
      $timeout(function() {
        $scope.$broadcast('rzSliderForceRender');
      });
    };
  }


})();
