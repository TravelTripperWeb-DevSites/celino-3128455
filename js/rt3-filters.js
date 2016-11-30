angular.module('rezTrip')
  .filter('isArray', [function() {
    return function(input) {
      return angular.isArray(input);
    };
  }])
.filter('formatpolicydescription', function() {
    return function(text) {
      return  text ? String(text).replace('["', '<p>').replace('"]', '</p>').replace(',',' ') : '';
    }
  }
).filter('spacetohyphen', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '-');
    };
}).filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
         
    };
});
