# WorkFlow-App_1
React, redux, tailwind

### Instalaciones
npx create-react-app workflow
cd workflow

#### Router
npm i react-router-dom@6

#### Redux
npm install react-redux
npm install @reduxjs/toolkit
npm start

#### Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js:
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

#### React icons
npm install react-icons --save
