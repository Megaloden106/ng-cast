angular.module('video-player')
  .component('search', {
    bindings: {
      onClick: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
