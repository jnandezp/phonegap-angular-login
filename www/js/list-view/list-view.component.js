'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
  module('listView').
  component('listView', {
    templateUrl: 'js/list-view/list-view.template.html',
    controller: function ListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];
    }
  });
