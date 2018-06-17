
var geocoder;
var map;
var address = "Rescue Hall Mpu Purwa, Jl. Soekarno Hatta Perumahan Griya Samta Blk. B No.210, Mojolangu, Lowokwaru, Malang City, East Java 65141, Indonesia";

function initMap(){
    
    // set map
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: {lat: -34.397, lng: 150.644}
    });

    // set geocoder and call function codeAddress
    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);
}

function codeAddress(geocoder, map){

    // set geocoder from address
    geocoder.geocode({address: address}, function(results, status){
        
        // statement if ok
        if(status === 'OK'){
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map:map,
                position: results[0].geometry.location
            });
        }
        // if false or error
        else{
            alert("Tidak dapat Mengambil data peta, karena: "+status);
        }
    });
}