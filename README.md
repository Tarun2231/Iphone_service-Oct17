# 📱 Phone Service Pro - React Frontend

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue)](https://tarun2231.github.io/Iphone_service-Oct17/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-blue)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.10-purple)](https://vitejs.dev/)

A comprehensive React.js frontend website for a Phone Service Company with admin dashboard functionality.

🌐 **Live Demo**: [https://tarun2231.github.io/Iphone_service-Oct17/](https://tarun2231.github.io/Iphone_service-Oct17/)

## 🚀 Features

### Customer-Facing Features
- **Home Page**: Hero section, popular services, testimonials, and company information
- **Services Page**: Browse all services with search, filtering, and sorting capabilities
- **Booking Page**: Complete booking form with validation and confirmation
- **Contact Page**: Contact form, business information, and FAQ section

### Admin Dashboard
- **Admin Login**: Secure authentication system
- **Dashboard**: Overview with statistics, recent bookings, and quick actions
- **Bookings Management**: View, edit, and manage customer bookings
- **Services Management**: CRUD operations for service catalog
- **Customer Management**: Customer information management (placeholder)
- **Settings**: System settings (placeholder)

## 🛠️ Technical Stack

- **React 18** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Main navigation
│   ├── Footer.jsx      # Site footer
│   ├── ServiceCard.jsx # Service display card
│   ├── BookingForm.jsx # Booking form component
│   └── AdminSidebar.jsx # Admin navigation
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Services.jsx    # Services listing
│   ├── Booking.jsx     # Booking page
│   ├── Contact.jsx     # Contact page
│   ├── AdminLogin.jsx  # Admin authentication
│   ├── AdminDashboard.jsx # Admin overview
│   ├── AdminBookings.jsx  # Booking management
│   └── AdminServices.jsx  # Service management
├── data/               # Mock data
│   └── mockData.js     # Sample data for services, bookings, etc.
├── App.jsx             # Main app component with routing
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with consistent color scheme
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Accessibility**: Semantic HTML and proper ARIA labels
- **User Experience**: Intuitive navigation and clear call-to-actions

## 🔐 Authentication

The admin section uses a simple mock authentication system:
- **Demo Credentials**:
  - Email: `admin@phoneservice.com`
  - Password: `admin123`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd phone-service-company
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 GitHub Pages Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. 

### Deployment Process:
1. **Automatic**: Every push to the `main` branch triggers deployment
2. **Workflow**: Uses GitHub Actions to build and deploy the React app
3. **URL**: https://tarun2231.github.io/Iphone_service-Oct17/

### Manual Deployment:
If you need to deploy manually, you can run:
```bash
npm run build
# The built files will be in the 'dist' directory
```

## 📄 Pages Overview

### Public Pages

#### Home Page (`/`)
- Hero section with company branding
- Popular services showcase
- Customer testimonials
- About us section
- Call-to-action sections

#### Services Page (`/services`)
- Complete service catalog
- Search functionality
- Category filtering
- Price sorting
- Grid/list view toggle

#### Booking Page (`/book`)
- Multi-step booking form
- Service selection
- Date/time picker
- Form validation
- Confirmation message

#### Contact Page (`/contact`)
- Contact information
- Interactive contact form
- Business hours
- Location map placeholder
- FAQ section

### Admin Pages

#### Admin Login (`/admin/login`)
- Secure login form
- Demo credentials display
- Authentication validation

#### Dashboard (`/admin`)
- Key performance metrics
- Recent bookings overview
- Top services statistics
- Quick action buttons
- System alerts

#### Bookings Management (`/admin/bookings`)
- Complete bookings list
- Status management
- Search and filtering
- Booking details modal
- Export functionality

#### Services Management (`/admin/services`)
- Service catalog management
- Add/edit/delete services
- Category organization
- Image management
- Price and time settings

## 🎯 Key Features Implemented

### ✅ Core Requirements
- [x] React Router for navigation
- [x] Tailwind CSS for styling
- [x] Responsive design (mobile & desktop)
- [x] All required pages and routes
- [x] Reusable components
- [x] Mock data integration

### ✅ Admin Dashboard
- [x] Protected routes
- [x] Authentication system
- [x] Dashboard overview
- [x] Bookings management
- [x] Services CRUD operations
- [x] Sidebar navigation

### ✅ Bonus Features
- [x] Search functionality
- [x] Form validation
- [x] Interactive UI elements
- [x] Professional design
- [x] Smooth animations

## 🔮 Future Enhancements

- Real backend integration
- User authentication system
- Payment processing
- Email notifications
- Advanced reporting
- Inventory management
- Customer reviews system
- Dark mode toggle
- Multi-language support

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ using React and Tailwind CSS**
