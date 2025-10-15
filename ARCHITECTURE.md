# 🗺️ Project Architecture & File Map

## 📊 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        WASTE MANAGEMENT SYSTEM                   │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────┐         ┌──────────────────────┐
│   FRONTEND (React)   │────────▶│   BACKEND (Node.js)  │
│   Port: 3000         │  API    │   Port: 5000         │
│                      │◀────────│                      │
└──────────────────────┘         └──────────────────────┘
          │                                  │
          │                                  │
          ▼                                  ▼
┌──────────────────────┐         ┌──────────────────────┐
│   Browser Storage    │         │  MongoDB Database    │
│   - JWT Token        │         │  - 10 Collections    │
│   - User Preferences │         │  - Indexed Queries   │
└──────────────────────┘         └──────────────────────┘
                                           │
                                           ▼
                                 ┌──────────────────────┐
                                 │  External Services   │
                                 │  - Email (Nodemailer)│
                                 │  - SMS (Twilio)      │
                                 │  - Payments (Stripe) │
                                 │  - Storage (Cloud)   │
                                 └──────────────────────┘
```

## 📁 Complete File Structure

```
Waste Management System/
│
├── 📄 START_HERE.md                    ⭐ Begin here!
├── 📄 README.md                        📚 Main documentation
├── 📄 PROJECT_SCOPE.md                 📋 Complete requirements
├── 📄 INSTALLATION.md                  🔧 Setup guide
├── 📄 PROJECT_SUMMARY.md               📊 Technical summary
├── 📄 COMMANDS.md                      ⚡ Quick commands
├── 📄 .gitignore                       🚫 Git exclusions
│
├── 📂 backend/                         🔙 Backend API
│   │
│   ├── 📂 config/
│   │   └── database.js                 - MongoDB connection
│   │
│   ├── 📂 controllers/
│   │   └── authController.js           - Authentication logic
│   │
│   ├── 📂 middleware/
│   │   ├── auth.js                     - JWT verification
│   │   ├── errorHandler.js             - Error handling
│   │   ├── rateLimiter.js              - Rate limiting
│   │   └── validator.js                - Input validation
│   │
│   ├── 📂 models/                      📊 Database Schemas
│   │   ├── User.js                     - User accounts
│   │   ├── Resident.js                 - Resident profiles
│   │   ├── Zone.js                     - Geographic zones
│   │   ├── Schedule.js                 - Collection schedules
│   │   ├── Vehicle.js                  - Fleet vehicles
│   │   ├── Bin.js                      - Waste bins
│   │   ├── ServiceRequest.js           - User requests
│   │   ├── Payment.js                  - Transactions
│   │   ├── WasteData.js                - Analytics data
│   │   └── Notification.js             - Notifications
│   │
│   ├── 📂 routes/                      🛣️ API Endpoints
│   │   ├── authRoutes.js               - /api/v1/auth/*
│   │   ├── userRoutes.js               - /api/v1/users/*
│   │   ├── residentRoutes.js           - /api/v1/residents/*
│   │   ├── scheduleRoutes.js           - /api/v1/schedules/*
│   │   ├── vehicleRoutes.js            - /api/v1/vehicles/*
│   │   ├── binRoutes.js                - /api/v1/bins/*
│   │   ├── serviceRequestRoutes.js     - /api/v1/service-requests/*
│   │   ├── paymentRoutes.js            - /api/v1/payments/*
│   │   ├── wasteDataRoutes.js          - /api/v1/waste-data/*
│   │   ├── zoneRoutes.js               - /api/v1/zones/*
│   │   ├── dashboardRoutes.js          - /api/v1/dashboard/*
│   │   └── notificationRoutes.js       - /api/v1/notifications/*
│   │
│   ├── 📂 utils/                       🛠️ Utilities
│   │   ├── emailService.js             - Email sending
│   │   ├── smsService.js               - SMS sending
│   │   └── notificationService.js      - Multi-channel notifications
│   │
│   ├── 📂 jobs/                        ⏰ Scheduled Tasks
│   │   ├── notificationJobs.js         - Automated notifications
│   │   └── binJobs.js                  - Bin monitoring
│   │
│   ├── 📂 uploads/                     📁 File storage
│   │   └── .gitkeep
│   │
│   ├── 📄 server.js                    🚀 Main entry point
│   ├── 📄 package.json                 📦 Dependencies
│   ├── 📄 .env.example                 🔐 Environment template
│   ├── 📄 .gitignore                   🚫 Exclusions
│   └── 📄 README.md                    📚 Backend docs
│
└── 📂 frontend/                        🎨 React Frontend
    │
    ├── 📂 public/                      🌐 Static assets
    │   └── (images, icons, etc.)
    │
    ├── 📂 src/
    │   │
    │   ├── 📂 components/              🧩 Reusable Components
    │   │   ├── Header.jsx              - Top navigation
    │   │   ├── Sidebar.jsx             - Side navigation
    │   │   ├── Layout.jsx              - Main layout
    │   │   └── PrivateRoute.jsx        - Route protection
    │   │
    │   ├── 📂 pages/                   📄 Page Components
    │   │   │
    │   │   ├── 📂 auth/                🔐 Authentication
    │   │   │   ├── Login.jsx
    │   │   │   ├── Register.jsx
    │   │   │   └── ForgotPassword.jsx
    │   │   │
    │   │   ├── 📂 resident/            🏠 Resident Pages
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── CollectionSchedule.jsx
    │   │   │   ├── ServiceRequests.jsx
    │   │   │   ├── Payments.jsx
    │   │   │   └── Profile.jsx
    │   │   │
    │   │   ├── 📂 city-manager/        🏙️ City Manager
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── FleetManagement.jsx
    │   │   │   ├── RouteManagement.jsx
    │   │   │   ├── BinManagement.jsx
    │   │   │   └── RequestManagement.jsx
    │   │   │
    │   │   ├── 📂 admin/               👨‍💼 Admin Pages
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── UserManagement.jsx
    │   │   │   ├── ZoneManagement.jsx
    │   │   │   └── SystemSettings.jsx
    │   │   │
    │   │   ├── 📂 sustainability/      🌱 Sustainability
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── Analytics.jsx
    │   │   │   ├── Reports.jsx
    │   │   │   └── EnvironmentalImpact.jsx
    │   │   │
    │   │   └── NotFound.jsx            🔍 404 page
    │   │
    │   ├── 📂 services/                🔌 API Services
    │   │   └── api.js                  - Axios configuration
    │   │
    │   ├── 📂 store/                   💾 State Management
    │   │   └── authStore.js            - Authentication state
    │   │
    │   ├── 📄 App.jsx                  🎯 Main app component
    │   ├── 📄 main.jsx                 🚀 Entry point
    │   └── 📄 index.css                🎨 Global styles
    │
    ├── 📄 index.html                   🌐 HTML template
    ├── 📄 vite.config.js               ⚙️ Vite configuration
    ├── 📄 tailwind.config.js           🎨 Tailwind config
    ├── 📄 postcss.config.js            🎨 PostCSS config
    ├── 📄 .eslintrc.cjs                📏 ESLint config
    ├── 📄 package.json                 📦 Dependencies
    ├── 📄 .env.example                 🔐 Environment template
    ├── 📄 .gitignore                   🚫 Exclusions
    └── 📄 README.md                    📚 Frontend docs
```

## 🔄 Data Flow Diagram

```
┌──────────────┐
│    USER      │
│  (Browser)   │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────┐
│   FRONTEND (React)               │
│   ┌────────────────────────┐    │
│   │  Components & Pages    │    │
│   └────────┬───────────────┘    │
│            │                     │
│   ┌────────▼───────────────┐    │
│   │  State Management      │    │
│   │  (Zustand)             │    │
│   └────────┬───────────────┘    │
│            │                     │
│   ┌────────▼───────────────┐    │
│   │  API Service (Axios)   │    │
│   └────────┬───────────────┘    │
└────────────┼───────────────────┬┘
             │                   │
             │ HTTP Requests     │ Socket.io
             │                   │
┌────────────▼───────────────────▼┐
│   BACKEND (Node.js/Express)     │
│   ┌────────────────────────┐    │
│   │  Routes (API Endpoints)│    │
│   └────────┬───────────────┘    │
│            │                     │
│   ┌────────▼───────────────┐    │
│   │  Middleware            │    │
│   │  - Auth                │    │
│   │  - Validation          │    │
│   └────────┬───────────────┘    │
│            │                     │
│   ┌────────▼───────────────┐    │
│   │  Controllers           │    │
│   │  (Business Logic)      │    │
│   └────────┬───────────────┘    │
│            │                     │
│   ┌────────▼───────────────┐    │
│   │  Models (Mongoose)     │    │
│   └────────┬───────────────┘    │
└────────────┼─────────────────────┘
             │
             ▼
┌─────────────────────────────────┐
│   DATABASE (MongoDB)            │
│   ┌───────────────────────┐    │
│   │  Collections:         │    │
│   │  - users              │    │
│   │  - residents          │    │
│   │  - zones              │    │
│   │  - schedules          │    │
│   │  - vehicles           │    │
│   │  - bins               │    │
│   │  - servicerequests    │    │
│   │  - payments           │    │
│   │  - wastedata          │    │
│   │  - notifications      │    │
│   └───────────────────────┘    │
└─────────────────────────────────┘
```

## 🔐 Authentication Flow

```
┌────────────┐
│   Login    │
│   Page     │
└─────┬──────┘
      │
      │ 1. Submit credentials
      ▼
┌─────────────┐
│   Backend   │
│   /auth     │
│   /login    │
└─────┬───────┘
      │
      │ 2. Verify credentials
      │    Hash password
      │    Query database
      ▼
┌──────────────┐
│   MongoDB    │
│   users      │
└─────┬────────┘
      │
      │ 3. Generate JWT token
      ▼
┌────────────────┐
│   Response     │
│   {            │
│     token: "..." │
│     user: {...}  │
│   }            │
└────┬───────────┘
     │
     │ 4. Store token
     ▼
┌───────────────┐
│  localStorage │
│  token: "..." │
└────┬──────────┘
     │
     │ 5. Redirect to dashboard
     ▼
┌───────────────┐
│   Protected   │
│   Route       │
└───────────────┘
```

## 🚀 API Request Flow

```
Frontend Request
      │
      ▼
┌───────────────────┐
│  Axios Interceptor│
│  Add JWT Token    │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Express Router  │
│   Route Matching  │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Auth Middleware │
│   Verify Token    │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│  Authorization    │
│  Check Roles      │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Validation      │
│   Input Check     │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Controller      │
│   Business Logic  │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Model           │
│   Database Query  │
└────────┬──────────┘
         │
         ▼
┌───────────────────┐
│   Response        │
│   JSON Format     │
└────────┬──────────┘
         │
         ▼
      Frontend
```

## 📊 Database Relationships

```
┌──────────┐
│   User   │
│  (Base)  │
└────┬─────┘
     │
     ├─────────┐
     │         │
     ▼         ▼
┌─────────┐  ┌──────────────┐
│Resident │  │City Manager  │
│         │  │Admin         │
│         │  │Sustainability│
└────┬────┘  └──────────────┘
     │
     ├──────────────┐
     │              │
     ▼              ▼
┌─────────┐  ┌─────────────┐
│  Zone   │  │   Bins      │
└────┬────┘  └─────────────┘
     │
     ├──────────────┬──────────────┐
     │              │              │
     ▼              ▼              ▼
┌─────────┐  ┌──────────┐  ┌──────────┐
│Schedule │  │ Vehicle  │  │  Waste   │
│         │  │          │  │   Data   │
└─────────┘  └──────────┘  └──────────┘
     │
     ▼
┌──────────────────┐
│ Service Request  │
│                  │
└──────────────────┘
     │
     ▼
┌──────────────────┐
│    Payment       │
│                  │
└──────────────────┘
```

## 🎯 User Role Access Matrix

```
                     Resident  City Manager  Admin  Sustainability
────────────────────────────────────────────────────────────────────
Dashboard               ✅          ✅        ✅         ✅
View Schedule           ✅          ✅        ✅         ❌
Create Request          ✅          ❌        ✅         ❌
View Requests           ✅          ✅        ✅         ❌
Manage Requests         ❌          ✅        ✅         ❌
Make Payment            ✅          ❌        ✅         ❌
View Payments           ✅          ✅        ✅         ❌
Manage Fleet            ❌          ✅        ✅         ❌
Manage Routes           ❌          ✅        ✅         ❌
Manage Bins             ❌          ✅        ✅         ❌
Manage Users            ❌          ❌        ✅         ❌
Manage Zones            ❌          ❌        ✅         ❌
System Settings         ❌          ❌        ✅         ❌
View Analytics          ❌          ✅        ✅         ✅
Generate Reports        ❌          ❌        ✅         ✅
Environmental Data      ❌          ❌        ✅         ✅
```

## 📱 Responsive Breakpoints

```
Mobile          Tablet          Desktop
0-767px         768-1023px      1024px+
───────         ───────         ────────
┌─────┐         ┌───────┐       ┌──────────┐
│     │         │       │       │          │
│  📱 │         │  📱💻 │       │   💻    │
│     │         │       │       │          │
└─────┘         └───────┘       └──────────┘
Single          Stacked         Full Layout
Column          Cards           with Sidebar
```

## 🔄 Real-time Notification Flow

```
Event Triggered
      │
      ▼
┌──────────────────┐
│  Create          │
│  Notification    │
│  (Backend)       │
└────────┬─────────┘
         │
    ┌────┴────┬────────┐
    │         │        │
    ▼         ▼        ▼
┌────────┐ ┌─────┐ ┌─────┐
│ Email  │ │ SMS │ │Push │
└────────┘ └─────┘ └──┬──┘
                      │
              ┌───────┴────────┐
              │                │
              ▼                ▼
        ┌──────────┐    ┌──────────┐
        │Socket.io │    │ Database │
        │Broadcast │    │  Save    │
        └────┬─────┘    └──────────┘
             │
             ▼
      ┌─────────────┐
      │  Frontend   │
      │  Receives   │
      │  Toast      │
      └─────────────┘
```

---

## 📊 File Count Summary

| Category | Count | Description |
|----------|-------|-------------|
| **Backend** | 60+ | API, models, middleware |
| **Frontend** | 40+ | Components, pages, services |
| **Documentation** | 7 | Guides and references |
| **Configuration** | 10+ | Config files |
| **Total** | **100+** | Complete project |

---

## 🎯 Quick Navigation

- **Start Here**: START_HERE.md
- **Installation**: INSTALLATION.md
- **API Reference**: backend/README.md
- **Frontend Guide**: frontend/README.md
- **Commands**: COMMANDS.md
- **Architecture**: This file!

---

**Use this as your project map! 🗺️**
