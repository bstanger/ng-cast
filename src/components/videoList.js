angular.module('video-player')
  .component('videoList', {
    bindings: {
      currentVideo: '<',
      videos: '<',
      titleClick: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
