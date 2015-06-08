// Bio informations 
var bio = {
		"name" : "Sarah Maris",
		"role": "Web Developer",
		"welcomeMsg" : "I am a Web Developer focused on helping small businesses and non-profit organizations make the most of the free or near-free marketing and promotional tools available on the web.  I also provide training to help new or infrequent computer users and technophobes get the most out of their devices.",
		"contacts" : {
			"mobile" : "908-902-8430",
			"email" : "sarah@sarahmaris.com",
			"twitter" : "@sarah_l_maris",
			"github" : "sarah-maris",
			"location" : "Fair Haven, NJ"
		},
		"bioPic" : "images/sarah-maris-sq.jpg",
		"skills" : ["HTML/CSS", "WordPress", "Javascript", "MailChimp", "Facebook", "Twitter", "Small Business Marketing", "Non-profit communications", "Microsoft Office", "Google Apps for Education"]
    };

// Jobs and  volunteer work
var work = {
	// Add a job type to differentiate between paid and volunteer work
	"jobs" : [
		{
			"employer" : "Sarah's Small Business Solutions",
			"title" : "Web Developer/Small Business Consultant",
			"location" : "Fair Haven, NJ",
			"dates" : "2009 - present",
			"description" : "Assist small business owners and non-profit organizations with website development, online marketing and computer training"
		},
		{
			"employer" : "The Quaker Oats Company",
			"title" : "Assistant Brand Manager",
			"location" : "Chicago, IL",
			"dates" : "1989-1992",
			"description" : "Developed strategies to relaunch Cycle dog food and new child-focused oatmeal projects.  Planned and executed consumer and supply chain marketing efforts.  Collaborated  with a diverse team of internal and external partners, including manufacturing,   logistics, R&D, package design and advertising"
		},
		{
			"employer" : "Booz-Allen & Hamilton",
			"title" : "Research Associate",
			"location" : "Chicago, IL",
			"dates" : "1985-1987",
			"description" : "Worked with a team to advise organizations in the oilfield drilling equipment, professional beauty supply and banking industry on strategic issues including developing competitive advantage, improving efficiency and managing transitions."
		}
	],
	"volunteerPositions" : [
		{
			"employer" : "The Church of the Nativity",
			"title" : "Webmaster/Technical Support",
			"location": "Fair Haven, NJ",
			"dates" : "2009 - present",
			"description" : "Develop and maintain website using Google Sites. Provide training and technical support for office staff and Parish volunteers using Google Apps for Education, MailChimp, Microsoft Office, Ministry Scheduler Pro and other programs."
		},
		{
			"employer" : "Tower Hill Boy Scout Troop 67",
			"title" : "Webmaster",
			"location" : "Red Bank, NJ",
			"dates" : "2010 - 2014",
			"description" : "Developed website using Google Sites. Trained Scouts to update site and use Google Groups for email communication."
		}
	]
};

