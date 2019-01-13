(function() {
  'use strict';

  angular
    .module('minotaur')
    .controller('PagesChatController', PagesChatController);

  /** @ngInject */
  function PagesChatController($resource) {
    var vm = this;
    vm.inbox = $resource('app/components/jsons/chats.json').query();

    vm.archive = function(index) {
      vm.inbox.splice(index, 1);
    };
  }

})();
