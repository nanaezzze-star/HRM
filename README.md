# HRM - Candidate Management Dashboard

Application built for recruitment management. This project demonstrates modern Frontend architecture, state management, and custom manual bundling without boilerplate generators like Create React App.

Live Demo: [(https://hrm-puce-one.vercel.app/)]

## Technologies

* React (v19)
* React Router DOM (v7)
* Redux Toolkit & RTK Query
* Webpack 5 & Babel
* @dnd-kit/core (Drag & Drop)
* Native CSS Modules

## Features

* Custom Webpack configuration for development and production builds.
* State management and API data fetching/caching via Redux Toolkit and RTK Query.
* Interactive Kanban board with Drag-and-Drop functionality implemented using the @dnd-kit/core library.
* Automatic pipeline value calculations based on Kanban columns.
* Paginated candidate list using data from DummyJSON API.
* Detailed user profile pages with dynamic routing and OpenStreetMap integration.
* Responsive design built with native CSS without third-party UI libraries.

## Setup Instructions

1. Clone the repository:
git clone https://github.com/nanaezzze-star/HRM.git
cd HRM

2. Install dependencies:
npm install


3. Start the development server:
npm start

The application will be available at http://localhost:3000.

4. Build for production:
npm run build

