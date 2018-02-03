angular.module('video-player')

  .component('app', {
    controller: function($window) {
      this.videos = $window.exampleVideoData;
      this.currentVideo = this.videos[0];

      this.handleTitleClick = (video) => {
        this.currentVideo = video;
      };
    },
    templateUrl: 'src/templates/app.html'
  });