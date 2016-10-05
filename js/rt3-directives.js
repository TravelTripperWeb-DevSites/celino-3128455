angular.module('rezTrip')
  .directive('rt3HotelInfo', ['rt3HotelInfo', function(rt3HotelInfo) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3HotelInfo']] = rt3HotelInfo;
      }
    };
  }])
  .directive('rt3SearchForm', ['rt3Search', function(rt3Search) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3SearchForm']] = rt3Search;
      }
    };
  }])
  .directive('rt3RoomsBrowser', ['rt3Browser', '$rootScope', function(rt3Browser, $rootScope) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3RoomsBrowser']] = rt3Browser;
      }
    };
  }])
  .directive('rt3SpecialRates', ['rt3SpecialRates', function(rt3SpecialRates) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3SpecialRates']] = rt3SpecialRates;
      }
    };
  }])
  .directive('rt3RoomDetails', ['rt3RoomDetails', function(rt3RoomDetails) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3RoomDetails']] = rt3RoomDetails;
      }
    };
  }])
  .directive('rt3Code', ['rt3RoomCode', '$rootScope', 'rt3api', function(rt3RoomCode, $rootScope, rt3api) {
    return {
      restrict: 'A',
      scope: true, 
      link: function(scope, element, attrs) { 
        //scope[attrs['rt3Code']] = rt3RoomCode; 
        rt3api.availableRoomsTonight().then(function(response) {
            $rootScope.$apply(function() {  
                scope.roomsTonight = response.room_details_list;
                  var roomRates =   scope.roomsTonight.filter(function(item){ 
                   return item.code == attrs.rt3Code; 
                  });
                  if(roomRates.length || roomRates.length > 0){
                    scope.roomRate = '<span class="price">$ '+ Math.round(roomRates[0].min_average_price) +'</span> / night'; 
                  }else{
                      scope.roomRate ="Check Availability";
                  }
                  
                 element.html(scope.roomRate); 
             });
        });
      }
    };
  }])
  .directive('rt3RecentBookings', ['rt3RecentBookings', function(rt3RecentBookings) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3RecentBookings']] = rt3RecentBookings; 
      }
    };
  }])
  .directive('rt3RateShopping', ['rt3RateShopping', function(rt3RateShopping) {
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        scope[attrs['rt3RateShopping']] = rt3RateShopping;
      }
    }
  }]);
 