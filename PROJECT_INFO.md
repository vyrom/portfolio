# 📋 Project Information & Commands

Welcome to the documentation for your Personal Portfolio project! This document outlines the project structure, configuration, and the CLI commands required to run, build, and maintain the application.

---

## 🚀 Tech Stack

This project is built using a modern, fast, and light-weight frontend tech stack:

*   **Framework:** [React 19](https://react.dev/) (`react` & `react-dom` @ `^19.2.6`)
*   **Build Tool:** [Vite 8](https://vitejs.dev/) (`vite` @ `^8.0.12`)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (`tailwindcss` & `@tailwindcss/vite` @ `^4.3.0`)
*   **Icons:** [Lucide React](https://lucide.dev/) (`lucide-react` @ `^1.16.0`) & [React Icons](https://react-icons.github.io/react-icons/) (`react-icons` @ `^5.6.0`)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) (`framer-motion` @ `^12.40.0`)
*   **Linting:** [ESLint 10](https://eslint.org/) (`eslint` @ `^10.3.0`)

---

## 🛠️ Getting Started & Commands

Here are the essential terminal commands to manage and develop this project:

### 1. Install Dependencies
Before running the app for the first time, install the required packages:
```bash
npm install
```

### 2. Start Local Development Server
Launch the local development environment with hot-module replacement (HMR):
```bash
npm run dev
```
*The app will typically be available at `http://localhost:5173/` or as displayed in your terminal.*

### 3. Build for Production
Compile and optimize the source code into production-ready static assets:
```bash
npm run build
```
*The compiled assets will be output to the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.*

### 4. Preview Production Build
Locally preview the generated production build to verify everything works as expected before deploying:
```bash
npm run preview
```

### 5. Lint the Codebase
Analyze the source code to find and fix syntax, styling, and structural issues:
```bash
npm run lint
```

---

## 📂 Project Directory Structure

```text
portfolio/
├── .gitignore               # Files and folders to ignore in Git
├── eslint.config.js         # ESLint tool configuration
├── Hero.css                 # Hero section specific styling
├── Hero.jsx                 # Hero component
├── index.html               # Main HTML document / Entry shell
├── package.json             # Project metadata, scripts, and dependencies
├── README.md                # General introduction README
├── vite.config.js           # Vite bundler & Tailwind plugin configuration
├── public/                  # Static assets served directly (e.g., icons, favicon)
│   ├── favicon.svg
│   └── icons.svg
├── src/                     # Main source code directory
│   ├── App.jsx              # App component that structures and orchestrates all sections
│   ├── index.css            # Global Tailwind and application styles
│   ├── main.jsx             # Entry point file rendering the React application
│   ├── assets/              # Developer portfolio images/icons
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   └── data/
│       └── portfolioData.js # Structured javascript data driving the entire application
```

---

## ✏️ Customizing Portfolio Data

All the content rendered on the portfolio is dynamically loaded from `src/data/portfolioData.js`. You can easily edit this file to personalize the portfolio:

*   **Hero Information:** Edit the name, job title (`subtitle`), and high-level developer bio.
*   **Skills:** List your programming languages, frameworks, databases, and tools.
*   **Projects:** Define your showcase apps with custom descriptions, tech stacks, links, and system architecture diagrams.
*   **Contact Information:** Update the target email and contact descriptions.
