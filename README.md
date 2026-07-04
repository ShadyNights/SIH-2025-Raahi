<div align="center">

# 🛡️ RAAHI

**Your trusted AI companion and monitoring dashboard for safe travel in India.**

<!-- Badges -->
<p>
  <img src="https://img.shields.io/github/stars/ShadyNights/RAAHI?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/ShadyNights/RAAHI?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Frontend%20Prototype-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini API" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License" />
</p>

## 🌐 Live Demo

<p align="center">
  <a href="https://raahiapp.netlify.app/">
    <img src="https://img.shields.io/badge/Tourist_App-Live-success?style=for-the-badge">
  </a>
  <a href="https://raahidash.netlify.app/">
    <img src="https://img.shields.io/badge/Admin_Dashboard-Live-blue?style=for-the-badge">
  </a>
</p>

</div>

---

## Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Repository Structure](#-repository-structure)
- [Architecture](#%EF%B8%8F-architecture)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Current Limitations](#%EF%B8%8F-current-limitations)
- [Future Roadmap](#%EF%B8%8F-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 Introduction

RAAHI is a comprehensive front-end prototype suite designed to enhance tourist safety and experience in India. The project consists of two distinct single-page applications (SPAs): a mobile-first application tailored for tourists and a centralized monitoring dashboard intended for administrators and local authorities.

The primary goal of RAAHI is to bridge the gap between tourist navigation, cultural exploration, and emergency safety. By integrating Google's Generative AI (Gemini) and real-time location features, the tourist application acts as an intelligent local guide. Simultaneously, the administrator dashboard provides authorities with a bird's-eye view of tourist safety statuses and geo-fenced zones.

This repository serves as a proof-of-concept prototype. It demonstrates complex frontend state management, external API integrations, and responsive UI design, though it currently operates without a persistent backend infrastructure.

---

## ✨ Features

### 🤖 AI Assistance
- **Indira AI:** An intelligent, context-aware travel guide powered by Google's Gemini API (`gemini-1.5-flash`), capable of answering cultural, historical, and navigational queries.
- **Live Translator:** Real-time conversational language translation utilizing the Gemini API (`gemini-pro`) to break down language barriers for international tourists.

### 🛡️ Safety & Emergency
- **Emergency SOS:** Immediate, one-tap emergency alerting system that triggers high-priority notifications.
- **Safety Score:** Evaluates user safety based on location, time, and historical data, displaying a real-time percentage rating.

### 🗺️ Navigation & Tracking
- **Zone Map / Geo-Fencing:** Visualizes safe and restricted geographical zones using Google Maps integration.
- **Admin Live Tracking:** A dashboard map visualization showing real-time tourist statuses (Safe, Caution, Emergency).

### 📊 Admin Analytics
- **Incident Trends:** Data visualization of recent alerts and analytics utilizing Chart.js.
- **Alert Management:** Real-time dashboard notifications for medical emergencies, lost tourists, and geo-fence breaches.

---

## 📂 Repository Structure

```text
SIH 2025 Raahi/
├── Raahi-dashboard/           # Admin Monitoring Dashboard SPA
│   ├── app.js                 # Monolithic UI, State, and Mock DB logic
│   ├── index.html             # Entry point (imports React & Tailwind via CDN)
│   └── style.css              # Custom CSS variables and utilities
│
└── Raahi-main/                # Tourist Mobile Application SPA
    ├── public/
    ├── src/
    │   ├── components/        # 20+ React feature components (SOS, Maps, AI)
    │   ├── App.js             # Core layout, navigation, and state-based routing
    │   ├── index.js           # React DOM entry point
    │   └── index.css          # Global Tailwind directives
    ├── package.json
    └── tailwind.config.js     # Tailwind theme configurations
```

---

## 🏗️ Architecture

RAAHI is currently architected as a **Frontend-Only Prototype**. 

- **Frontend:** Two decoupled Single Page Applications. The Tourist app is built with Create-React-App and Tailwind CSS. The Admin Dashboard is a vanilla HTML file utilizing React and Tailwind via CDN.
- **Backend:** **None.** There is no active server or API gateway.
- **Database:** **None.** Data persistence is currently mocked using a large, hardcoded JavaScript object (`DATA`) within `Raahi-dashboard/app.js`.
- **State Management:** Utilizes native React Hooks (`useState`, `useEffect`, `useRef`). State-based conditional rendering is used in place of a dedicated routing library.
- **Authentication:** **None.** The prototype currently bypasses authentication flows, allowing immediate access to both the user and admin views.
- **External APIs:** Directly calls Google Gemini API and Google Maps API from the client side.

---

## 💻 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Framework (Tourist App)** | React 18 (Create-React-App) |
| **Framework (Dashboard)** | React 18 (via CDN) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS v3.4 |
| **Data Visualization** | Chart.js |
| **Database** | Mocked in-memory JSON data |
| **Authentication** | *Not Implemented* |
| **Maps Integration** | Google Maps API |
| **AI Integration** | Google Generative AI (Gemini) API |
| **Hosting** | Netlify |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16.x or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/ShadyNights/RAAHI.git
cd RAAHI
```

### 2. Set Up the Tourist App (`Raahi-main`)
Navigate to the `Raahi-main` directory and install dependencies:
```bash
cd Raahi-main
npm install
```

Configure environment variables (see section below), then start the development server:
```bash
npm start
```
The Tourist App will be available at `http://localhost:3000`.

### 3. Set Up the Admin Dashboard (`Raahi-dashboard`)
The dashboard is a static site and does not require a build step. Navigate to its directory and serve it:
```bash
cd ../Raahi-dashboard
npx serve .
```
The Dashboard will be available at `http://localhost:3000` (or the port specified by `serve`).

---

## 🔐 Environment Variables

To run the `Raahi-main` application, you must provide your own API keys. Create a `.env` file in the root of the `Raahi-main` folder:

```env
# Google Maps API Key for Zone Maps and Geo-fencing
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Gemini AI API Key for Indira AI Assistant and Translator
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Warning:** Never commit active API keys to public version control. Client-side API keys should be restricted by HTTP referrers in a production environment.

---

## 📱 Usage

- **Tourist Navigation:** Open the `Raahi-main` app. Use the bottom navigation bar or the full-page Hamburger menu to access features like the Indira AI assistant, the Live Translator, or the Zone Map.
- **Triggering SOS:** Tap the prominent SOS button on the home screen to simulate an emergency alert.
- **Admin Monitoring:** Open the `Raahi-dashboard` app. Use the sidebar to navigate between the Live Map, Analytics, and SOS Alerts views. Note that data is currently pre-populated from the mock state.

---

## ⚠️ Current Limitations

As a proof-of-concept prototype, RAAHI currently has the following limitations:
- **No Backend / Database:** All data, including tourist locations, history, and dashboard analytics, is mocked in memory and resets on refresh.
- **No Authentication:** There is no user registration, login, or Role-Based Access Control (RBAC).
- **Client-Side API Calls:** Google API keys are accessed directly by the React frontend. In a production environment, these calls must be proxied through a secure backend server.
- **State-Based Routing:** The application uses custom state to swap components rather than a robust router (e.g., React Router), which limits URL deep-linking and browser history navigation.

---

## 🗺️ Future Roadmap

- [ ] **Backend Integration:** Develop a Node.js/Express REST API to handle business logic.
- [ ] **Database Migration:** Implement MongoDB or PostgreSQL for persistent user, location, and alert data storage.
- [ ] **Authentication:** Integrate JWT or OAuth (e.g., NextAuth/Auth0) for secure user and admin login.
- [ ] **WebSockets:** Implement Socket.io for true real-time GPS tracking and live SOS alert pushes to the dashboard.
- [ ] **Routing:** Refactor `Raahi-main` to use `react-router-dom`.
- [ ] **Secure API Proxy:** Move Gemini and Google Maps API calls to the backend to secure API keys.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Kashif Ansari**

- GitHub: https://github.com/ShadyNights
- LinkedIn: https://www.linkedin.com/in/kashifansari18
