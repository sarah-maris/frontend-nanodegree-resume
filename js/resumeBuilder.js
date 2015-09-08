/*===== MODEL =====*/

var model = {
	// Bio and contact information
	bio: {
		"name" : "Sarah Maris",
		"role": "Web Developer",
		"welcomeMsg" : "I help small businesses and non-profit organizations make intelligent use of technology and access the free and inexpensive and promotional tools available on the web.  I also provide training to help infrequent computer users and technophobes.",
		"contacts" : {
			"mobile" : "908-902-8430",
			"email" : "sarah@sarahmaris.com",
			"twitter" : "@sarah_l_maris",
			"github" : "sarah-maris",
			"location" : "Fair Haven, NJ"
		},
		"bioPic" : "images/sarah-maris-200_1x.jpg",
		"bioPic2X": "images/sarah-maris-400_2x.jpg",
		"skills" : ["HTML/CSS", "WordPress", "Javascript", "MailChimp", "Facebook", "Twitter", "Small Business Marketing", "Non-profit Communications", "Microsoft Office", "Google Apps for Education"]
    },

	// Jobs and  volunteer work
	work: {
	// Add  job type to differentiate between paid and volunteer work
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
	},

	//Recent projects
	projects: {
		"projects": [
			{
				"title" : "Cozmeena Enlightened Living",
				"dates" : "2013 - present",
				"description" : "Developed website and on-line store for the Cozmeena lifestyle brand using WordPress CMS. Project involved creating several custom post types, major re-tooling of the site theme and integration of Woocommerce",
				"images" : [ "images/cozmeena-screen-shot-600.jpg", "images/cozmeena-hand-600.jpg", "images/cozmeena-group-600.jpg", "images/pocket-hearts-600.jpg" ],
				"url" : "http://cozmeena.com/"
			},
			{
				"title" : "Cups and Cakes Bakery",
				"dates" : "2014 - 2015",
				"description" : "Redesigned website using WordPress CMS.  Reformatted pages, added images, redesigned menu and added social media links",
				"images" : [ "images/cups-screenshot-600.jpg", "images/fruit-tart-600.jpg", "images/blueberry-scones-600.jpg", "images/birthday-600.jpg"],
				"url" : "http://cupsandcakesrumson.com/"
			},
			{
				"title" : "HMF Express",
				"dates" : "2014 - present",
				"description" : "Designed new website using WordPres CMS to highlight product customization, product quality and shipping speed.  Incorporated company's quirky personality and commitment to customer service in design",
				"images" : [ "images/hmf-screenshot-600.jpg", "images/wood-dale-600.jpg", "images/people-600.jpg", "images/hinge-welder-600.jpg"],
				"url" : "http://wp.hmfexpress.s463.sureserver.com/"
			}
		]
	},

	//Education
	education: {
		"schools" : [
			{
				"name" : "Stanford University",
				"location" : "Stanford, CA",
				"degree" : "MBA",
				"majors" : ["Marketing, Finance"],
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
				"url" : "http://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
				"schoolurl" : "http://www.udacity.com"
			}
		]
	}
}

/*===== Operations =====*/

var operations = {

	init: function() {
		view.bio();
		for ( jobType in model.work ) {
			view.work( jobType );
		}


	},

	getBioData: {
		role: model.bio.role,
		name: model.bio.name,
		mobile: model.bio.contacts.mobile,
		email: model.bio.contacts.email,
		twitter: model.bio.contacts.twitter,
		github: model.bio.contacts.github,
		location: model.bio.contacts.location,
		bioPic: model.bio.bioPic,
		bioPicX: model.bio.bioPic2X, //2x Picture
		welcomeMsg: model.bio.welcomeMsg
	},

	getSkills: model.bio.skills,

	getExperienceType: function( jobType ) {
		if (jobType === "jobs") { return '#workExperience'; }
		else { return '#volunteerExperience'; }
	},

	getJob: function( jobType, job ) {
		return model.work[ jobType ][ job ];
	}
}





