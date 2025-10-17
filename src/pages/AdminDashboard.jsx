import React from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users,
  Wrench,
  AlertCircle
} from 'lucide-react';

const AdminDashboard = () => {
  // Mock dashboard data
  const stats = [
    {
      title: 'Total Bookings',
      value: '156',
      change: '+12%',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Completed Services',
      value: '142',
      change: '+8%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Pending Services',
      value: '14',
      change: '-3%',
      changeType: 'negative',
      icon: Clock,
      color: 'bg-yellow-500'
    },
    {
      title: 'Revenue This Month',
      value: '$12,450',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-purple-500'
    }
  ];

  const recentBookings = [
    {
      id: 1,
      customer: 'John Smith',
      service: 'iPhone Screen Replacement',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'Completed',
      amount: '$89.99'
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      service: 'Android Screen Repair',
      date: '2024-01-15',
      time: '2:30 PM',
      status: 'In Progress',
      amount: '$79.99'
    },
    {
      id: 3,
      customer: 'Mike Davis',
      service: 'iPhone Battery Replacement',
      date: '2024-01-16',
      time: '11:15 AM',
      status: 'Pending',
      amount: '$49.99'
    },
    {
      id: 4,
      customer: 'Emily Chen',
      service: 'Phone Unlocking',
      date: '2024-01-16',
      time: '3:45 PM',
      status: 'Completed',
      amount: '$29.99'
    }
  ];

  const topServices = [
    { name: 'iPhone Screen Replacement', bookings: 45, revenue: '$4,049.55' },
    { name: 'Battery Replacement', bookings: 32, revenue: '$1,599.68' },
    { name: 'Android Screen Repair', bookings: 28, revenue: '$2,239.72' },
    { name: 'Phone Unlocking', bookings: 24, revenue: '$719.76' },
    { name: 'Water Damage Repair', bookings: 18, revenue: '$2,339.82' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">from last month</span>
                  </div>
                </div>
                <div className={`${stat.color} rounded-full p-3`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">{booking.customer}</h3>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{booking.service}</p>
                    <p className="text-xs text-gray-500 mt-1">{booking.date} at {booking.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{booking.amount}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View all bookings →
              </button>
            </div>
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Top Services</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-primary-600">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-500">{service.bookings} bookings</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">{service.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Wrench className="h-8 w-8 text-primary-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">Add New Service</p>
              <p className="text-sm text-gray-600">Create a new repair service</p>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Users className="h-8 w-8 text-primary-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">View Customers</p>
              <p className="text-sm text-gray-600">Manage customer information</p>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <TrendingUp className="h-8 w-8 text-primary-600 mr-3" />
            <div className="text-left">
              <p className="font-medium text-gray-900">View Reports</p>
              <p className="text-sm text-gray-600">Business analytics and insights</p>
            </div>
          </button>
        </div>
      </div>

      {/* Alerts */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="h-5 w-5 text-yellow-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-yellow-800">Low inventory alert</p>
              <p className="text-xs text-yellow-600">iPhone 13 Pro screens running low</p>
            </div>
          </div>
          
          <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <Clock className="h-5 w-5 text-blue-600 mr-3" />
            <div>
              <p className="text-sm font-medium text-blue-800">Appointment reminder</p>
              <p className="text-xs text-blue-600">3 appointments scheduled for tomorrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
