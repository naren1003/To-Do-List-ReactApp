# Task Tracker

A simple React to-do list app for tracking tasks, statuses, and due dates. Tasks are saved in the browser with `localStorage`, so they stay available after refreshing the page.

## Features

- Add new tasks with a name, status, and optional due date
- Edit existing task details
- Cancel edits without saving changes
- Delete tasks
- Track task status as `Pending`, `In Progress`, or `Completed`
- Persist tasks in browser local storage
- Empty-state message when there are no tasks
- Responsive layout for smaller screens

## Tech Stack

- React
- Vite
- CSS
- Browser `localStorage`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    TaskInput.jsx
    TaskInput.css
    TaskList.jsx
    TaskList.css
    TaskItems.jsx
    TaskItems.css
  App.jsx
  App.css
  index.css
  main.jsx
```

## Future Improvements

- Search and filter tasks
- Task priority levels
- Due date sorting
- Reminder notifications
- Dark/light theme toggle
- Backend sync for multi-device access

## Author

Narendra G S
