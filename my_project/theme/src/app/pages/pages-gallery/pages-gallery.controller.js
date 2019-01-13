(function() {
  'use strict';

  angular
    .module('minotaur')
    .controller('PagesGalleryController', PagesGalleryController);

  /** @ngInject */
  function PagesGalleryController() {
    var vm = this;

    vm.images = [
      {
        src: 'assets/images/gallery/cat1.jpg',
        title: 'Sed ut perspiciatis unde',
        category: 'cats',
        selected: false
      },{
        src: 'assets/images/gallery/cat2.jpg',
        title: 'Quis autem vel eum iure',
        category: 'cats',
        selected: false
      },{
        src: 'assets/images/gallery/cat3.jpg',
        title: 'Temporibus autem quibusdam',
        category: 'cats',
        selected: false
      },{
        src: 'assets/images/gallery/cat4.jpg',
        title: 'Neque porro quisquam est',
        category: 'cats',
        selected: false
      },{
        src: 'assets/images/gallery/cat5.jpg',
        title: 'Et harum quidem rerum',
        category: 'cats',
        selected: false
      },{
        src: 'assets/images/gallery/animal1.jpg',
        title: 'Nemo enim ipsam voluptatem',
        category: 'animals',
        selected: false
      },{
        src: 'assets/images/gallery/animal2.jpg',
        title: 'At vero eos et accusamus',
        category: 'animals',
        selected: false
      },{
        src: 'assets/images/gallery/animal3.jpg',
        title: 'Itaque earum rerum hic tenetur',
        category: 'animals',
        selected: false
      },{
        src: 'assets/images/gallery/animal4.jpg',
        title: 'Ut enim ad minima veniam',
        category: 'animals',
        selected: false
      },{
        src: 'assets/images/gallery/animal5.jpg',
        title: 'Temporibus autem quibusdam',
        category: 'animals',
        selected: false
      },{
        src: 'assets/images/gallery/city1.jpg',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'assets/images/gallery/city6.jpg',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
      },{
        src: 'assets/images/gallery/city2.jpg',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'assets/images/gallery/city3.jpg',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
      },{
        src: 'assets/images/gallery/city4.jpg',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'assets/images/gallery/city5.jpg',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
      }
    ];

    vm.selectedAll = false;
    vm.isSelected = false;

    vm.selectAll = function () {

      if (vm.selectedAll) {
        vm.selectedAll = false;
        vm.isSelected = false;
      } else {
        vm.selectedAll = true;
        vm.isSelected = true;
      }

      angular.forEach(vm.images, function(image) {
        image.selected = vm.selectedAll;
      });
    };

    vm.selectImage = function(index) {

      var i = 0;

      if (vm.images[index].selected) {
        vm.images[index].selected = false;
      } else {
        vm.images[index].selected = true;
        vm.isSelected = true;
      }

      angular.forEach(vm.images, function(image) {
        if (image.selected) {
          i++;
        }
      });

      if (i === 0) {
        vm.isSelected = false;
      }
    };
  }


})();
