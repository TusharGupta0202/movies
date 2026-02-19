#🎬 React Movies App (TMDB + Appwrite)

A modern movie discovery web application built with React, TMDB API, and Appwrite.
It allows users to search movies, view trending movies based on user searches, and provides a smooth, responsive UI.

📌 Features
• 🔍 Search movies using TMDB API
• 📈 Track most searched movies using Appwrite Database
• 🌟 Display trending movies
• ⚡ Debounced search for better performance
• 📱 Fully responsive design
• ♿ Accessibility-friendly components
• ⏳ Loading indicators
• ❌ Error handling
• 🖼 Image fallback support
• 🔐 Secure environment variables
• 🚀 Optimized API calls

## 🛠️ Tech Stack
### Frontend
• React (Vite)
• JavaScript (ES6+)
• CSS / Tailwind (if used)
• react-use (for debounce)

### Backend / Services
• Appwrite (Database + API)
• TMDB API (The Movie Database)

### Tools
• Git & GitHub
• npm
• Vite
• ESLint (optional)
• Prettier (optional)

## 📂 Project Structure
react-movies/
│
├── public/
│   ├── hero.png
│   ├── no-movie.png
│   ├── search.svg
│   └── star.svg
│
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   │
│   ├── appwrite.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

## ⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/your-username/movies.git
cd movies

2️⃣ Install Dependencies
npm install

3️⃣ Create Environment File
Create a .env file in root directory:

VITE_TMDB_API_KEY=your_tmdb_bearer_token

VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_TABLE_ID=your_table_id


⚠️ Never push .env to GitHub.

4️⃣ Run Development Server
npm run dev

Open in browser:

http://localhost:5173

## 🔑 Environment Variables

| Variable                  | Description           |
| ------------------------- | --------------------- |
| VITE_TMDB_API_KEY         | TMDB API Bearer Token |
| VITE_APPWRITE_PROJECT_ID  | Appwrite Project ID   |
| VITE_APPWRITE_DATABASE_ID | Appwrite Database ID  |
| VITE_APPWRITE_TABLE_ID    | Appwrite Table ID     |


## 🌐 APIs Used
• TMDB API
Used for fetching movies.

• Endpoints:

/search/movie
/discover/movie

Docs: https://developer.themoviedb.org/

## Appwrite Database

### Used for:

• Storing search counts
• Generating trending movies
• Analytics

### Operations:

• createRow
• listRows
• updateRow

Docs: https://appwrite.io/docs

## 🗄 Appwrite Database Schema

Create a collection/table with fields:

| Field Name    | Type    | Required |
| ------------- | ------- | -------- |
| searchTerm    | String  | Yes      |
| count         | Integer | Yes      |
| movie_id      | String  | Yes      |
| poster_url    | String  | Yes      |
| last_searched | String  | No       |


Create Index:

Field: movie_id
Type: Key


Improves performance.

## 🚀 Application Flow
1️⃣ User Types in Search Bar
↓
2️⃣ Debounce (500ms delay)
↓
3️⃣ TMDB API Fetch
↓
4️⃣ Display Movies
↓
5️⃣ Update Appwrite Count
↓
6️⃣ Update Trending List

## 🧩 Components Overview

### MovieCard.jsx
• Displays movie details
• Lazy loads images
• Handles fallback images

### Search.jsx

• Controlled input
• Clear button
• Accessible input

### Spinner.jsx

• Loading indicator
• Screen reader support

### App.jsx

• State management
• API calls
• Debouncing
• Rendering logic

### appwrite.js

• Database queries
• Trending logic
• Search tracking

## 📈 Performance Optimizations

• Debounced search
• Lazy loading images
• AbortController
• API request batching
• Indexed database fields

## ♿ Accessibility Features

• Semantic HTML
• Proper alt tags
• Screen reader labels
• Keyboard navigation
• ARIA attributes

## 🛡 Error Handling

• API failure handling
• Network error fallback
• Empty states
• Broken image fallback
• Safe rendering

## 🧪 Testing (Optional)

You can add:
npm install jest @testing-library/react

Test cases for:
• Search
• API calls
• Components
• Error states

## 📦 Deployment
### Build Project
npm run build

### Deploy On
Vercel

### GitHub Pages
npm run build
npm run deploy

## 📝 Git Setup

### Initialize:

git init
git add .
git commit -m "Initial commit"

### Push:

git remote add origin <repo-url>
git push -u origin main

### 📋 .gitignore Example
node_modules
.env
dist
build
.DS_Store

## 🔮 Future Improvements

• TypeScript migration
• Authentication system
• User accounts
• Watchlist
• Favorites
• Pagination
• Offline caching
• SSR (Next.js)
• PWA support
• Unit testing
• Admin dashboard

## 💼 Resume Value

This project demonstrates:

✔ React Hooks
✔ API Integration
✔ Backend-as-a-Service
✔ State Management
✔ Performance Optimization
✔ Production Practices
✔ Clean Architecture
✔ Real-world Workflow

## 📜 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Tushar Gupta
Frontend / MERN Stack Developer

GitHub: https://github.com/TusharGupta0202

⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
🐛 Report issues
🚀 Suggest features