// Function to display projects
projectsdisplay = function(){
	for (var project in model.projects.projects) {
		$('#projects').append(HTMLprojectStart);

		// Project title
		var formattedTitle = HTMLprojectTitle.replace('%data%', model.projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		// Project dates
		var formattedDates = HTMLprojectDates.replace('%data%', model.projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		//Project Description
		var formattedDescription = HTMLprojectDescription.replace('%data%', model.projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		//Project images
		if ( model.projects.projects[project].images.length > 0 ) {
			for (var image in model.projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data1%', model.projects.projects[project].images[image]).replace('%data2%', model.projects.projects[project].title).replace('%data3%', model.projects.projects[project].images[image]);
				$('.project-entry:last').append(formattedImage);
			}
		}

		//Project URL
		$('.title-link:last').attr('href', model.projects.projects[project].url);
	}
};

// Function to display formal education
educationdisplaySchools = function(){
	for (var school in model.education.schools) {
		//Start school section
		$('#education').append(HTMLschoolStart);

		//Name and degree
		var formattedName = HTMLschoolName.replace('%data%', model.education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', model.education.schools[school].degree);
		$('.education-entry:last').append(formattedName + formattedDegree);

		//Dates, location and major
		var formattedDates = HTMLschoolDates.replace('%data%', model.education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', model.education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace('%data%', model.education.schools[school].majors);
		$('.education-entry:last').append(formattedMajor);

		//School URL
		$('.title-link:last').attr('href',model.education.schools[school].url);
	}
};

// Function to display online coursework
educationdisplayOnline = function(){
	// Add section header
	$('#education').append(HTMLonlineClasses);

	for (var course in model.education.onlineCourses) {

		//Start online course section
		$('#education').append(HTMLschoolStart);

		//Name and degree
		var formattedTitle = HTMLonlineTitle.replace('%data%', model.education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', model.education.onlineCourses[course].school);
		$('.education-entry:last').append(formattedTitle + formattedSchool);

		//Dates and URL
		var formattedDates = HTMLonlineDates.replace('%data%', model.education.onlineCourses[course].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLonlineURL.replace('%data%', model.education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedLocation);
		$('a:last').attr('href',model.education.onlineCourses[course].url);

		//School URL
		$('.title-link:last').attr('href',model.education.onlineCourses[course].schoolurl);
	}
};

// Function to pull locations from work and education data
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

// Function to convert name to International FORMAT)
function inName(name) {
	var splitName = name.trim().split(" ");
	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	var lastName = splitName[1].toUpperCase();
	return (firstName + " " + lastName);
}

/* DISPLAY INFO ON PAGE */

// Display projects
projectsdisplay();

// Display formal education and online coursework
educationdisplaySchools();
educationdisplayOnline();

/*===== View =====*/

var view = {

	// Function to display bio information in header and footer
	bio: function(){

		//Get data from operations
		formattedRole =  HTMLheaderRole.replace( '%data%', operations.getBioData.role );
		formattedName =  HTMLheaderName.replace( '%data%', operations.getBioData.name );
		formattedMobile =  HTMLmobile.replace( '%data1%', operations.getBioData.mobile ).replace( '%data2%', operations.getBioData.mobile );
		formattedEmail =  HTMLemail.replace( '%data1%', operations.getBioData.email ).replace( '%data2%', operations.getBioData.email );
		formattedTwitter =  HTMLtwitter.replace( '%data1%', operations.getBioData.twitter).replace('%data2%', operations.getBioData.twitter);
		formattedGithub =  HTMLgithub.replace( '%data1%', operations.getBioData.github).replace('%data2%', operations.getBioData.github);
		formattedLocation =  HTMLlocation.replace( '%data%', operations.getBioData.location );
		formattedBioPic =  HTMLbioPic.replace( '%data%', operations.getBioData.bioPic );
		formattedBioPicX =  HTMLbioPicX.replace( '%data1%', operations.getBioData.bioPic ).replace( '%data2%', operations.getBioData.bioPic2X ); // add  2x Picture
		formattedWelcomeMsg =  HTMLwelcomeMsg.replace( '%data%', operations.getBioData.welcomeMsg );
		skills = operations.getSkills;

		// Add name and role to header
		$('header').prepend( formattedRole );
		$('header').prepend( formattedName);

		//Add contact info for header
		$('#topContacts').prepend( formattedMobile);
		$('#topContacts').prepend( formattedEmail);
		$('#topContacts').prepend( formattedTwitter);
		$('#topContacts').prepend( formattedGithub);
		$('#topContacts').prepend( formattedLocation);

		//Add bio picture
		$('header').append( formattedBioPic);
		$( formattedBioPicX).insertBefore('.biopic');

		//Add welcome message
		$('header').append( formattedWelcomeMsg);

		//Add skills
		if ( skills.length > 0 ) {
			$('header').append(HTMLskillsStart);
			for ( var i = 0; i < skills.length; i++ ) {
				formattedHTMLskill = HTMLskills.replace( '%data%', skills[ i ] );
				$('#skills').append( fromattedHTMLskill );
			}
		}

		//Add contact info for footer
		$('#footerContacts').prepend( formattedMobile);
		$('#footerContacts').prepend( formattedEmail);
		$('#footerContacts').prepend( formattedTwitter);
		$('#footerContacts').prepend( formattedGithub);
		$('#footerContacts').prepend( formattedLocation);
	},

	// Function to display work experience (adapted to show both paid and volunteer jobs)
	work: function(jobType) {
		for (var job in model.work[jobType] ) {

			//Get data from operations
			var formattedEmployer = HTMLworkEmployer.replace('%data%', operations.getJob( jobType, job ).employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', operations.getJob( jobType, job ).title);
			var formattedDates = HTMLworkDates.replace('%data%', operations.getJob( jobType, job ).dates);
			var formattedDates = HTMLworkDates.replace('%data%', operations.getJob( jobType, job ).dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', operations.getJob( jobType, job ).location);
			var formattedDescription = HTMLworkDescription.replace('%data%', operations.getJob( jobType, job ).description);

			// Start job listing
			$( operations.getExperienceType( jobType ) ).append( HTMLworkStart );

			//Add employer and title
			$('.work-entry:last').append(formattedEmployer + formattedTitle);

			//Add work dates
			$('.work-entry:last').append(formattedDates);

			//Add work location
			$('.work-entry:last').append(formattedLocation);

			//Add job description
			$('.work-entry:last').append(formattedDescription);
		}
	}

}

operations.init();

// Display Google Map
$('#mapDiv').append(googleMap);

// Add button to internationalize name
$('#main').append(internationalizeButton);