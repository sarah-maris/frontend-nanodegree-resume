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
var projects = {
	"projects" : [
		{
			"title" : "Cozmeena Enlightened Living",
			"dates" : "2013 - present",
			"description" : "Developed website and on-line store for the Cozmeena lifestyle brand using WordPress CMS. Project involved creating several custom post types, major re-tooling of the site theme and integration of Woocommerce",
			"images" : [ "/images/cozmeena/cozmeena-screenshot.png", "/images/cozmeena/cozmeena-hand.jpg", "/images/cozmeena/cozmeena-group.jpg", "/images/cozmeena/pocket-hearts.jpg" ]
		},
		{
			"title" : "Cups and Cakes Bakery",
			"dates" : "2014 - 2015",
			"description" : "Redesigned website using WordPress CMS.  Reformatted pages, added images, redesigned menu and added social media links",
			"images" : [ "/images/cups/cups-screenshot.png", "/images/cups/juices.jpg", "/images/cups/fruit-tart.jpg", "/images/cozmeena/blueberry-scones.jpg", "/images/cups/birthday.png",   "/images/cups/sweet-potato-bread.jpg"]
		},
		{
			"title" : "HMF Express",
			"dates" : "2014 - present",
			"description" : "Designed new website using WordPres CMS to highlight product customization, product quality and shipping speed.  Incorporated company's quirky personality and commitment to customer service in design",
			"images" : [ "/images/hmf/hmf-screenshot.png", "/images/hmf/wood-dale.jpg", "/images/cups/welding-table.jpg", "/images/cozmeena/people.jpg", "/images/cups/hinge-welder.jpg"]
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
		$(experienceSpot).append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work[jobType][job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work[jobType][job].title);
		$('.work-entry:last').append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work[jobType][job].dates);
		var formattedLocation = HTMLworkLocation.replace('%data%', work[jobType][job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work[jobType][job].description);
		$('.work-entry:last').append(formattedDates);
		$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
	}
}

displayWork('jobs');
displayWork('volunteerPositions');

// locationizer function
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
$('#topContacts').prepend(HTMLmobile);
$('#topContacts').prepend(HTMLemail);
$('#topContacts').prepend(HTMLtwitter);
$('#topContacts').prepend(HTMLgithub);
$('#topContacts').prepend(HTMLlocation);
$('#topContacts').prepend(HTMLwelcomeMsg);
$('hr').append(HTMLbioPic);


//Add skills to bio 
if ( bio.skills.length > 0 ) {
	$('#header').append(HTMLskillsStart);
	var formattedSkill;
	for (var skill in bio.skills) {
		formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
		$('#skills').append(formattedSkill);
	}
}
