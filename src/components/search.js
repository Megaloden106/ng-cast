angular.module('video-player')
  .component('search', {
    bindings: {
      result: '<',
    },
    controller: function(youTube) {
      this.query = '';
      this.service = youTube;
      this.search = (query) => {
        this.service.search(query, () => {});
        this.result(query);
      };
    },
    templateUrl: 'src/templates/search.html'
  });
