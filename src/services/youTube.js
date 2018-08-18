angular.module('video-player')
  .service('youTube', function($http){
    this.search = ({query, key = YOUTUBE_API_KEY, max = 5}, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: key,
          q: query,
          maxResult: max, 
          type: 'video',
          videoEmbeddable: 'true'
        }
      })
        .then(response => callback(response.data.items))
    }
  });
