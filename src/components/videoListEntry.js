angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<'
    },
    controller: function() {
      this.handleTitleClick = () => {
        console.log('clicked!');
      };
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
