angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      currentVideo: '<',
      videos: '<'
    },
    controller: function() {
      this.getIframeSrc = (videoId) => {
        return 'https://www.youtube.com/embed/' + videoId;
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
