angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: YOUTUBE_API_KEY,
          q: query,
          maxResult: 5, 
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then(response => callback(response.data.items));
    };
  });
