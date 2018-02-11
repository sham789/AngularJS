'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('phoneList', function ($scope) {
  $scope.phones = [
      {name: 'Apple iPhone 8 64Gb Space Gray', snippet: 'Faster stronger'},
      {name: 'Apple iPhone 7 64Gb White', snippet: 'Faster stronger'},
      {name: 'Apple iPhone 6 64Gb Space Gray', snippet: 'Faster stronger'},
      {name: 'Apple iPhone 5S 64Gb White', snippet: 'Faster stronger'}
  ]
})