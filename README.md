# Fleet Dashboard

A responsive Fleet Overview Dashboard built using **React.js**, **TailwindCSS**, and **Express.js**, designed to monitor fleet usage and vehicle stats. This app displays key metrics and visualizes data trends with clean, modern UI components.

## Backend Setup (Express API)

This project uses **Express.js** to serve mock data.

### How to Start the Backend

1. Open terminal in the `backend/` directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

4. API server will run at `http://localhost:4000`

### Available Endpoints

* `GET /api/overview` – Returns vehicle summary stats
* `GET /api/usageStats` – Returns vehicle usage data for 7, 15, or 30 days

> Make sure the backend is running before starting the frontend.

## Frontend Setup

The frontend is built using **React + TypeScript + Vite** and styled with **TailwindCSS**.

### How to Run Frontend

1. Open terminal in the `frontend/` directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Features

* Overview Cards:

  * Total Vehicles
  * Vehicles in Use
  * Vehicles Idle
  * Vehicles Under Maintenance

* Graph Section:

  * Vehicle usage data visualized using **Recharts**
  * Supports 7/15/30 day view toggle

* Responsive UI:

  * Mobile-first layout with TailwindCSS

* Loading States:

  * Custom loading spinner while fetching data

* Reusable Components:

  * `OverviewCard`, `UsageChart`, `RangeSelector`, `LoadingSpinner`, and `Button`

## Assumptions and Design Decisions

* Used Express.js for API handling and scalability.
* Focused on modularity and clean UI with reusable components.
* Visual design uses **TailwindCSS** and **React Icons** to maintain a modern and responsive UI.
* Built-in range selection (7/15/30 days) helps quickly visualize usage trends.
* Loading states are managed using a **custom spinner** component.
* Minimalist design with emphasis on clarity, responsiveness, and performance

## Submission Checklist

* Frontend: React + TypeScript + Vite + TailwindCSS
* Backend: Express.js mock API
* Live Demo: [Netlify Link](https://dashing-melba-1432b5.netlify.app/)
* GitHub Repo: [GitHub Repository](https://github.com/shalininukella/fleet-dashboard)
