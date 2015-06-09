// Bio and contact information
var bio = {
		"name" : "Sarah Maris",
		"role": "Web Developer",
		"welcomeMsg" : "My focus is on helping small businesses and non-profit organizations make the most of the free or near-free marketing and promotional tools available on the web.  I also provide training to help new or infrequent computer users and technophobes get the most out of their devices.",
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
};

//Education
var education = {
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
work.display = function(jobType) {
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
work.display("jobs");
work.display("volunteerPositions");

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

//inName function (converts name to International FORMAT)
function inName(name) {
	var splitName = name.trim().split(" ");
	var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
	var lastName = splitName[1].toUpperCase();
	return (firstName + " " + lastName);	
}

// function to display bio information 
bio.display = function() {
	// Add name and role to header 
	HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(HTMLheaderRole);
	HTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
	$('#header').prepend(HTMLheaderName);
	
	//Add contact info to contacts section of header
	HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#topContacts').prepend(HTMLmobile);
	HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#topContacts').prepend(HTMLemail);
	HTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#topContacts').prepend(HTMLtwitter);
	HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#topContacts').prepend(HTMLgithub);
	HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').prepend(HTMLlocation);
	
	// Add picture and welcome message to header
	HTMLbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	$('#header').append(HTMLbioPic);
	HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
	$('#header').append(HTMLwelcomeMsg);

	//Add skills to header 
	if ( bio.skills.length > 0 ) {
		$('#header').append(HTMLskillsStart);
		var formattedSkill;
		for (var skill in bio.skills) {
			formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#skills').append(formattedSkill);
		}
	}
	
	//Add contact info to contacts section of footer
	HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	$('#footerContacts').prepend(HTMLmobile);
	HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
	$('#footerContacts').prepend(HTMLemail);
	HTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	$('#footerContacts').prepend(HTMLtwitter);
	HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
	$('#footerContacts').prepend(HTMLgithub);
	HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#footerContacts').prepend(HTMLlocation);
}

bio.display();

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

// function to display education
education.displaySchools = function(){
	for (var school in education.schools) {
		//Start school section
		$('#education').append(HTMLschoolStart);
		
		//Add name and degree
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedName + formattedDegree);

		//Add dates, location and major
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
		$('.education-entry:last').append(formattedMajor);	
	}	
}

// function to display online courses
education.displayOnline = function(){
	// Add section header 
	$('#education').append(HTMLonlineClasses);  
	
	for (var course in education.onlineCourses) {
		
		//Start online course section
		$('#education').append(HTMLschoolStart);
		
		//Add name and degree
		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		$('.education-entry:last').append(formattedTitle + formattedSchool);

		//Add dates, location and major
		var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		$('.education-entry:last').append(formattedDates);
		var formattedLocation = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(formattedLocation);
	}	
}


education.displaySchools();
education.displayOnline();


$('#mapDiv').append(googleMap);
