# Blog App

A full-stack blog application built with Next.js (frontend) and Node.js/Express (backend). This project supports user authentication, blog post management, categories, comments, and a modern UI with dark mode support.

## Features

- User authentication (login/register)
- Create, edit, and delete blog posts
- Commenting system
- Category management
- Responsive and modern UI (Tailwind CSS)
- Dark mode toggle (with persistence)
- RESTful API backend
- File uploads for avatars and cover images
- Dashboard for admin and users

## Tech Stack

**Frontend:**
- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query (react-query)

**Backend:**
- Node.js
- Express.js
- JSON file-based storage (for demo)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd blog-app
   ```

2. **Install dependencies:**
   ```sh
   cd backend && npm install
   cd ../frontend && npm install
   ```

3. **Run the backend server:**
   ```sh
   cd backend
   npm start
   ```

4. **Run the frontend app:**
   ```sh
   cd frontend
   npm run dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `backend/` - Express.js API server
- `frontend/` - Next.js frontend app
- `uploads/` - Uploaded files (avatars, cover images)

## Scripts

- **Frontend:**
  - `npm run dev` - Start Next.js in development mode
  - `npm run build` - Build for production
  - `npm run lint` - Lint code
  - `npx tsc --noEmit` - Type-check TypeScript
- **Backend:**
  - `npm start` - Start the Express server

## License

This project is for educational/demo purposes. Feel free to use and modify.
