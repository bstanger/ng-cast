angular.module('video-player')

  .component('search', {
    bindings: {
      searchResults: '<'
    },
    controller: function() {
      this.result = () => {
        console.log('yep');
      };
    },
    templateUrl: 'src/templates/search.html'
  });
