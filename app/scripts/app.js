'use strict';

/**
 * @ngdoc overview
 * @name blogApp
 * @description
 * # blogApp
 *
 * Main module of the application.
 */
angular
  .module('blogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E',
    'underscore',
    'react'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($httpBackend,dummyDataGenerator) {
    $httpBackend.whenGET(/views\//).passThrough();
    $httpBackend.whenGET('/api/posts').respond(function () {
      return [ 200, dummyDataGenerator.getPosts()];
    });
    $httpBackend.whenPOST('/api/post').respond(function (method, url, data) {
      var id = angular.fromJson(data).post;
      var post = dummyDataGenerator.getPost(id);
      if(post){
        return [ 200,post];
      }else{
        return [404];
      }
    });
    $httpBackend.whenGET('/api/categories').respond(function () {
      return [ 200, dummyDataGenerator.getCategories()];
    });
    $httpBackend.whenGET('/api/authors').respond(function () {
      return [ 200,  dummyDataGenerator.getAuthors()];
    });
  });

