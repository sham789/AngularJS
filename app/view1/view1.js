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

var phone = angular.module('phone', []);

phone.controller('phoneList', function ($scope) {
    $scope.title = 'Смартфоны';
    $scope.phones = [
        {'name': 'Apple iPhone 8 64Gb Space Gray',
            'snippet':'Faster stronger',
              'status': 'В наличии',
                'priority': '4'},
        {'name': 'Apple iPhone 7 64Gb White',
            'snippet': 'Faster stronger',
              'status': 'В наличии',
                'priority': '3'},
        {'name': 'Apple iPhone 6 64Gb Space Gray',
            'snippet': 'Faster stronger',
              'status': 'Нет на складе',
                'priority': '2'},
        {'name': 'Apple iPhone 5S 64Gb White',
            'snippet': 'Faster stronger',
              'status': 'В наличии',
                'priority': '1'}
    ];
    var date = new Date();
    $scope.today = date;

    $scope.doneFilter = function(phoneItem) {
      return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === 'В наличии';
    }

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function(sname) {
      if ($scope.sortField === sname) {
        $scope.reverse = !$scope.reverse;
      } else {
        $scope.sortField = sname;
        $scope.reverse = false;
      };
    };

    $scope.isSortUp = function(sname) {
      return $scope.sortField === sname && !$scope.reverse;
    }
    $scope.isSortDown = function(sname) {
      return $scope.sortField === sname && $scope.reverse;
    }

});
