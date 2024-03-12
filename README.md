# Hi :)

## [🔗Visit hosted version here](https://duggup-frontend-submission-by-jait.vercel.app/)

This is my submission for Duggup's Frontend Engineer Role. For this short assignment my primary focus was to,

1. Develop pixel perfect page using SvelteKit & Shadcn
2. Write styles using Tailwind CSS.
3. Deploy it on Vercel.

# Approach
From the Figma designs provided I derived 3 main parts that needed to be tackled. This was also the order in which I coded the page.

1. Navbar with Logo, 3 nav elements, 1 button w/ hover state & an Avatar with Label.
2. Hero Section w/ Profile picture, a blurb and other info.
3. Timeline with two types of sections: Timeline Story & Timeline Status
   - Initially I created a Timeline component with hardcoded data.
   - The reusable markup and styles were factored out into DynamicTimeline which imports a JSON data object and creates the timeline dynamically as per assignment requirement.
   - I've left out 'Timeline' as a zombie component for inspection. It however does not get used anywhere in the production code.

# To run this repo locally,

1. Clone the repository,
   `git clone https://github.com/jaitjacob/throwaway-repo-dgp.git`

2. `cd` into the `timeline` directory where the `package.json` lives,
   cd timeline

3. Install all the dependencies,
   `npm install`

4. `npm run dev`

5. Visit `localhost:5173` on your browser.

Few things I might get around to after submission,

1. Mobile responsiveness
2. Add a smoke test, and few UI tests using Playwright
