var app = angular.module('app',["ngRoute"])

app.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
        templateUrl : 'partials/home.html'
    })

    // route for the about page
    .when('/knowledge', {
        templateUrl : 'partials/knowledge.html'
    })

    // route for the contact page
    .when('/explore', {
        templateUrl : 'partials/explore.html'
    })
    .when('/guides', {
        templateUrl : 'partials/guides.html'
    });
})

app.controller('MainController', ['$scope', function ($scope) {

  $scope.state = {
  }

  $scope.state = {
    navExpanded: false,
    dropdownIcon: 'expand_more'
  }

  $scope.navDropdown = function() {
    if($scope.state.navExpanded){
      $scope.state.dropdownIcon = 'expand_more';
    }else{
      $scope.state.dropdownIcon = 'expand_less';
    }
    $scope.state.navExpanded = !$scope.state.navExpanded;
  }

}])

app.directive("subnav", () => ({
  templateUrl: "partials/subnav.html"
}));
