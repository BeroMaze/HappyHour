      var map;
      var latitude; // = 47.6097;
      var longitude;// = -122.3331;


      var getLocation= function() {
        console.log('hello');
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);

          }
          else{
            latitude = 47.6097;
            longitude = -122.3331;
          }
        }

      var showPosition=function (position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          console.log(latitude + "init");
          console.log (longitude + "init");
          testx();
          }
      getLocation();
      // showPosition();

        // console.log(latitude);
        // console.log(longitude);

      function initMap(){
       var findMap = function(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: latitude,
            lng: longitude
          },
          zoom: 16

        });
        console.log(latitude)
        console.log(longitude)
      }
      return findMap;
    }
    testx = initMap();
    initMap()

