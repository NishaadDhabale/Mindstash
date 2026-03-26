# 🚀 Mindstash

Mindstash is a powerful "second brain" application designed to help you save, organize, and effortlessly share your favorite digital content. Whether it's a thought-provoking tweet, a useful YouTube video, or an essential article link, Mindstash keeps all your digital discoveries safely stored and easily accessible in one centralized dashboard.

## 📖 Description
In the age of information overload, keeping track of valuable resources can be overwhelming. Mindstash solves this by providing a clean, distraction-free environment to stash your digital content. You can categorize your saved links and even generate public, shareable links to let others view specific collections of your "stashed" content.

Key Features:

Centralized Digital Vault: Save links, tweets, and YouTube videos in one place.

Content Organization: Easily view and manage your saved items from an intuitive dashboard.

Secure Sharing: Generate public links to share your curated content with friends or colleagues.

Modern & Responsive UI: A sleek interface built with Tailwind CSS for seamless use across devices.

Robust Authentication: Secure user signup and login using JSON Web Tokens (JWT).

## 🧭 Table of Contents
🛠️ Tech Stack

⚙️ Installation

▶️ Usage

💡 Usage Examples

📂 Project Structure

🔌 API Documentation

🚧 Features

🔮 Future Improvements

🤝 Contributing

👤 Author / Credits

## 🛠️ Tech Stack
Frontend:

React 18 (via Vite)

TypeScript

Tailwind CSS (Styling)

React Router DOM (Navigation)

Backend:

Node.js & Express.js

TypeScript

MongoDB & Mongoose (Database)

JSON Web Tokens (JWT) (Authentication)

## ⚙️ Installation
1. Clone the repository

```bash
git clone https://github.com/nishaaddhabale/mindstash.git
cd mindstash
```

2. Backend Setup
Navigate to the backend directory, install dependencies, and configure environment variables.

```bash
cd backend
npm install
```

Create a .env file in the backend folder:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

3. Frontend Setup
Navigate to the frontend directory and install dependencies.

```bash
cd ../frontend
npm install
```

Create a .env file in the frontend folder if needed:

```env
VITE_API_BASE_URL=http://localhost:3000/api/v1
```

## ▶️ Usage

Start the Backend Server

```bash
cd backend
npm run dev
```

The server will start on port 3000 (or the port specified in your .env).

Start the Frontend Application

```bash
cd frontend
npm run dev
```

The application will open on http://localhost:5173.

## 💡 Usage Examples

Adding New Content

Log in to your Mindstash dashboard.

Click the "Add Content" (Plus icon) button to open the modal.

Paste the URL of the Tweet, YouTube video, or website.

Add an optional title and select the content type.

Click "Save". The content instantly appears on your dashboard.

Sharing Your Stash

On your dashboard, click the "Share Brain" button.

The app generates a unique public link.

Share this link with anyone to give them read-only access to your curated content collection.

## 📂 Project Structure

```plaintext
├── backend/
│   ├── src/
│   │   ├── config.ts        # Environment configurations & secrets
│   │   ├── db.ts            # Mongoose connection & schemas (User, Content, Link)
│   │   ├── index.ts         # Main Express application entry point
│   │   ├── middleware.ts    # JWT authentication middleware
│   │   └── utils.ts         # Helper functions
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── assets/          # Static assets & icons
│   │   ├── components/      # Reusable UI elements (Card, Button, Sidebar, Modals)
│   │   ├── hooks/           # Custom React hooks (useContent, useShare)
│   │   ├── icons/           # SVG icon components (Twitter, YouTube, etc.)
│   │   ├── pages/           # Route views (Dashboard, Signin, Signup, Landing)
│   │   ├── App.tsx          # Application routing
│   │   └── main.tsx         # React DOM rendering
│   ├── tailwind.config.js   # Tailwind styling configurations
│   └── package.json
└── README.md
```

## 🔌 API Documentation
Assuming standard /api/v1 base route.

Authentication

POST /signup: Register a new account.

POST /signin: Authenticate and receive a JWT.

Content Management

GET /content: Retrieve all saved content for the authenticated user.

POST /content: Add a new piece of content (Requires JWT).

```json
{
  "link": "https://twitter.com/...",
  "type": "twitter",
  "title": "Interesting Thread"
}
```

DELETE /content/:id: Delete a specific content item.

Sharing

POST /brain/share: Enable sharing and generate a unique hash link.

GET /brain/:shareLink: Retrieve a user's public content via their unique share link.

## 🚧 Features

[x] Secure User Authentication (Signup/Login).

[x] Save and categorize external links.

[x] Embed support for Twitter and YouTube.

[x] Custom React Hooks for data fetching (useContent, useShare).

[x] Shareable public dashboard links.

[x] Fully responsive design for mobile and desktop viewing.

## 🔮 Future Improvements

Tagging & Filtering: Allow users to add custom tags to content and filter by them.

Browser Extension: Create a Chrome/Firefox extension for 1-click saving directly from the browser.

Global Search: Implement a full-text search to easily find saved links by title or domain.

Dark Mode: System-preference aware dark and light themes.

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

## 👤 Author / Credits

Nishaad Dhabale

GitHub: @nishaaddhabale

Other Projects: [FreeFlow, SwiftPay]
