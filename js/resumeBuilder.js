var bio = {
		name : 'Sarah Maris',
		role : 'Web Developer',
		contacts : {
			mobile : '908-902-8430',
			email : 'sarah@sarahmaris.com',
			twitter : '@sarah_l_maris',
			github : 'sarah-maris',
			location : 'Fair Haven, NJ'
		},
		bioPic : 'images/sarah-maris-sq.jpg',
		welcomeMsg : 'I am a Web Developer focused on helping small businesses and non-profit organizations make the most of the free or near-free marketing and promotional tools available on the web.  I also provide training to help new or infrequent computer users and technophobes get the most out of their devices.',
		skills : ['HTML/CSS', 'WordPress', 'Javascript', 'MailChimp', 'Facebook', 'Twitter', 'Small Business Marketing', 'Non-profit communications']
    };

var work = {
	"jobs" : [
		{
			title : 'Web Developer/Small Business Consultant',
			employer : 'Sarah\'s Small Business Solutions',
			dates : "2009 - present",
			location : 'Fair Haven, NJ',
			description : 'Assist small business owners and non-profit organizations with website development, online marketing and computer training'
		},
		{
			title : 'Assistant Brand Manager',
			employer : 'The Quaker Oats Company',
			dates : "1989-1992",
			location : 'Chicago, IL',
			description : 'Developed strategies to relaunch Cycle dog food and new child-focused oatmeal projects.  Planned and executed consumer and supply chain marketing efforts.  Collaborated  with a diverse team of internal and external partners, including manufacturing,   logistics, R&D, package design and advertising'
		 }, 
		 {
			workTitle : 'Research Associate',
			workEmployer : 'Booz-Allen & Hamilton',
			workYears : "1985-1987",
			workCity : 'Chicago, IL',
			description : 'Worked with a team to advise organizations in the oilfield drilling equipment, professional beauty supply and banking industry on strategic issues including developing competitive advantage, improving efficiency and managing transitions.'
		 }
	],
	"volunteerPositions" : [
	
	
	
	
	
	]
};

var education = {
	"schools" : [
	{
		"name" : "Stanford University",
		"city" : "Stanford, CA",
		"degree" : "MBA",
		"gradYear" : "1989"		
	},
	{
		"name" : "Carleton College",
		"city" : "Northfield, MN",
		"degree" : "BA", 
		"majors" : ["Economics"],
		"gradYear" : "1985"	
	}
	],
	"onlineCourses" : [
	{
		"name" : "Udacity",
		"title" : "Front End Web Development Nanodegree",
		"gradYear" : "2015"	
	}
	]
}

/*
HTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
HTMLmobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
HTMLemail = HTMLemail.replace('%data%', bio.contacts.email);
HTMLtwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
HTMLgithub = HTMLgithub.replace('%data%', bio.contacts.github);
HTMLlocation = HTMLlocation.replace('%data%', bio.contacts.location);
HTMLbioPic = HTMLbioPic.replace('%data%', bio.bioPic);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
HTMLskills = HTMLskills.replace('%data%', bio.skills);

$('#header').prepend(HTMLheaderRole);
$('#header').prepend(HTMLheaderName);
$('#topContacts').prepend(HTMLskills);
$('#topContacts').append(HTMLbioPic);
$('#topContacts').prepend(HTMLwelcomeMsg);
$('#topContacts').prepend(HTMLmobile);
$('#topContacts').prepend(HTMLemail);
$('#topContacts').prepend(HTMLtwitter);
$('#topContacts').prepend(HTMLgithub);
$('#topContacts').prepend(HTMLlocation);
$('#workExperience').append(work.workTitle);
$('#education').append(education['name']);
*/