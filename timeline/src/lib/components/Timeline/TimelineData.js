// for the sake of this assignment, assume this data is fetched over the network by the frontend shell
export const data = {
	timeline: [
		{
			type: 'story',
			date: 'Dec 2023',
			posts: [
				{
					img: '/posts/01.jpg',
					imgAlt: 'steve jobs',
					text: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					img: '/posts/02.jpg',
					imgAlt: 'sam alt',
					text: "Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas."
				}
			]
		},
		{
			type: 'status',
			jobStatus: {
				position: 'Co-founder and CEO',
				jobType: 'Full-time &#183; Remote',
				company: 'Duggup',
				location: 'San Francisco Bay Area',
				startDate: 'Nov 22'
			}
		},
		{
			type: 'story',
			date: 'Dec 2023',
			posts: [
				{
					img: '/posts/03.jpg',
					imgAlt: 'a work desk with monitor',
					text: 'Startup Lesson I am reflecting. Don\'t build for the "average person".'
				},
				{
					img: '/posts/04.png',
					imgAlt: 'abstract art',
					text: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		},
		{
			type: 'status',
			jobStatus: {
				position: 'VP Engineering',
				jobType: 'Full-time &#183; Remote',
				company: 'BetterUp',
				location: 'San Francisco Bay Area',
				startDate: 'Nov 22'
			}
		}
	]
};
