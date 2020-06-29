'use strict';

const favClassesDataSet = {
  linkedIn: 'fa fa-linkedin',
  twitter: 'fa fa-twitter',
  github: 'fa fa-github',
  facebook: 'fa fa-facebook'
};

const mapProfileLinksToFavClasses = profileName => {
	return favClassesDataSet[profileName];
};

const teamDetails = [
	{
		name: 'Mohit sharma (Reginal Head)',
		position: 'The Board',
		image: 'mohit1.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Arslan Ahmed (Chapter Lead)',
		position: 'The Board',
		image: 'arsalan.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Shalley Pandita (Chapter Lead)',
		position: 'The Board',
		image: 'shalley.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!',
				twitter: '#!'
			}
		]
	},

	{
		name: 'Adil Ishaq (Reginal Operation Head)',
		position: 'The Board',
		image: 'adil.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Prabhav Dogra(Community Organiser)',
		position: 'The Board',
		image: 'prabhav.jpg',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Avinash Koshal (Reginal Technical Head)',
		position: 'Technical Team',
		image: 'avinash.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Ayush Paharia (Technical Head)',
		position: 'Technical Team',
		image: 'ayush.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},
	
	{
		name: 'Zahid Bhat (Graphics Team Head)',
		position: 'Creatives Team',
		image: 'zahid.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	
	{
		name: 'Avikanshit (Reginal Managment Head)',
		position: 'Management Team',
		image: 'avikanshit.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

	{
		name: 'Sonali KUmari (Community Manager)',
		position: 'Management Team',
		image: 'sonali.png',
		profiles: [
			{
				linkedIn: '#!',
				github: '#!'
			}
		]
	},

];

const generateProfileLinks = profileObject => {
	let result = [];
	for (let profile in profileObject) {
		const classtoAdd = mapProfileLinksToFavClasses(profile);
		const listItem = `
              <a href="${profileObject[profile]}" target="__blank">
                <i class="${classtoAdd}"></i>
              </a>`;
		result.push(listItem);
	}
	return result.join(' ');
};

const mapPositionToHtmlId = position => {
	const mappingSet = {
		The_Board: 'board',
		Technical_Team: 'technical',
		Creatives_Team: 'creatives',
		Management_Team: 'management'
	};

	return mappingSet[position];
};

// Generates HTML for each team members from array
const generateCards = cardDetail => {
	const { name, position, image, profiles } = cardDetail;

	const getProfilesLinksDynamic = generateProfileLinks(profiles[0]);

	const teamCard = `
  <card data-image="./assets/Images/team/${image}">
    <h1 slot="header">${name}</h1>
    <p slot="content">
        ${getProfilesLinksDynamic}
        <br><br>
        <span>${position}</span>
    </p>
  </card>`;

	const mappingID = position.replace(' ', '_');

	const injectingPoint = document.getElementById(mapPositionToHtmlId(mappingID));
	injectingPoint.innerHTML += teamCard;
};

const injectCardsToPage = () => {
	teamDetails.forEach(teamMember => {
		generateCards(teamMember);
	});
};

injectCardsToPage();
