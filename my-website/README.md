# My Website

This is a Vite-based website project designed for deployment on GitHub Pages.

## Project Structure

```
my-website
├── .github
│   └── workflows
│       └── deploy.yml      # GitHub Actions workflow for deployment
├── public
│   └── CNAME                # Custom domain name for GitHub Pages
├── src
│   ├── main.ts              # Entry point of the Vite application
│   ├── styles
│   │   └── main.css         # Main styles for the website
│   └── components
│       └── Hello.ts         # Functional component that renders a greeting message
├── index.html               # Main HTML file for the website
├── package.json             # npm configuration file
├── vite.config.ts           # Vite configuration file
├── tsconfig.json            # TypeScript configuration file
├── .gitignore               # Files and directories to be ignored by Git
└── README.md                # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build the project for production:**
   ```bash
   npm run build
   ```

## Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages. The workflow is defined in `.github/workflows/deploy.yml`. 

To deploy the site, push changes to the main branch, and the workflow will automatically build and deploy the site to the `gh-pages` branch.

## Usage

Open the website in your browser to see the application in action. The main entry point is defined in `src/main.ts`, and you can modify the components in the `src/components` directory to customize the content.