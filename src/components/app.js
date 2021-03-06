angular.module('video-player')

  .component('app', {
    controller: function($window, youTube) {
      this.videos = [];
      this.currentVideo = null;

      this.onClick = (video) => {
        this.currentVideo = video;
      };

      this.searchResults = (query) => {
        console.log(query);
        
        var params = {};
        params.q = query || 'corgis';
        params.maxResults = 5;
        params.key = $window.YOUTUBE_API_KEY;
        params.part = 'snippet';
        params.type = 'video';
        params.videoEmbeddable = true;
        
        youTube.search(params, this.selectVideo);
      };

      this.selectVideo = (videos) => {
        this.videos = videos;
        this.currentVideo = videos[0];
      };

      this.searchResults();
    
    },
    templateUrl: 'src/templates/app.html'
  });