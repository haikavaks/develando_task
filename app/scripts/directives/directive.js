
angular.module('blogApp').directive( 'list', function( reactDirective ) {

  return reactDirective( List );
} );


angular.module('blogApp').directive( 'hello', function( reactDirective ) {

  return reactDirective( Hello );
} );

