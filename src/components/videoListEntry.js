angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<'
  },
  controller: function() {
    this.url = () => (this.video.snippet.thumbnails.default.url)
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
