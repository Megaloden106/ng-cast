angular.module('video-player')
  .component('videoPlayer', {
    bindings: {
      video: '<'
    },
    controller: function() {
      this.url = () => {
        let link = 'https://www.youtube.com/embed/';
        this.video 
          ? link += this.video.id.videoId
          : link += '';
        return link;
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });

