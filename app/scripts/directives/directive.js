'use strict';
var List  = List || [];
var Filter  = Filter || [];
var Item  = Item || [];
angular.module('blogApp').directive('list', function( reactDirective ) {
  return reactDirective( List );
});
angular.module('blogApp').directive('filter', function( reactDirective ) {
  return reactDirective( Filter );
});

angular.module('blogApp').directive('item', function( reactDirective ) {
  return reactDirective( Item );
});
