const announcementTimeline = [
	{
		eventName: 'Young Scholar Contest',
		eventDescription: `It is a 5 day coding camp where everyone can participate and prepare
		themselves for the upcoming Young Scholar Contest.`,
		eventDate: 'June 12, 2020',
		eventPageLink: './event1.html'
	},
			{
		eventName: 'Young Scholar Contest',
		eventDescription: `A contest for the participants to participate and showcase their skills and learnings from the previous workshop.
		A two day competitive battle buckle up!`,
		eventDate: 'June 17, 2020',
		eventPageLink: './event1.html'
	},
	{
		eventName: 'Girlscript Summit Learning Contest',
		eventDescription: `Get a headstart by learning with GirlScript Jammu. Pack your bags because it's a week long contest.`,
		eventDate: 'June 19, 2020',
		eventPageLink: './event1.html'
	}

];

const recentEventsDetails = [
	{
		coverImage: 'assets/Images/announcement/eh.png',
		eventName: 'Ethical Hacking',
		altName: 'Ethical Hacking',
		eventDescription: `We are feeling much happy to tell you that Mr. Devendra Kashyap, a system engineer from INFOSYS 
		joined us for a session on Ethical Hacking.`,
		referencePage: '#!'
	},
	{
		coverImage: 'assets/Images/announcement/os.png',
		eventName: 'Open source world',
		altName: 'Step in to the world of open source',
		eventDescription: `Mr. Gaurav Sharma explained the ins and outs of the open source world out there.`,
		referencePage: '#!'
	},
	{
		coverImage: 'assets/Images/announcement/im.png',
		eventName: 'Influencer Marketing',
		altName: 'Influencer Marketing',
		eventDescription: `Thank you Mr. Devan Bhalla, TedX Speaker for imparting knowledge about
		Personal Branding and Influencer Marketing.`,
		referencePage: '#!'
	}
];


const generateTimelineCard = (timelineDetail, position) => {
	const { eventName, eventDescription, eventDate, eventPageLink } = timelineDetail;

	const dateType = position === 'right' ? 'time-2' : 'time-1';

	const timeline = `<div class="timeline-container ${position}">
						<div class="timeline-content">
							<h3>${eventName}</h3>
							<hr class="mw-100 line1" />
							<p class="description">
								${eventDescription}
							</p>
							<div class="time ${dateType}">
								<h5>${eventDate}</h5>
							</div>
							<div class="card-stats">
								<a href="${eventPageLink}" class="btn card-btn card1-text" target="__blank">Read More</a>
							</div>
						</div>
					</div>`;

	const timelineSection = document.getElementById('timeline');
	timelineSection.innerHTML += timeline;
};

const generateEventsCard = (eventDetail, fixClassIndex) => {
	const { coverImage, eventName, altName, eventDescription, referencePage } = eventDetail;
	const eventCard = `<div class="card r-events-card">
						<div class="card-image">
							<img
								src="${coverImage}"
								alt="${altName}"
								aria-label="${altName}"
							/>
						</div>
						<div class="card-text">
							<h2 class="rh${fixClassIndex}">${eventName}</h2>
							<p class="pt-1 event-body">
								${eventDescription}
							</p>
						</div>
						<div class="card-stats">
							<a href="${referencePage}" class="btn card-btn card1-text card-btn2"> Read More</a>
						</div>
					</div>`;

	const recentEventsSection = document.getElementById('eventCards');
	recentEventsSection.innerHTML += eventCard;
};

const insertAnnouncementTimeline = () => {
	// position of events on timeline will be judged automatically
	announcementTimeline.forEach((details, index) => {
		const position = index % 2 === 0 ? 'left' : 'right';
		generateTimelineCard(details, position);
	});
};
const insertEventCards = () => {
	recentEventsDetails.forEach((detail, index) => {
		generateEventsCard(detail, index + 1);
	});
};

insertAnnouncementTimeline();
insertEventCards();
