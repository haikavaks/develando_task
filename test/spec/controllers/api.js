'use strict';

describe('Rest Api ', function () {

  // load the controller's module
  beforeEach(module('blogApp'));

  var http,
   _dummyDataGenerator;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ( dummyDataGenerator ,$http) {
    _dummyDataGenerator = dummyDataGenerator;
    http = $http;
  }));

  it('should response api ', function () {
    http.get('/api/posts').then(function (resp) {
      var posts =   resp.data;
      expect(posts).toBe(_dummyDataGenerator.getPosts());
      expect(posts.length).toBe(25);
    });

  });
  it('should give 1 post ', function () {
    var id = 1;
    http.post('/api/posts/',{post:id}).then(function (resp) {
      var post =   resp.data;
      expect(post).toBe(_dummyDataGenerator.getPost(id));
    });
  });

});
