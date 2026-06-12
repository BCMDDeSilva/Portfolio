# Portfolio

A personal portfolio website built with React and Vite. The app presents a clean, dark themed interface with routed pages for the home section, about page, skills list, projects gallery, and contact form.

## Overview

This project is designed as a simple single-page portfolio experience with client-side routing. A sticky navigation bar stays visible across the site, and each section is rendered inside the main content area without full page reloads.

The current content is centered around Malith Dilhara's profile, experience, skills, and selected GitHub projects.

## Features

- React 19 app bootstrapped with Vite
- Client-side routing with React Router DOM
- Sticky navigation bar with active link styling
- Personal home section with profile image and call-to-action links
- About section with short bio
- Skills section rendered as badge-style chips
- Projects section with linked project cards and GitHub profile link
- Contact section with a styled form layout
- Responsive, GitHub-inspired dark UI

## Tech Stack

- React
- React DOM
- React Router DOM
- Vite
- ESLint

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── README.md
├── image/
├── public/
└── src/
	├── App.jsx
	├── index.css
	├── main.jsx
	├── assets/
	├── components/
	│   └── Navbar.jsx
	└── pages/
		├── About.jsx
		├── Contact.jsx
		├── Home.jsx
		├── Projects.jsx
		└── Skills.jsx
```

## Pages and Routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Intro section with profile image and call-to-action links |
| `/about` | About | Short biography and development focus |
| `/skills` | Skills | Display of core tools and abilities |
| `/projects` | Projects | Selected GitHub projects with external links |
| `/contact` | Contact | Contact form layout for inquiries |

## Components

- `App.jsx` sets up the router, layout shell, and page routes.
- `Navbar.jsx` renders the top navigation and highlights the active route.
- `Home.jsx` shows the profile image and introduction content.
- `About.jsx` contains the personal summary.
- `Skills.jsx` renders the skill badges.
- `Projects.jsx` lists project cards and GitHub links.
- `Contact.jsx` provides the contact form markup.

## Getting Started

### Prerequisites

- Node.js 18 or newer is recommended
- npm is used for package management

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Vite will start a local development server and print the URL in the terminal.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `vite` | Starts the Vite development server |
| `build` | `vite build` | Builds the app for production |
| `preview` | `vite preview` | Serves the production build locally |
| `lint` | `eslint .` | Runs ESLint across the project |

## Styling

The site uses a custom dark theme defined in `src/index.css`.

- Background uses a subtle gradient across the entire page
- Cards and form elements use soft borders and rounded corners
- Typography relies on the system UI font stack
- Links and buttons use blue and green accent colors for contrast
- The layout is responsive and centered with a constrained content width

## Content Notes

- The home page imports a local profile image from the `image/` folder.
- The projects list links out to external GitHub repositories.
- The contact form is presentational only and does not currently submit data to a backend or service.

## Customization Tips

If you want to adapt this portfolio for your own use, the most common changes are:

1. Replace the personal name, bio, and profile image in `src/pages/Home.jsx`.
2. Update the About page text in `src/pages/About.jsx`.
3. Edit the skills array in `src/pages/Skills.jsx`.
4. Replace project names, descriptions, and links in `src/pages/Projects.jsx`.
5. Wire the contact form to a backend, email service, or form handler if you want it to send messages.

## Deployment

Because this is a Vite app, it can be deployed to most static hosting providers.

Common options include:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Make sure the host is configured to serve `index.html` for client-side routes such as `/about` and `/projects`.

## License

No license has been specified in this repository yet. Add one if you want to define how others may use the code.
