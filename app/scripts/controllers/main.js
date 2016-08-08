'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', ['$scope', '$http', '_','$timeout', function ($scope, $http, _,$timeout) {
    $http.get('/api/posts').then(function (resp) {
      $scope.posts = resp.data;
    });
    $http.get('/api/categories').then(function (resp) {
      $scope.categories = resp.data;
    });
    $scope.person = {fname: 'Clark', lname: 'Kent'};
    $scope.getItem = function (event, field) {
      var where = {};
      where[field] = event.target.innerText;
      $scope.posts = _.where($scope.posts, where);
    };
  }]);
