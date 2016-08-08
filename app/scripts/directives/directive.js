"use strict";
angular.module('blogApp').directive('list', function( reactDirective ) {
  return reactDirective( List );
});
angular.module('blogApp').directive('filter', function( reactDirective ) {
  return reactDirective( Filter );
});
