// Mock data for the phone service company

export const services = [
  {
    id: 1,
    name: "iPhone Screen Replacement",
    description: "Professional iPhone screen replacement service with original quality parts",
    price: 89.99,
    estimatedTime: "30-45 minutes",
    category: "iPhone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "iPhone Battery Replacement",
    description: "Replace your iPhone battery with a high-quality replacement",
    price: 49.99,
    estimatedTime: "20-30 minutes",
    category: "iPhone",
    image: "https://images.unsplash.com/photo-1601972602288-526e06b1f8f1?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "iPhone Water Damage Repair",
    description: "Expert water damage assessment and repair service",
    price: 129.99,
    estimatedTime: "1-2 hours",
    category: "iPhone",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Android Screen Repair",
    description: "Professional Android screen repair for all major brands",
    price: 79.99,
    estimatedTime: "45-60 minutes",
    category: "Android",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Phone Unlocking Service",
    description: "Unlock your phone from any carrier network",
    price: 29.99,
    estimatedTime: "15-30 minutes",
    category: "Software",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Data Recovery Service",
    description: "Recover lost data from damaged or broken phones",
    price: 99.99,
    estimatedTime: "2-4 hours",
    category: "Software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Charging Port Repair",
    description: "Fix charging issues with professional port replacement",
    price: 59.99,
    estimatedTime: "30-45 minutes",
    category: "Hardware",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Phone Case & Accessories",
    description: "Premium phone cases and accessories for protection",
    price: 24.99,
    estimatedTime: "Immediate",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601972602231-4c2e81f8c1b3?w=400&h=300&fit=crop"
  }
];

export const bookings = [
  {
    id: 1,
    customerName: "John Smith",
    phoneNumber: "+1 (555) 123-4567",
    deviceBrand: "iPhone",
    deviceModel: "iPhone 13 Pro",
    serviceId: 1,
    serviceName: "iPhone Screen Replacement",
    date: "2024-01-15",
    time: "10:00",
    status: "Pending",
    notes: "Screen cracked from drop",
    createdAt: "2024-01-10T09:00:00Z"
  },
  {
    id: 2,
    customerName: "Sarah Johnson",
    phoneNumber: "+1 (555) 234-5678",
    deviceBrand: "Samsung",
    deviceModel: "Galaxy S21",
    serviceId: 4,
    serviceName: "Android Screen Repair",
    date: "2024-01-16",
    time: "14:30",
    status: "Completed",
    notes: "Screen replacement completed successfully",
    createdAt: "2024-01-11T14:30:00Z"
  },
  {
    id: 3,
    customerName: "Mike Davis",
    phoneNumber: "+1 (555) 345-6789",
    deviceBrand: "iPhone",
    deviceModel: "iPhone 12",
    serviceId: 2,
    serviceName: "iPhone Battery Replacement",
    date: "2024-01-17",
    time: "11:15",
    status: "Pending",
    notes: "Battery draining quickly",
    createdAt: "2024-01-12T11:15:00Z"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    text: "Excellent service! My iPhone screen was replaced quickly and professionally. Highly recommend!",
    rating: 5,
    service: "iPhone Screen Replacement"
  },
  {
    id: 2,
    name: "David Rodriguez",
    text: "Great experience from start to finish. Fair pricing and honest assessment of my phone's issues.",
    rating: 5,
    service: "Water Damage Repair"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    text: "Fast and reliable service. My phone works perfectly now. Will definitely come back!",
    rating: 5,
    service: "Battery Replacement"
  }
];

export const adminUser = {
  email: "admin@phoneservice.com",
  password: "admin123"
};
