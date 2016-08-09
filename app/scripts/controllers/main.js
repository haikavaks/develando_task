'use strict';

/**
 * @ngdoc function
 * @name blogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogApp
 */
angular.module('blogApp')
  .controller('MainCtrl', ['$scope', '$http', '_', '$location', function ($scope, $http, _, $location) {
    var allPosts = [];
    $http.get('/api/posts').then(function (resp) {
      allPosts = resp.data;
      $scope.posts = resp.data;
    });
    $http.get('/api/categories').then(function (resp) {
      $scope.categories = resp.data;
    });
    $http.get('/api/authors').then(function (resp) {
      $scope.authors = resp.data;
    });
    $scope.redirect = function (id) {
      $location.url('/blog/' + id);
    };
    $scope.filter = function (value, field) {
      var where = {};
      where[field] = value;
      $scope.criteria = value
      $scope.posts = _.where(allPosts, where);
    };
  }]);
