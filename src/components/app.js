angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      youTube.search({query: 'kittens'}, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      });

      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };

      this.service = youTube;
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
    },
    templateUrl: 'src/templates/app.html'
  });
