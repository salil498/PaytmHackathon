(function() {
  'use strict';

  angular
    .module('minotaur')
    .controller('PagesIntroController', PagesIntroController);

  /** @ngInject */
  function PagesIntroController() {
    var vm = this;

    vm.IntroOptions = {
      overlayOpacity: 0.8,
      showBullets: false,
      showStepNumbers: false,
      nextLabel: 'Next <i class="fa fa-chevron-right"></i>',
      prevLabel: '<i class="fa fa-chevron-left"></i> Previous',
      skipLabel: '<i class="fa fa-close"></i>',
      doneLabel: '<i class="fa fa-close"></i>',
      steps: [
        {
          element: 'minotaur-header .navbar-header',
          intro: '<h2 class="header">Branding Section</h2> <p>You can place your logo here.</p>',
          position: 'right'
        },
        {
          element: 'minotaur-header .main-search',
          intro: '<h2 class="header">Main Search Field</h2> <p>You can assign you search engine function to this element.</p>'
        },
        {
          element: 'minotaur-header #notifications',
          intro: '<h2 class="header">Notifications</h2> <p>Just some dummy data here again.</p>'
        },
        {
          element: 'minotaur-header #profile',
          intro: '<h2 class="header">Your Profile</h2> <p>Dropdown for user actions and subpages.</p>'
        },
        {
          element: 'minotaur-header #language',
          intro: '<h2 class="header">Language Change</h2> <p>You can change current template language. Only for example purposes, just sidebar menu elements translated.</p>',
          position: 'left'
        },
        {
          element: 'minotaur-header #rightbar',
          intro: '<h2 class="header">Right Sidebar Toggle</h2> <p>This one toggle on/off right sidebar.</p>',
          position: 'left'
        },
        {
          element: 'minotaur-nav',
          intro: '<h2 class="header">Sidebar</h2> <p>You can find menu element at this section.</p>',
          position: 'right'
        }
      ]
    };

  }


})();
