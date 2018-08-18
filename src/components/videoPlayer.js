angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function($scope) {
      // $scope.video = this.video;
      // this.test = () => console.log('video', $scope.video)
      this.url = () => {
        let link = 'https://www.youtube.com/embed/'
        this.video 
          ? link += this.video.id.videoId
          : link += '';
        return link;
      };

      this.hasLink = () => {
        return this.video !== undefined;
      }
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });

