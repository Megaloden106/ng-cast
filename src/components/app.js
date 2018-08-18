angular.module('video-player')
  .component('app', {
    controller: function($scope, youTube) {
      youTube.search({query: 'kittens'}, (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      });

      this.searchResults = (query) => {
        youTube.search({query}, (data) => {
          console.log(data)
          this.videos = data;
          this.currentVideo = data[0];
        });
      }
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      }
    },
    templateUrl: 'src/templates/app.html'
  });
