angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html'
});

// var myMod = angular.module('myMod', ['ngRoute']);
// myMod.component('home', {
//   template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
//   controller: function() {
//     this.user = {name: 'world'};
//   }
// });
// myMod.config(function($routeProvider) {
//   $routeProvider.when('/', {
//     template: '<home></home>'
//   });
// });

// angular.module('heroApp').component('heroDetail', {
//   templateUrl: 'heroDetail.html',
//   bindings: {
//     hero: '='
//   }
// });