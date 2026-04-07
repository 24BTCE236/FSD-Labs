# Auth Token Simulation Lab

A simple React + Vite lab that simulates authentication token storage with `localStorage` and `sessionStorage`.

## What this lab covers

- fake auth token generation
- `localStorage` token persistence
- route protection using component state
- logout behavior
- manual token inspection and removal

## Setup

```bash
cd auth-token-lab
npm install
npm run dev
```

Open the page in your browser and test the login flow.

## Project structure

- `src/main.jsx`
- `src/App.jsx`
- `src/components/Login.jsx`
- `src/components/Dashboard.jsx`

## Lab experiments

- Inspect `authToken` in DevTools Application → Local Storage
- Refresh to keep the user logged in
- Change storage to `sessionStorage` in `Login.jsx` to see it clear on tab close
- Remove token manually to verify logout behavior
