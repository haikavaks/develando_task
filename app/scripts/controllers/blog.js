'use strict';
 
angular.module('blogApp')
  .controller('BlogCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    if ($routeParams.id) {
      $http.post('/api/post', {post: $routeParams.id}).then(function (resp) {
        $scope.post = resp.data;
      });
    }
  }]);
