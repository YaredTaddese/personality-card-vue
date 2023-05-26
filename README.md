# Personality Card

[Live Demo](https://personality-card.netlify.app)

## Tasks

The following tasks were preformed in order:

1. Created a basic Nuxt.js app using `create-nuxt-app` and the following options:

   - Programming language: `TypeScript`
   - Package manager: `Yarn`
   - UI framework: `None`
   - Template engine: `HTML`
   - Nuxt.js modules: `None`
   - Linting tools: `ESLint, Prettier`
   - Testing framework: `None`
   - Rendering mode: `Single Page App`
   - Deployment target: `Server (Node.js hosting)`
   - Development tools: `None`
   - Continuous integration: `None`
   - Version control system: `Git`

<br />

2. Installed and configured `tailwindcss`.
3. Added custom colors and size values to the tailwind config file `tailwind.config.js`
4. Created a basic `PersonalityCard` component.
5. Created a `vuex` store in `store/user.ts` for the `PersonalityCard` component's state.
6. Installed and integrated `axios` to fetch data from [Random Data API](https://random-data-api.com).
7. Displayed fetched data on the card component.
8. Added a placeholder bio to the fetched user using the `lorem-ipsum` package.
9. Implemented a random student button.
10. Split the `PersonalityCard` into multiple components:  
    `ChipLabel`, `PersonalityCard`, `PersonalityCardDetails`, `PersonalityCardHeading`, `StyledHeader`
11. Made the card responsive and applied minor visual tweaks.
12. Adjusted the layout of `PersonalityCardHeading` to be vertical on small screens.
13. Added a loading spinner component: `LoadingSpinner`.
14. Handled text overflow on the `ChipLabel` component.
15. Added service worker caching by adding the `@nuxtjs/pwa` package and modifying the `nuxt.config.js` file according to the docs.
16. Replaced the loading spinner with a loading skeleton component: `LoadingSkeleton`.
17. Replaced error text with a proper template and a more clear message.
18. Updated the package name and app title.

## Installation

1. Clone the repository.
2. Install the necessary dependencies by running `yarn install`.
3. Start the development server with `yarn dev`.
