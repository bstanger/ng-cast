angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (params, callback) => {
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: params
      }).then((response) => {
        callback(response.data.items);
      });
    };
  });
