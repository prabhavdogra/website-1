'use strict';

const basicCards = document.getElementById('basicCards');
const moreCards = document.getElementById('moreCards');

const projectDetails = [
	{
		coverImage: 'track.png',
		projectName: 'We Track-Keep your goals on Track',
		projectAuthor: '',
		projectDescription: `WeTrack - is a goal tracking application designed for people who want to keep their academic goals on track. With a primary feature of setting goals, and add ons such as motivational quote generation, a resource hub and tips and tricks. We plan to build this using HTML, CSS, Bootstrap and Vanilla Javascript, (maybe a bit of jQuery). We might also try and convert this into a PWA if time permits.`,
		githubLink: 'https://github.com/The-Uplift-Project/html-css-js/tree/Team---HTML01',
		alternateName: 'Goals Tracking Project'
	},
	{
		coverImage: 'career.jpg',
		projectName: 'Career Choices and Education',
		projectAuthor: '',
		projectDescription: `The primary purpose for our Project is to create a Website for Students to get the required Career Paths in various fields which they can follow to excel in their future. We will also have a section where they can view recent Internship Opportunities, Learning Courses that they can undertake and Blogs which allows them to better understand the need of the future and more.`,
		githubLink: 'https://github.com/The-Uplift-Project/html-css-js/tree/Team-HTML04',
		alternateName: 'Career path project'
	},
	{
		coverImage: 'face.jpeg',
		projectName: 'Face Detection',
		projectAuthor: '',
		projectDescription: `We are working towards utilizing deep learning concepts to develop a robust face recognition system that can work on images/videos. Once the network recognises face, we aim towards implementing facial expression recognition, mask detection (whether a person is wearing a mask or not) and hand gesture recognition systems.`,
		githubLink: '#',
		alternateName: 'Face detection Project'
	}
];

const addditionalProjects = [
	{
		coverImage: 'recycle.jpg',
		projectName: 'Classification of Trash for Recyclabilty Status',
		projectAuthor: '',
		projectDescription: `A computer vision approach to classifying garbage into recycling categories could be an efficient way to process waste. The objective of this project is to take images of a single piece of recycling or garbage and classify it into six classes consisting of glass, paper, metal, plastic, cardboard, and trash. We will create a dataset that contains around 400-500 images for each class. We plan to release this dataset for the public. Some of the models to be used are support vector machines (SVM) with scale-invariant feature transform (SIFT) features and a convolutional neural network (CNN).This model can be wrapped in an app for better utility.`,
		githubLink: '#',
		alternateName: 'Recyclability project'
	},
	{
		coverImage: 'doc2pen.jpg',
		projectName: 'Doc2Pen',
		projectAuthor: '',
		projectDescription: `A student's savior to submit those assignments by just typing them out and getting it hand written on the go!`,
		githubLink: 'https://github.com/smaranjitghose/doc2pen',
		alternateName: 'Doc2Pen'
	},
	{
		coverImage: 'sketch.jpg',
		projectName: 'Nostalgify',
		projectAuthor: '',
		projectDescription: `Human beings are social animals and there are points in life when we look back on our journey to reflect and connect with classmates. Many universities in the world have a listing of the classes of various years, like class of 20xx but not all institutions(tutors, dance classes, creative arts institutes, schools) have the technical knowledge to set this up and keep it up to date. Several institution websites lack utility features like graphing / profile updates etc which can help keep it better updated. This project would fix the above mentioned issues.`,
		githubLink: 'https://github.com/The-Uplift-Project/open-source-development/tree/Team-OS3',
		alternateName: 'Nostalgia giffy'
	},
	{
		coverImage: 'pymodoro.png',
		projectName: 'PyPomodoro',
		projectAuthor: '',
		projectDescription: `The ancient technique to boost your productivity just took a form in Python! The Pomodoro application that boosts you work by 10x guaranteed!`,
		githubLink: 'https://github.com/smaranjitghose/PyPomodoro',
		alternateName: 'PyPomodoro'
	},
	{
		coverImage: 'portfolio.jpg',
		projectName: 'Awesome Portfolio Websites',
		projectAuthor: '',
		projectDescription: `Showcase your skills with the rest of the world through our beautifully created portfolio websites.`,
		githubLink: 'https://github.com/smaranjitghose/PyPomodoro',
		alternateName: 'Awesome Portfolio Websites'
	}
];