//Education
var education = {
	"schools" : [
		{
			"name" : "Stanford University",
			"location" : "Stanford, CA",
			"degree" : "MBA",
			"dates" : "1987-89",
			"url" : "http://www.gsb.stanford.edu/"
		},
		{
			"name" : "Carleton College",
			"location" : "Northfield, MN",
			"degree" : "BA",
			"majors" : ["Economics"],
			"dates" : "1981-85",
			"url" : "http://www.carleton.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front End Web Development Nanodegree",
			"school" : "Udacity",
			"dates" : "May 2015 - present",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

//Recent projects
var projects =  {
	"projects": [
		{
			"title" : "Cozmeena Enlightened Living",
			"dates" : "2013 - present",
			"description" : "Developed website and on-line store for the Cozmeena lifestyle brand using WordPress CMS. Project involved creating several custom post types, major re-tooling of the site theme and integration of Woocommerce",
			"images" : [ "images/cozmeena/cozmeena-screenshot.png", "images/cozmeena/cozmeena-hand.jpg", "images/cozmeena/cozmeena-group.jpg", "images/cozmeena/pocket-hearts.jpg" ]
		},
		{
			"title" : "Cups and Cakes Bakery",
			"dates" : "2014 - 2015",
			"description" : "Redesigned website using WordPress CMS.  Reformatted pages, added images, redesigned menu and added social media links",
			"images" : [ "images/cups/cups-screenshot.jpg", "images/cups/juices.jpg", "images/cups/fruit-tart.jpg", "images/cups/blueberry-scones.jpg", "images/cups/birthday.png",   "images/cups/sweet-potato-bread.jpg"]
		},
		{
			"title" : "HMF Express",
			"dates" : "2014 - present",
			"description" : "Designed new website using WordPres CMS to highlight product customization, product quality and shipping speed.  Incorporated company's quirky personality and commitment to customer service in design",
			"images" : [ "images/hmf/hmf-screenshot.png", "images/hmf/wood-dale.jpg", "images/hmf/welding-table.jpg", "images/hmf/people.jpg", "images/hmf/hinge-welder.jpg"]
		}
	]
};

// Display work function for different job types
function displayWork(jobType) {
	for (var job in work[jobType] ) { 
		// Change location of append for different job types
		if (jobType === "jobs") {
			var experienceSpot = '#workExperience';
		} else {
			var experienceSpot = '#volunteerExperience';			
		}
		// Start job listing
		$(experienceSpot).append(HTMLworkStart);
		
		//Employer and title
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work[jobType][job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work[jobType][job].title);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);
		
		// Dates
		var formattedDates = HTMLworkDates.replace('%data%', work[jobType][job].dates);
		$('.work-entry:last').append(formattedDates);

		// Location
		var formattedLocation = HTMLworkLocation.replace('%data%', work[jobType][job].location);
		$('.work-entry:last').append(formattedLocation);
		
		//Description
		var formattedDescription = HTMLworkDescription.replace('%data%', work[jobType][job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

// Display jobs and volunteer positions
displayWork('jobs');
displayWork('volunteerPositions');

// Create locationizer function
function locationizer(work_obj) {
	var locations = [];
	// Add loop for different job types
	for (var jobType in work_obj ) {
		for (var job in work_obj[jobType]) {
			locations.push(work_obj[jobType][job].location);		
		}
	}
	return locations;
}

// Add button to internationalize name
$('#main').append(internationalizeButton);

//inName function (coverts name to International FORMAT)
function inName(name) {
	var splitName = name.trim().split(" ");
	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	var lastName = splitName[1].toUpperCase();
	return (firstName + " " + lastName);	
}

// set up bio information 
HTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
HTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
HTMLbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);

// add bio information to the page
$('#header').prepend(HTMLheaderRole);
$('#header').prepend(HTMLheaderName);
$('#header').append(HTMLbioPic);
$('#header').append(HTMLwelcomeMsg);

$('#topContacts').prepend(HTMLmobile);
$('#topContacts').prepend(HTMLemail);
$('#topContacts').prepend(HTMLtwitter);
$('#topContacts').prepend(HTMLgithub);
$('#topContacts').prepend(HTMLlocation);




//Add skills to bio 
if ( bio.skills.length > 0 ) {
	$('#header').append(HTMLskillsStart);
	var formattedSkill;
	for (var skill in bio.skills) {
		formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill);
	}
}

// function to display projects
projects.display = function(){
	for (var project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		// Project title
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);
		
		// Project dates
		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		
		//Project Description
		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
		
		//Project images 
		if ( projects.projects[project].images.length > 0 ) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
		
}

projects.display();

$('#mapDiv').append(googleMap);

// Problem set #2

// Problem 1
function getRelationship(x,y) {
	var relationship;
	if ( isNaN(x)) {
		if (isNaN(y)) {
			relationship = "Can't compare relationships because " + x + " and " + y + " are not numbers.";			
		} else {
			relationship = "Can't compare relationships because " + x + " is not a number.";	
		}		
	} else if (isNaN(y)) {
			relationship = "Can't compare relationships because " + y + " is not a number.";
	} else if ( x === y) {
			relationship = "=";
	} else if ( x > y) {
			relationship = ">";
	} else if ( x < y) {
			relationship = "<";
	}		
	console.log ( "x = " + x );
	console.log ( "y = " + y );	
	return relationship;

}
/*
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));*/

// Problem 2

var names = ["Neil Armstrong", "Buzz Aldrin", "Pete Conrad", "Alan Bean", "Alan Shepard", "Edgar Mitchell", "David Scott", "James Irwin", "John W Young", "Charles Duke", "Eugene Cernan", "Harrison Schmitt"];

function alphabetizer(names) {
	var newNames = [];
	for ( var name in names) {
		names[name] = names[name].split(" ");
		if ( names[name].length === 3 ) {
			newName = names[name][2] + ", " + names[name][0] + " " + names[name][1];			
		} else {
			newName = names[name][1] + ", " + names[name][0];		
		}
		newNames.push( newName);
	}
	newNames.sort();
	return newNames;
}

console.log(alphabetizer(names) );

//Problem 3

var psiResults;

psiResults = {
	 "kind": "pagespeedonline#result",
	 "id": "/speed/pagespeed",
	 "responseCode": 200,
	 "title": "PageSpeed Home",
	 "score": 90,
	 "pageStats": {
		  "numberResources": 22,
		  "numberHosts": 7,
		  "totalRequestBytes": "2761",
		  "numberStaticResources": 16,
		  "htmlResponseBytes": "91981",
		  "cssResponseBytes": "37728",
		  "imageResponseBytes": "13909",
		  "javascriptResponseBytes": "247214",
		  "otherResponseBytes": "8804",
		  "numberJsResources": 6,
		  "numberCssResources": 2
	 },
	 "formattedResults": {
		"locale": "en_US",
		"ruleResults": {
			"AvoidBadRequests": {
				"localizedRuleName": "Avoid bad requests",
				"ruleImpact": 0.0
			},

			"MinifyJavaScript": {
				"localizedRuleName": "Minify JavaScript",
				"ruleImpact": 0.1417,
				"urlBlocks": [
				 {
				  "header": {
					   "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
					   "args": [
								{
								 "type": "BYTES",
								 "value": "1.3KiB"
								},
								{
								 "type": "INT_LITERAL",
								 "value": "0"
								}
					   ]
					},
					"urls": [
					   {
						"result": {
						 "format": "Minifying $1 could save $2 ($3% reduction).",
							 "args": [
								  {
								   "type": "URL",
								   "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
								  },
								  {
								   "type": "BYTES",
								   "value": "717B"
								  },
								  {
								   "type": "INT_LITERAL",
								   "value": "1"
								  }
							 ]
						}
					   },

						{
						"result": {
							 "format": "Minifying $1 could save $2 ($3% reduction).",
							 "args": [
								  {
								   "type": "URL",
								   "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
								  },
								  {
								   "type": "BYTES",
								   "value": "258B"
								  },
								  {
								   "type": "INT_LITERAL",
								   "value": "0"
								  }
							 ]
						}
					}
				]	
				}
			]
		},

		"SpriteImages": {
			"localizedRuleName": "Combine images into CSS sprites",
			"ruleImpact": 0.0
		}
		}
	},
 "version": {
  "major": 1,
  "minor": 11
 }
}

function totalBytes(results) {
	var bytes = 0;
	for ( var item in results.pageStats) {
		itemData = results.pageStats[item];
		if ( typeof itemData === "string") {
			bytes += Number(itemData);
		}
	}
	return bytes;
}

console.log(totalBytes(psiResults));

function ruleList(results) {
	var rules = [];
	for ( var ruleType in results.formattedResults.ruleResults ) {
		var newRule = results.formattedResults.ruleResults[ruleType].localizedRuleName;
		rules.push(newRule);
	}
	return rules;
}

console.log(ruleList(psiResults));