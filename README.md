# WDD 430 Dashboard Application - Learn Next.js Tutorial

A comprehensive dashboard application built as part of **WDD 430: Web Full-Stack Development** coursework at BYU-Idaho. This project demonstrates mastery of Next.js fundamentals through the official Next.js Learn Course tutorial.

> **Student:** Tro Opong Ebenezer Jules Samuel  
> **Course:** WDD 430 - Web Full-Stack Development  
> **Institution:** Brigham Young University - Idaho

## 📚 Course Objectives

This assignment focuses on becoming familiar with Next.js by completing the official [Next.js Learn Course](https://nextjs.org/learn) tutorial. The project showcases modern web development practices including server-side rendering, routing, and component-based architecture.

## 🎯 Project Overview

This Dashboard App is a single-page application (SPA) featuring client-side navigation and multiple functional pages for managing customers and invoices. Built following the Next.js 14 tutorial created by Vercel, it demonstrates practical implementation of full-stack development concepts.

![Next.js Course Overview](https://nextjs.org/_next/image?url=%2Flearn%2Fcourse-explainer.png&w=1920&q=75&dpl=dpl_DiW2ecigo2JKHD1ioFP2oTFMkZS8)

## ✨ Key Features

### Core Dashboard Functionality
- **Dashboard Home** - Summary view displaying invoice statistics and recent activity
- **Invoices Management** - Complete CRUD operations with search, create, edit, and delete capabilities
- **Customer Management** - Comprehensive customer list with search functionality
- **Responsive Design** - Mobile-first approach with adaptive layouts for all screen sizes
- **Interactive Navigation** - Active state indicators with hover and focus effects

### Technical Implementation (Chapters 1-5)
- ✅ **Chapter 1:** Getting Started - Project setup and structure
- ✅ **Chapter 2:** CSS Styling - Tailwind CSS integration
- ✅ **Chapter 3:** Optimizing Fonts and Images - Next.js optimization features
- ✅ **Chapter 4:** Creating Layouts and Pages - File-based routing system
- ✅ **Chapter 5:** Navigating Between Pages - Link component and navigation patterns

### Advanced Features (Future Development)
- 🔄 Multi-user system with role-based access
- 🔐 OAuth authentication integration
- 🎨 Dark theme based on system preferences
- 📄 Pagination for scalable data display
- 🔍 Enhanced search and filtering capabilities

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (via Vercel Postgres)
- **Deployment:** Vercel
- **Icons:** Heroicons
- **Fonts:** Custom fonts via next/font

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18.17 or later
npm or yarn package manager
```

### Installation

1. **Clone the repository**
```bash
git clone <your-github-repo-url>
cd dashboard-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Create .env.local file
cp .env.example .env.local
```

4. **Seed the database**
```bash
npm run seed
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
```
Navigate to http://localhost:3000
```

## 📁 Project Structure

```
dashboard-app/
├── app/
│   ├── dashboard/
│   │   ├── (overview)/
│   │   │   └── page.tsx          # Dashboard home
│   │   ├── invoices/
│   │   │   └── page.tsx          # Invoices list
│   │   ├── customers/
│   │   │   └── page.tsx          # Customers list
│   │   ├── user-profile/
│   │   │   └── page.tsx          # User profile
│   │   ├── settings/
│   │   │   └── page.tsx          # Settings
│   │   └── layout.tsx            # Dashboard layout
│   ├── lib/
│   │   ├── data.ts               # Data fetching functions
│   │   └── definitions.ts        # TypeScript types
│   ├── ui/
│   │   ├── dashboard/            # Dashboard components
│   │   └── fonts.ts              # Font configurations
│   └── page.tsx                  # Home page
├── public/                       # Static assets
└── package.json
```

## 🔗 Navigation Links

The application features the following main routes:

- 🏠 **Dashboard:** `http://localhost:3000/dashboard`
- 📄 **Invoices:** `http://localhost:3000/dashboard/invoices`
- 👥 **Customers:** `http://localhost:3000/dashboard/customers`
- 👤 **User Profile:** `http://localhost:3000/dashboard/user-profile`
- ⚙️ **Settings:** `http://localhost:3000/dashboard/settings`

## 📸 Screenshots

### Desktop View
![Dashboard Desktop View](./public/hero-desktop.png)

### Mobile View
![Dashboard Mobile View](./public/hero-mobile.png)

## 📝 Assignment Completion Checklist

- [x] Project setup in dedicated folder
- [x] Complete Chapter 1: Getting Started
- [x] Complete Chapter 2: CSS Styling
- [x] Complete Chapter 3: Optimizing Fonts and Images
- [x] Complete Chapter 4: Creating Layouts and Pages
- [x] Complete Chapter 5: Navigating Between Pages
- [x] All tabs working with proper navigation
- [x] Hover and focus states implemented
- [x] Placeholder pages with correct URLs
- [x] GitHub repository created and updated
- [x] Local application screenshot captured

## 🎓 Learning Outcomes

Through this project, the following skills were developed:

- Understanding Next.js App Router architecture
- Implementing file-based routing systems
- Optimizing fonts and images with Next.js
- Creating responsive layouts with Tailwind CSS
- Building reusable React components
- Managing navigation and active states
- Working with TypeScript in Next.js projects
- Structuring a full-stack application

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🤝 Contributing

This is an educational project for WDD 430. Feedback and suggestions are welcome!

## 📄 License

This project is created for educational purposes as part of the BYU-Idaho WDD 430 course curriculum.

## 👨‍💻 Author

**Tro Opong Ebenezer Jules Samuel**  
BYU-Idaho - Web Full-Stack Development Program

---

*Last Updated: November 2025*  
*Next.js Version: 14.x*  
*Tutorial Progress: Chapters 1-5 Complete* ✅