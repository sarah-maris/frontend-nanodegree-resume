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
	projects: [

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

	],

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
				"schoolUrl" : "http://www.udacity.com"
			}
		]
	}
};

/*===== Operations =====*/

var operations = {

	init: function() {
		view.bio();
		for ( var jobType in model.work ) {
			view.work( jobType );
		}
		view.projects();
		view.education();
		view.internationalize();
		view.addMap();

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

	getJobs: function( jobType ) {
		return model.work[ jobType ];
	},

	getJob: function( jobType, job ) {
		return model.work[ jobType ][ job ];
	},

	getProjects: model.projects,

	getSchools: model.education,

	getSchoolTypes: function( schoolType ) {
		return model.education[ schoolType ];
	},

	getSchool: function( schoolType, school) {
		return model.education[ schoolType ][ school ];
	},

	// Function to convert name to International FORMAT)
	inName: function (name) {
		var splitName = name.trim().split(" ");
		var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
		var lastName = splitName[1].toUpperCase();
		return (firstName + " " + lastName);
	}
};

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
				$('#skills').append( formattedHTMLskill );
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
	work: function( jobType ) {
		var jobs = operations.getJobs( jobType );
		for (var job in jobs ) {

			//Get data from operations
			var formattedEmployer = HTMLworkEmployer.replace('%data%', operations.getJob( jobType, job ).employer);
			var formattedTitle = HTMLworkTitle.replace('%data%', operations.getJob( jobType, job ).title);
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
	},

	// Function to display projects
	projects: function(){
		for (var project in operations.getProjects ) {
			var listProject = operations.getProjects[project];

			//Get data from operations
			var formattedTitle = HTMLprojectTitle.replace('%data%', listProject.title);
			var formattedDates = HTMLprojectDates.replace('%data%', listProject.dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', listProject.description);
			var projectImages = listProject.images;
			var projectURL = listProject.url;
			var projectTitle = listProject.title;

			// Display project
			$('#projects').append(HTMLprojectStart);

			// Add title
			$('.project-entry:last').append(formattedTitle);

			// Add project dates
			$('.project-entry:last').append(formattedDates);

			//Add project Description
			$('.project-entry:last').append(formattedDescription);

			//Add project images
			if ( projectImages.length > 0 ) {
				for (var image in projectImages ) {
					var formattedImage = HTMLprojectImage.replace('%data1%', projectImages[image]).replace('%data2%', projectTitle).replace('%data3%', projectImages[image]);
					$('.project-entry:last').append(formattedImage);
				}
			}

			//Add project URL
			$( '.title-link:last' ).attr( 'href', projectURL );
		}
	},

	// Function to display online courses and other schools
	education: function(){

		//Get data from operations
		for ( var schoolType in operations.getSchools ) {

			// Add section header for online Courses
			if ( schoolType === "onlineCourses" ) {
				$( '#education' ).append( HTMLonlineClasses );
			}

			//Get data for each school
			for ( var sch in operations.getSchoolTypes( schoolType ) ) {
				var school = operations.getSchool( schoolType, sch );
				var formattedName = HTMLschoolName.replace( '%data%', school.name );
				var formattedDegree = HTMLschoolDegree.replace( '%data%', school.degree );
				var formattedTitle = HTMLonlineTitle.replace( '%data%', school.title );
				var formattedSchool = HTMLonlineSchool.replace( '%data%', school.school );
				var formattedDates = HTMLschoolDates.replace( '%data%', school.dates );
				var formattedLocation = HTMLschoolLocation.replace( '%data%', school.location );
				var formattedMajor = HTMLschoolMajor.replace( '%data%', school.majors );
				var formattedSchoolUrl = HTMLonlineURL.replace('%data%', school.schoolUrl);
				var url = school.url;
				var schoolUrl = school.schoolUrl;

				//Start school section
				$( '#education' ).append( HTMLschoolStart );

				//Name and degree
				if ( schoolType === "schools" ) {
					$( '.education-entry:last' ).append( formattedName + formattedDegree );
				}

				//Online course title and school
				if ( schoolType === "onlineCourses" ) {
					$( '.education-entry:last' ).append( formattedTitle + formattedSchool );
				}

				//Dates attended
				$( '.education-entry:last' ).append( formattedDates );

				//Location and major
				if ( schoolType === "schools" ) {
					$( '.education-entry:last' ).append( formattedLocation );
					$( '.education-entry:last' ).append( formattedMajor );
				}

				//Course and url
				if ( schoolType === "onlineCourses" ) {
					$('.education-entry:last').append(formattedSchoolUrl);
					$('a:last').attr( 'href', schoolUrl );
				}

				//Add link to school name
				$('.title-link:last').attr('href', url);
			}
		}
	},

	internationalize: function() {
		// Add button to internationalize name
		$('#main').append(internationalizeButton);
	},

	addMap: function() {
		// Display Google Map
		$('#mapDiv').append(googleMap);
	}

};

operations.init();