//HTML strings

var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span id="role">%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="connect-text">%contact%</span><span class="link-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="connect-text">mobile</span><a href="tel:1-%data1%" class="link-text">%data2%</span></li>'; // add click to call
var HTMLemail = '<li class="flex-item"><span class="connect-text">email</span><a href="mailto:%data1%?subject=online resume" class="link-text">%data2%</a></li>'; // add live link to email
var HTMLtwitter = '<li class="flex-item"><span class="connect-text">twitter</span><a href="https://twitter.com/%data1%" target="_blank" class="link-text">%data2%</a></li>';//add live link to twitter
var HTMLgithub = '<li class="flex-item"><span class="connect-text">github</span><a href="https://github.com/%data1%" target="_blank" class="link-text">%data2%</a></li>'; // add live link to github
var HTMLblog = '<li class="flex-item"><span class="connect-text">blog</span><span class="link-text">%data%</span></li>'; // ignore -- don't have blog
var HTMLlocation = '<li class="flex-item"><span class="connect-text">location</span><a href="#mapDiv" class="link-text">%data%</a></li>';//link to map below

var HTMLbioPic = '<picture><img src="%data%" class="biopic"></picture>';//add "picture" tag
var HTMLbioPicX = '<source media="(min-width: 750px)" srcset="%data2% 2x, %data1% 1x">'; //add HTML string for 1X and 2X pictures
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="link-text">%data%</span></li>';

var HTMLworkStart = '<article class="work-entry"></article>'; // change 'div' to 'article'
var HTMLworkEmployer = '<div class="title" href="#">%data%'; // change 'a' to 'div' since link doesn't go anywhere
var HTMLworkTitle = ' - %data%</div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<article class="project-entry"></article>';// change 'div' to 'article'
var HTMLprojectTitle = '<a class="title-link" href="#" target="_blank">%data%</a>'; // open link in new tab
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<a href="%data1%" data-lightbox="%data2%"><img class="project-image" src="%data3%"></a>'; // add lightbox to images

var HTMLschoolStart = '<article class="education-entry"></article>';// change 'div' to 'article'
var HTMLschoolName = '<a class="title-link" href="#" target="_blank">%data%'; // open link in new tab
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3 id="online-courses">Online Classes</h3>';
var HTMLonlineTitle = '<a class="title-link" href="#" target="_blank">%data%'; // open link in new tab
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a class="course-link" href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<article id="map"></article>';


// jQuery to call internationalize function
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(bio.name) || function(){};
    $('#name').html(iName);
  });
});

// Collect click locations
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});



// Google Map
var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true,

	// Show Terrain as default view and give options for Satellite and Hybrid maps
	mapTypeId: google.maps.MapTypeId.TERRAIN,
	mapTypeControl: true,
	mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DEFAULT,
      mapTypeIds: [
        google.maps.MapTypeId.HYBRID,
        google.maps.MapTypeId.SATELLITE,
		google.maps.MapTypeId.ROADMAP,
		google.maps.MapTypeId.TERRAIN
	] },
	// Add zoom control
	zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
	  position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  // locationFinder() returns an array of every location string from the JSONs written for bio, education, and work.
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }
	// iterates through volunteer position locations and appends each location
	for (var position in work.volunteerPositions) {
      locations.push(work.volunteerPositions[position].location);
    }
    return locations;
  }


  // create map pins by reading Google Places search results t
  function createMapMarker(placeData) {

    // save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude
    var lon = placeData.geometry.location.lng();  // longitude
    var name = placeData.formatted_address;   // name
    var bounds = window.mapBounds;            // current boundaries of the map window

    // Marker
	var star = 'images/map-icon/star.png';

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name,
	  icon: star
    });

	//Info window
	var contentString = '<div id="content">'+ name + '<p> Latitude: ' + lat + '<br>' + 'Longitude:  ' + lon + '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });

	//add info window
    google.maps.event.addListener(marker, 'click', function() {
	  infoWindow.open(map,marker);
    });

    // add pin to the map.
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  //create map marker
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  //create pins on the map
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // creates pins on the map for each location in the locations array
  pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});