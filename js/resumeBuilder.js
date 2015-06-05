var bio = {
		name : 'Sarah Maris',
		role : 'Web Developer',
		contacts :{
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
	workTitle : 'Web Developer',
	workEmployer : 'Sarah\'s Small Business Solutions',
	workYears : 5,
	workCity : 'Fair Haven, NJ'
}

var education = new Object();
education['name'] = 'Stanford University';
education['years'] = '1987-1989';
education['location'] = 'Stanford, CA';


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
