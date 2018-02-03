angular.module('video-player')
  .component('videoList', {
    bindings: {
      currentVideo: '<',
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
