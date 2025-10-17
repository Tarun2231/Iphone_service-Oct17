import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminSidebar from './components/AdminSidebar';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import AdminServices from './pages/AdminServices';
import FastRepair from './pages/FastRepair';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  return token ? children : <Navigate to="/admin/login" />;
};

// Admin Layout Component
const AdminLayout = ({ children }) => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    window.location.href = '/admin/login';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 flex-shrink-0">
        <AdminSidebar onLogout={handleLogout} />
      </div>
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          
          <Route path="/services" element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          } />
          
          <Route path="/book" element={
            <>
              <Navbar />
              <Booking />
              <Footer />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          } />
          
          <Route path="/fast-repair" element={
            <>
              <Navbar />
              <FastRepair />
              <Footer />
            </>
          } />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/bookings" element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminBookings />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/services" element={
            <ProtectedRoute>
              <AdminLayout>
                <AdminServices />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/customers" element={
            <ProtectedRoute>
              <AdminLayout>
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Customers</h1>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-600">Customer management features coming soon...</p>
                  </div>
                </div>
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/settings" element={
            <ProtectedRoute>
              <AdminLayout>
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-600">Settings panel coming soon...</p>
                  </div>
                </div>
              </AdminLayout>
            </ProtectedRoute>
          } />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