const memberUpToCardsDetails = [
	{
		coverImage: './assets/Images/achievement/ach1.jpg',
		altName: 'forbes30_under_30',
		cardTitle: 'Forbes 30 under 30',
		description: `Congratulations to our founding director, Anubha Maneshwar for making it to
						Forbes under 30 list of class 2020. 300 Entrepreneurs made it to the list in 10
						categories.`,
		referencePage: 'https://www.forbes.com/profile/anubha-maneshwar/#125d5f1321a8'
	},
	{
		coverImage: './assets/Images/achievement/ach2.jpg',
		altName: 'education outreach',
		cardTitle: 'Education Outreach',
		description: `GirlScript Foundation are here with Education Outreach Scholarship under which
					first 1000 students will get Scholarship in 5 different courses.`,
		referencePage: 'https://www.girlscript.tech/events'
	},
	{
		coverImage: './assets/Images/achievement/ach3.jpg',
		altName: 'APAC 2020 Scholarship',
		cardTitle: 'APAC 2020 Scholarship',
		description: `Women Techmakers Scholars Program APAC 2020 Scholarship is an opportunity for
										all undergraduate women to get a great exposure in the field of Compsc. by
										encouraging women to excel.`,
		referencePage: 'https://www.womentechmakers.com/scholars'
	}
];

const countDownDetails = [
	{
		text: 'Lets Py',
		countFrom: 3000,
		iconClasses: 'afab fa fa-laptop fa-3x'
	},
	{
		text: 'GirlScript Summer of Code',
		countFrom: 3500,
		iconClasses: 'afab fa fa-trophy fa-3x'
	},
	{
		text: 'GirlScript India Summit',
		countFrom: 2500,
		iconClasses: 'afab fa fa-user fa-3x'
	}
];

const produceProjectCards = (cardDetails, mode = 'extra') => {
	const { coverImage, projectName, projectAuthor, projectDescription, githubLink, alternateName } = cardDetails;
	const projectCard = `<div class="project-card" onclick="displayCard(this)">
						<div class="project-image-holder">
							<img
								class="project-image"
								src="/assets/Images/projects/${coverImage}"
								alt=${alternateName}
								aria-label=${alternateName}
								height="225" width="300"
							/>
						</div>
						<div class="project-title">
							<a href="#" class="toggle-info">
								<i class="fa fa-chevron-down"></i>
							</a>
							<h2 class="card-title">
								${projectName}
								<small>- ${projectAuthor}</small>
							</h2>
						</div>
						<div class="card-flap flap1">
							<div class="card-description">
								${projectDescription}
							</div>
							<div class="card-flap flap2">
								<div class="card-actions">
									<a href=${githubLink} class="btn btn-github"
										>Link to GitHub Repository</a
									>
								</div>
							</div>
						</div>
					</div>`;
	if (mode === 'basic') {
		basicCards.innerHTML += projectCard;
	} else {
		moreCards.innerHTML += projectCard;
	}
};

const produceUpToCards = (cardDetail, cardNumberFix) => {
	const { coverImage, altName, cardTitle, description, referencePage } = cardDetail;
	const uptoCard = `<div class="col-xl-4 col-lg-6 col-md-6 card--${cardNumberFix}">
							<div class="card shadow p-3 mb-5 rounded card-${cardNumberFix}">
								<img
									src="${coverImage}"
									alt="${altName}"
									class="card-img-top"
									aria-label="${altName}"
								/>
								<div class="card-body">
									<h5 class="card-title rh${cardNumberFix}">${cardTitle}</h5>
									<p class="card-text ct${cardNumberFix}">
										${description}
									</p>
									<a href="${referencePage}" class="card-link rbt${cardNumberFix}"
										>Read full story

										<i class="fa fa-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>`;

	const UpToCardsParent = document.getElementById('upToCards');
	UpToCardsParent.innerHTML += uptoCard;
};

const produceCountDownComponent = counDownCard => {
	const { text, countFrom, iconClasses } = counDownCard;

	const countCard = `<div class="col-md-4 col-sm-4">
								<div class="stat-items">
									<i class="${iconClasses}"></i>
									<h2><span class="counter text-center">${countFrom}</span></h2>
									<p class="counter-text">${text}</p>
								</div>
					</div>`;

	const countDownSection = document.getElementById('countDown');
	countDownSection.innerHTML += countCard;
};

const injectProjectCards = () => {
	projectDetails.forEach(cardDetail => {
		produceProjectCards(cardDetail, 'basic');
	});
	addditionalProjects.forEach(cardDetail => {
		produceProjectCards(cardDetail);
	});
};

const injectUpToCards = () => {
	memberUpToCardsDetails.forEach((cardDetail, index) => {
		produceUpToCards(cardDetail, index + 1);
	});
};

const injectCountDownCards = () => {
	countDownDetails.forEach(cardDetail => {
		produceCountDownComponent(cardDetail);
	});
}

injectCountDownCards();
injectProjectCards();
injectUpToCards();
