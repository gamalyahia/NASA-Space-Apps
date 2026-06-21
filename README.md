# NASA Space Apps — Community Challenge Map

An interactive web app built for the **NASA Space Apps Challenge**, mapping the geographic and environmental challenges facing Egyptian communities — water shortage, coastal erosion, pollution, and population density — and presenting practical, data-backed solutions for each.

The goal: turn satellite/geographic data into something a resident, student, or policymaker can actually explore and understand, then give them a place to leave feedback on each issue.

## Features

- 🗺️ **Interactive challenge map** — visual entry point into each environmental issue
- 📊 **Issue deep-dives** — each challenge (Water Shortage, Coastal Erosion, Pollution, Population Density) has supporting stats, images, and video
- 💡 **Solutions** — practical, actionable recommendations per issue
- 💬 **Comments** — visitors can leave comments on individual problem pages, stored in MongoDB
- 🎯 **Our Mission / About Us** — pages describing the project's goals and the team behind it
- 🎨 Smooth page transitions and animations via Framer Motion / React Spring

## Tech Stack

**Frontend** (`Frontend/nasa`)
- React 18 + Vite
- React Router DOM
- Material UI (MUI)
- Framer Motion & React Spring (animations)
- Axios

**Backend** (`Server`)
- Node.js + Express
- MongoDB + Mongoose
- CORS

## Project Structure

```
NASA-Space-Apps/
├── Frontend/
│   └── nasa/                  # React + Vite client
│       └── src/
│           ├── Pages/         # Home, About Us, Our Mission, Details, Contacts
│           ├── components/    # Navbar, Footer, Comment, DefaultLayout, etc.
│           ├── Framer_Motion/ # Animation helpers
│           ├── Data.js        # Challenge content (issues, stats, media, solutions)
│           └── assets/        # Images, videos, icons
└── Server/
    ├── Models/
    │   └── CommentsSchema.js  # Mongoose schema for comments
    ├── Urls.js                # Port & DB connection config
    └── index.js                # Express app & API routes
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- A MongoDB connection string (MongoDB Atlas or local)

### 1. Clone the repo
```bash
git clone https://github.com/gamalyahia/NASA-Space-Apps.git
cd NASA-Space-Apps
```

### 2. Set up the backend
```bash
cd Server
npm install
```
Configure your database connection and port in `Urls.js`:
```js
export const PORT = 8000;
export const DbUrl = "<your-mongodb-connection-string>";
```
Then run:
```bash
npm run dev
```
The API will be available at `http://localhost:8000`.

### 3. Set up the frontend
```bash
cd Frontend/nasa
npm install
```
Create a `.env` file in `Frontend/nasa` with:
```
VITE_BASE_URL=http://localhost:8000
```
Then run:
```bash
npm run dev
```
The app will be available at the local URL Vite prints (typically `http://localhost:5173`).

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/?problemTitle=<title>` | Fetch all comments for a given problem |
| `POST` | `/` | Submit a new comment — body: `{ comment, problemTitle }` |

## ⚠️ Security Note

This repo currently has a live database connection string committed in `Server/Urls.js` and a `.env` file committed at the project root. Before making this repository public or deploying it:
- Remove `Urls.js` and `.env` from version control and add them to `.gitignore`
- Rotate the exposed database credentials
- Load secrets from environment variables instead (e.g. `process.env.DB_URL`)

## Team

| Name | Role |
|------|------|
| Gamal Yahia | Full Stack Developer |
| Abdullah Mohammed | Full Stack Developer |
| Mohammed Islam | MERN Stack Developer |
| Hussien Mohammed | UI & UX Designer |
| Omar Youssef | React Developer |

## License

No license specified yet — consider adding one (e.g. MIT) if you intend for others to reuse this code.
