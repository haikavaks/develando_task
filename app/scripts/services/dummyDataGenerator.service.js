'use strict';
angular.module('blogApp').service('dummyDataGenerator', function () {
  var i, postsLength = 25, factory = {}, imageCount = 8;
  var posts = [];
  var authors = ['Bloger1', 'Bloger2', 'Bloger3', 'Bloger4'];
  var categories = ['Category1', 'Category2', 'Category3'];
  var authorsLength = authors.length;
  var categoriesLength = categories.length;
  for (i = 0; i < postsLength; i++) {
    posts.push({
      id: i,
      title: 'Dummy blog title ' + i,
      description: 'This is the' + i + ' blog description',
      author: authors[i % authorsLength],
      category: categories[i % categoriesLength],
      image: 'images/' + i % imageCount + '.png'
    });
  }
  factory.getPosts = function () {
    return posts;
  };
  factory.getPost = function (id) {
    return posts[id];
  };
  factory.getAuthors = function () {
    return authors;
  };
  factory.getCategories = function () {
    return categories;
  };
  //TODO Setters
  return factory;
});
