 // JS Function for Google Maps API        
         
     function initMap() {}
            var options = {
              zoom:8,
              center: {lat:35.7796, lng:-78.6382}
            }

            // New map
              var map = new google.maps.Map(document.getElementById('map'), options);
            

            // Add marker
            var marker = new google.maps.Marker({position:{lat:35.7796, lng:-78.6382},
             map:map
        
            });
            }
            
          

        