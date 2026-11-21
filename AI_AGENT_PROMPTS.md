# 🤖 AI Agent Prompt Templates for Your Portfolio

If you want to use an AI agent (like Cline, Cursor, or ChatGPT) to develop, customize, or deploy this portfolio, here are highly optimized prompts you can copy and paste to get high-quality results.

---

## 🎨 1. Prompt to Customize Your Portfolio Content
Use this prompt when you want to change the portfolio's developer profile, skills, projects, and contact details.

```text
Please help me customize my portfolio data. Open the file `src/data/portfolioData.js` and update it with my professional details:
- Name: [Your Name]
- Title: [e.g., Full Stack Engineer / DevOps Architect]
- Bio: [A brief description of your experience and interests]
- Key Highlights: [Bullet points of your key achievements or domains of expertise]
- Languages: [List of languages, e.g., JavaScript, TypeScript, Rust]
- Frameworks/Libraries: [e.g., React, Next.js, Express]
- Databases: [e.g., PostgreSQL, Redis]
- Infrastructure: [e.g., Docker, AWS, GitHub Actions]
- Projects:
  1. [Project 1 Title]: [Description], [Tech Stack], [Architecture pattern]
  2. [Project 2 Title]: [Description], [Tech Stack], [Architecture pattern]
- Contact Email: [Your Email]
- Contact Message: [Short custom message]

Make sure all JavaScript imports/exports remain valid and format the updated file properly.
```

---

## 🚀 2. Prompt to Add Interactive Elements & Animations
Use this prompt to add hover effects, smooth entries, or interactive animations using Framer Motion.

```text
I want to add smooth animations to the home page using Framer Motion. 
Please review `src/App.jsx` and the section components inside `src/`. Add entry animations (fade-in, slide-up, scale-up) to:
1. The Hero section title and illustration when the page first loads.
2. The Skills grid with a staggered animation (skills popping in one by one).
3. The Projects cards when they scroll into the viewport.

Keep the performance optimized and follow React 19 best practices.
```

---

## 📈 3. Prompt to Implement Dark Mode Toggle
Use this prompt if you want to implement a custom theme toggle.

```text
Please implement a Dark/Light Mode toggle for this React portfolio using Tailwind CSS v4 and localStorage to persist the user's preference.
1. Create a ThemeToggle button component (using Lucide icons like Sun and Moon).
2. Place the ThemeToggle component in the Navbar (`src/Navbar.jsx`).
3. Set up the logic to add/remove the `dark` class on the `<html>` or `<body>` element.
4. Update global styles and background/text colors in Tailwind to support seamless dark and light modes.
```

---

## 🌐 4. Prompt to Deploy the Portfolio
Use this prompt to prepare and deploy the project to hosting providers.

```text
Please help me configure and prepare this React Vite portfolio for deployment. 
1. Check the build scripts and vite configuration.
2. Verify if there are any linting or compilation errors by running a local build.
3. Help me set up configuration for Vercel/Netlify hosting, including any redirects or configuration files needed for single-page routing.
4. Provide step-by-step instructions on how I can deploy it via GitHub integration or CLI.
```

---

## 🛠️ 5. Prompt to Add a New Section (e.g., Testimonials or Certificates)
Use this prompt to add a brand new component/section to the app.

```text
I want to add a brand new "[Insert Section Name, e.g., Certifications]" section to my portfolio.
1. Define any new data fields required inside `src/data/portfolioData.js`.
2. Create a new JSX component under `src/` (e.g., `src/Certifications.jsx` and `src/Certifications.css`). Use modern styling matching the rest of the site's layout.
3. Import and render the new component inside `src/App.jsx` at the appropriate location.
4. Ensure it has a matching nav link in the Navbar (`src/Navbar.jsx`) for smooth scroll navigation.
```
