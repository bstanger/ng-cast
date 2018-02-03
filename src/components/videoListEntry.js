angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      currentVideo: '<',
      onClick: '<'
    },
    // controller: function() {
    //   this.handleTitleClick = (video) => {
    //     console.log(video);
    //     this.currentVideo = video;
    //   };
    // },
    templateUrl: 'src/templates/videoListEntry.html'
  });
